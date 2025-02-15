import { generateModelCall } from "./prompt";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(request: Request) {
  const { activeFileContent, files } = await request.json();

  const call = generateModelCall(activeFileContent, files);
  const response = await call();

  return NextResponse.json({ similarFiles: response.similarFiles });
}
