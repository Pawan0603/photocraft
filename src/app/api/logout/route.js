import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req) {
  // In a stateless JWT system, logout is handled client-side
  // by removing the tokens from storage

  const cookieStore = await cookies()
  cookieStore.delete("TheardCraftToken", { path: "/" })

  return NextResponse.json({
    message: "Logout successful",
  })
}
