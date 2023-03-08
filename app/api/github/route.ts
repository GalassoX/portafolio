import { NextRequest, NextResponse } from "next/server";
import { octokit } from "./github";

export async function GET(request: NextRequest) {
    const response = await octokit.request('GET /users/{username}', {
        username: 'GalassoX',
    });
    return NextResponse.json(response.data)
}