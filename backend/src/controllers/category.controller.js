const categoryModel = require("../models/category.model");
const asyncHandler = require("../middlewares/asyncHandler");
const ApiError = require("../utils/apiError");
const singlesModel = require("../models/singlesRegistration.model");
const doublesModel = require("../models/doublesRegistration.model");
const matchModel = require("../models/match.model");
const createCategory = asyncHandler(
    async (req, res) => {
        const category = await categoryModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Category Created Successfully",
            category
        });
    }
);

const getAllCategories = asyncHandler(
    async (req, res) => {
        const categories = await categoryModel.find();

        res.status(200).json({
            success: true,
            message: "Categories Fetched Successfully",
            categories
        });
    }
);

const getCategoryById = asyncHandler(
    async (req, res) => {
        const category = await categoryModel.findById(req.params.id);

        if (!category) {
            throw new ApiError(404, "Category not found");
        }

        res.status(200).json({
            success: true,
            message: "Category Fetched Successfully",
            category
        });
    }
);

const updateCategoryById = asyncHandler(
    async (req, res) => {
        const category = await categoryModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!category) {
            throw new ApiError(404, "Category not found");
        }

        res.status(200).json({
            success: true,
            message: "Category Updated Successfully",
            category
        });
    }
);

const deleteCategoryById = asyncHandler(
    async (req, res) => {
        const category = await categoryModel.findByIdAndDelete(req.params.id);

        if (!category) {
            throw new ApiError(404, "Category not found");
        }

        res.status(200).json({
            success: true,
            message: "Category Deleted Successfully"
        });
    }
);

const getCategoriesByTournamentId = asyncHandler(
    async (req, res) => {
        const categories = await categoryModel.find({
            tournamentId: req.params.id
        });

        res.status(200).json({
            success: true,
            message: "Tournament Categories Fetched Successfully",
            count: categories.length,
            categories
        });
    }
);


function smallestPowerOf2(n) {
    return n <= 1 ? 1 : 2 ** Math.ceil(Math.log2(n));
}

const generateFixturesByCategory = asyncHandler(
    async (req, res) => {
        const category = await categoryModel.findById(req.params.id); 

        if(!category) {
            throw new ApiError(404, "Category Not Found");
        }
        
        const existingMatch = await matchModel.exists({
            categoryId: req.params.id
        });

        if(existingMatch) {
            throw new ApiError(
                400,
                "Fixtures already generated for this category"
            );
        }

        const fixtures = [];

        const PRIORITY_SEQUENCE = {
            2: [1, 2],

            4: [1, 4, 3, 2],

            8: [1, 8, 5, 4, 3, 6, 7, 2],

            16: [
                1, 16, 9, 8,
                5, 12, 13, 4,
                3, 14, 11, 6,
                7, 10, 15, 2
            ],

            32: [
                1, 32, 17, 16, 9, 24, 25, 8,
                5, 28, 21, 12, 13, 20, 29, 4,
                3, 30, 19, 14, 11, 22, 27, 6,
                7, 26, 23, 10, 15, 18, 31, 2
            ],

            64: [
                1, 64, 33, 32, 17, 48, 49, 16,
                9, 56, 41, 24, 25, 40, 57, 8,
                5, 60, 37, 28, 21, 44, 53, 12,
                13, 52, 45, 20, 29, 36, 61, 4,

                3, 62, 35, 30, 19, 46, 51, 14,
                11, 54, 43, 22, 27, 38, 59, 6,
                7, 58, 39, 26, 23, 42, 55, 10,
                15, 50, 47, 18, 31, 34, 63, 2
            ]
        };

        // singles generation
        if(category.matchType === "singles") {
            const registrations = await singlesModel.find({
                categoryId: req.params.id
            });
            const count = registrations.length;

            if(count < 2) {
                throw new ApiError(400 ,"Players count must be atleast 2");
            }

            const bracket = smallestPowerOf2(count);
            const byes = bracket - count;

            registrations.sort(()=>Math.random() - 0.5);
            const players = [...registrations];
            const prioritySequence = PRIORITY_SEQUENCE[bracket];
            const finalBracketGrid = new Array(bracket + 1).fill(undefined);
            
            for(let i = 0; i < byes; i++) {
                finalBracketGrid[prioritySequence[i]] = null;
            }
            console.log(finalBracketGrid);
            
            let playerIdx = 0;
            for(let i = 1; i <= bracket; i++) {
                if(finalBracketGrid[i] === undefined) {
                    finalBracketGrid[i] = players[playerIdx];
                    playerIdx++;
                }
            }

            for(let i = 1; i <= bracket; i += 2) {
                const player1 = finalBracketGrid[i];
                const player2 = finalBracketGrid[i + 1];


                const p1Id = player1 ? (player1.playerId?._id || player1.playerId || player1._id) : null;
                const p2Id = player2 ? (player2.playerId?._id || player2.playerId || player2._id) : null;

                fixtures.push({
                    categoryId: req.params.id,
                    playerId1: p1Id,
                    playerId2: p2Id,
                    round: 1,
                    courtNo: 1,
                    status: player1 === null || player2 === null ? "walkover" : "scheduled",
                    winnerParticipantId: player1 === null ? p2Id : (player2 === null ? p1Id : null)
                });
            }
        }
        // doubles generation
        else {
            const registrations = await doublesModel.find({
                categoryId: req.params.id
            });

            const count = registrations.length;

            if(count < 2) {
                throw new ApiError(400, "Teams count should atleast be 2");
            }

            const bracket = smallestPowerOf2(count);

            const byes = bracket - count;
            registrations.sort(()=>Math.random() - 0.5);
            const teams = [...registrations];

            const prioritySequence = PRIORITY_SEQUENCE[bracket];

            const finalBracketGrid = new Array(bracket + 1).fill(undefined);

            for(let i = 0; i < byes; i++) {
                finalBracketGrid[prioritySequence[i]] = null;
            }

            let teamIdx = 0;
            for(let i = 1; i <= bracket; i++) {
                if(finalBracketGrid[i] === undefined) {
                    finalBracketGrid[i] = teams[teamIdx];
                    teamIdx++;
                }
            }


            for(let i = 1; i <= bracket; i+=2) {
                const team1 = finalBracketGrid[i];
                const team2 = finalBracketGrid[i+1];

                fixtures.push({
                    categoryId: req.params.id,
                    teamId1: team1 ? team1.teamId : null,
                    teamId2: team2 ? team2.teamId : null,

                    round: 1,
                    courtNo: 1,

                    status: team1 === null || team2 === null
                            ? "walkover"
                            : "scheduled",

                    winnerParticipantId:
                        team1 === null
                            ? team2?.teamId
                            : team2 === null
                                ? team1?.teamId
                                : null
                });
            }
        }

        const matches = await matchModel.insertMany(fixtures);

        res.status(201).json({
            success: true,
            message: "Match Fixtures Created!",
            count: fixtures.length,
            matches
        });
    }
);

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
    getCategoriesByTournamentId,
    generateFixturesByCategory
};