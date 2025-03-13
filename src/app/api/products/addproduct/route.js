import { authDB } from "@/database/authDB";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await authDB()
    const body = await req.json();

    const { name, mainImage, extraImages, description, category, subcategory, sizes, price, discount, newArrival } = body;

    if (!name || !mainImage || !description || !category || !subcategory || !sizes || !price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newProduct = new Product({
      name,
      mainImage,
      extraImages: extraImages ? extraImages : [], // Ensure extraImages is always an array
      description,
      category,
      subcategory,
      sizes: sizes || [],
      price,
      discount: discount || 0,
      newArrival: newArrival || false,
    });

    await newProduct.save();

    return NextResponse.json({ message: "Product added successfully!", product: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}