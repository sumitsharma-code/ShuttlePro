const express = require("express");

const {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
    getCategoriesByTournamentId,
    generateFixturesByCategory
} = require("../controllers/category.controller");

const validateObjectId = require("../middlewares/validateObjectId");

const router = express.Router();

router.post("/category", createCategory);

router.get("/category", getAllCategories);

router.get("/category/:id", validateObjectId, getCategoryById);

router.put("/category/:id", validateObjectId, updateCategoryById);

router.delete("/category/:id", validateObjectId, deleteCategoryById);

router.get(
    "/tournament/:id/categories",
    validateObjectId,
    getCategoriesByTournamentId
);

router.post("/category/:id/generate-fixtures", validateObjectId, generateFixturesByCategory);

module.exports = router;