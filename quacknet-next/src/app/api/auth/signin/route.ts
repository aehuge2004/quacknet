import sql from "@/lib/db"
import { loginUser } from "@/lib/user_dml";
import { Users } from "@/types/users";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = loginUser(username, password)

  if (user == null) {
    return NextResponse.json({ message: "User not found" }, { status: 401 });
  }
  return NextResponse.json(user)
}