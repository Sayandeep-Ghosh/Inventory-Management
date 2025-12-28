import Category from '../models/Category.js';

const addCategory = async (req, res) => {
    try {
        const { categoryName, categoryDescription } = req.body;
        const exsistingCategory = await Category.findOne({ categoryName });
        if (exsistingCategory) {
            return res.status(400).json({ success: false, message: 'Category already exists' });
        }
        const newCategory = new Category({ categoryName, categoryDescription });
        await newCategory.save();
        res.status(201).json({ success: true, message: 'Category added successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}
export { addCategory };