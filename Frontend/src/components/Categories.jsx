import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Categories = () => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");
    const [categoryImage, setCategoryImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("categoryName", categoryName);
        formData.append("categoryDescription", categoryDescription);
        formData.append("categoryImage", categoryImage);

        const response = await axios.post("http://localhost:3000/api/category/add", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
            },
        });
        if (response.data.success) {
            alert("Category added successfully!");
            setCategoryName("");
            setCategoryDescription("");
            setCategoryImage(null);
        } else {
            console.error("Error adding category:", response.data);
            alert("Failed to add category. Please try again.");
        }
    };

    return (
        <div className='m-4 p-1'>
            <h1 className='text-lg font-medium'>Categories Management</h1>
            <div>
                <div className='text-sm py-4 space-y-2'>
                    <p>Use category list as to describe your overall core business from the provided list.</p>
                    <p>Click the name of the category where you want to add a list item.</p>
                </div>
                <div className='flex flex-col'>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        <div className='border border-gray-300 rounded-md w-full p-2'>
                            <label htmlFor="selectImage" className="inline-block cursor-pointer bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">Choose Image</label>
                            <input
                                id="selectImage"
                                type="file"
                                accept="image/*"
                                // className="hidden"
                                onChange={(e) => setCategoryImage(e.target.files[0])}
                            />
                            {/* <span className="font-medium text-sm px-2">{imageName || "No file chosen"}</span> */}
                        </div>
                        <div className='space-y-1'>
                            <label className='text-sm font-medium'>Category Name</label><br />
                            <input type="text" className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter category name' onChange={(e) => setCategoryName(e.target.value)} />
                        </div>
                        <div className='space-y-1'>
                            <label className='text-sm font-medium'>Category Description</label><br />
                            <input className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter category description' onChange={(e) => setCategoryDescription(e.target.value)} />
                        </div>
                        <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>Add Category</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Categories
