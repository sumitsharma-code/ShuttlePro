const categoryModel = require("../models/category.model");
const asyncHandler = require("../middlewares/asyncHandler");
const ApiError = require("../utils/apiError");

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

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
    getCategoriesByTournamentId
};