import React from "react";

const AddCategories = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white border rounded-lg shadow-sm">
            {/* Header */}
            <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-700">Add category</h2>
            </div>

            {/* Form */}
            <form className="p-6 space-y-6">
                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image
                    </label>
                    <input
                        type="file"
                        className="block w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:bg-gray-100 file:text-gray-700
              hover:file:bg-gray-200
              border rounded-md"
                    />
                </div>

                {/* Product Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Product Name"
                        className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>Beauty</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                    </select>
                </div>

                {/* Code */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Code <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Code"
                        className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                    <button
                        type="submit"
                        className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-md"
                    >
                        Add category
                    </button>
                    <button
                        type="reset"
                        className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddCategories;