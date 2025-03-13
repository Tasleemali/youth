"use client";

import { useState } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    mainImage: "",
    extraImages: "",
    description: "",
    category: "Men",
    subcategory: "Top",
    sizes: "",
    price: "",
    discount: "",
    newArrival: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const productData = {
      ...formData,
      sizes: formData.sizes ? formData.sizes.split(",") : [],
      extraImages: formData.extraImages ? formData.extraImages.split(",") : [], // Convert to array
      price: parseFloat(formData.price),
      discount: parseFloat(formData.discount),
    };

    const res = await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (res.ok) {
      alert("Product added successfully!");
      setFormData({
        name: "",
        mainImage: "",
        extraImages: "",
        description: "",
        category: "Men",
        subcategory: "Top",
        sizes: "",
        price: "",
        discount: "",
        newArrival: false,
      });
    } else {
      alert("Error adding product.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="w-full p-2 mb-3 border rounded" required />

        <input type="text" name="mainImage" placeholder="Main Image URL" value={formData.mainImage} onChange={handleChange} className="w-full p-2 mb-3 border rounded" required />
        
        <input type="text" name="extraImages" placeholder="Extra Image URLs (comma separated)" value={formData.extraImages} onChange={handleChange} className="w-full p-2 mb-3 border rounded" />

        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 mb-3 border rounded" required />
        
        {/* Category Dropdown */}
        <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Unisex">Unisex</option>
        </select>

        {/* Subcategory Dropdown */}
        <select name="subcategory" value={formData.subcategory} onChange={handleChange} className="w-full p-2 mb-3 border rounded">
          <option value="Top">Top</option>
          <option value="Bottom">Bottom</option>
        </select>

        <input type="text" name="sizes" placeholder="Sizes (comma separated)" value={formData.sizes} onChange={handleChange} className="w-full p-2 mb-3 border rounded" required />
        
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full p-2 mb-3 border rounded" required />
        
        <input type="number" name="discount" placeholder="Discount (%)" value={formData.discount} onChange={handleChange} className="w-full p-2 mb-3 border rounded" />

        <label className="flex items-center space-x-2">
          <input type="checkbox" name="newArrival" checked={formData.newArrival} onChange={handleChange} />
          <span>New Arrival</span>
        </label>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
      </form>
    </div>
  );
};

export default Dashboard;