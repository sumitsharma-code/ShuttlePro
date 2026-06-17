const setModel = require('../models/set.model');
const asyncHandler = require('../middlewares/asyncHandler');

const ApiError = require("../utils/apiError");

const createSet = asyncHandler(
    async (req, res) => {
        const set = await setModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Set Created Successfully",
            set
        });
    }
);

const getAllSets = asyncHandler(
    async (req, res) => {
        const sets = await setModel.find();

        res.status(200).json({
            success: true,
            message: "Sets Fetched Successfully",
            sets
        });
    }
);

const getSetById = asyncHandler(
    async (req, res) => {
        const set = await setModel.findById(req.params.id);

        if(!set) {
            throw new ApiError(404, "Set not found");
        }

        res.status(200).json({
            success: true,
            message: "Set Fetched Successfully",
            set
        });
    }
);

const deleteSetById = asyncHandler(
    async (req, res) => {
        const set = await setModel.findByIdAndDelete(req.params.id);

        if(!set) {
            throw new ApiError(404, "Set not found");
        }

        res.status(200).json({
            success: true,
            message: "Set Deleted Successfully"
        });
    }
);

const updateSetById = asyncHandler(
    async (req, res) => {
        const set = await setModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if(!set) {
            throw new ApiError(404, "Set not found");
        }

        res.status(200).json({
            success: true,
            message: "Set Updated Successfully",
            set
        });
    }
);

module.exports = {
    createSet,
    getAllSets,
    getSetById,
    deleteSetById,
    updateSetById
};