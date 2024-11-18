import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    categoryDescription: { type: String, required: true },
    categoryImage: {
        type: String, // Store image as base64 or use a URL reference
        required: true,
      },
    
}, { timestamps: true });

export const Category = mongoose.model("Category", categorySchema);
