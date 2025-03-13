import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { authDB } from "@/database/authDB";

export async function GET(req) {
  try {
    await authDB()
    const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json({ message: "Not authenticated" }, { status: 401 });
    }

    let user = await User.findOne({ email: session.user.email }).select("-password");

    // Agar user Google/GitHub se login kare aur database me na ho toh create karo
    if (!user) {
      user = await User.create({
        email: session.user.email,
        name: session.user.name || "New User",
        oauthProvider: true,
      });
    }

    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    const { name, password } = await req.json();

    if (!session) {
      return Response.json({ message: "Not authenticated" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    const isOAuthUser = user.oauthProvider; // Check if user is from Google/GitHub

    if (isOAuthUser && password) {
      return Response.json({ message: "Cannot update password for Google/GitHub users." }, { status: 400 });
    }

    const updateData = { name };
    if (!isOAuthUser && password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { $set: updateData },
      { new: true }
    );

    return Response.json({ message: "Profile updated", user: updatedUser }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}