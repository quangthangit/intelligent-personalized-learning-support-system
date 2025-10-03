import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Gọi API backend thật sự
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  console.log(data)
  if (!res.ok) {
    return NextResponse.json({ error: data.message }, { status: res.status });
  }

  const response = NextResponse.json({ user: data.data });
  // set cookie HttpOnly
  response.cookies.set("accessToken", data.data.accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 1 ngày
  });

  response.cookies.set("refreshToken", data.data.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 ngày
  });

  return response;
}
