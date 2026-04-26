import sql from "@/lib/db"
import { addUser } from "@/lib/user_dml";
import { Users } from "@/types/users";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = addUser(username, password)

  if (user == null) {
    return NextResponse.json({ message: "User not added" }, { status: 401 });
  }
  return NextResponse.json(user)
}