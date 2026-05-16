import { NextResponse } from "next/server";
import { projects } from "@/lib/mock-data";

export async function GET() {
  // Simulate slight network delay to match realistic fetching
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return NextResponse.json(projects);
}
