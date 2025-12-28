import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    categoryDescription: { type: String, required: true },
    categoryImage: { type: String, required: true },
});

const CategoryModel = mongoose.model("Category", CategorySchema);

export default CategoryModel;