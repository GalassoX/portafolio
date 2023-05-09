import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return Response.redirect(request.nextUrl.origin);
}