import { NextRequest, NextResponse } from "next/server";
import { octokit } from "../../../github";

export async function GET(_request: NextRequest, context: { params: { name: string } }) {
    const repo = context.params.name;

    const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
        owner: 'GalassoX',
        repo: repo
    });

    return NextResponse.json(response.data);
}