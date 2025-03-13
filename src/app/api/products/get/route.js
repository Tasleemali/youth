import { NextResponse } from "next/server";
import { authDB } from "@/database/authDB";
import Product from "@/models/Product"; 

export async function GET() {
  try {
    await authDB() // Connect to MongoDB
    const products = await Product.find().lean(); // Fetch products from the database

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}