import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GH_TOKEN });
const username = process.env.GH_USERNAME || 'GalassoX';

export async function getRepositories() {
    const response = await octokit.request('GET /users/{username}/repos', {
        username: username
    });
    return response.data;
}

export async function getRepositorieLanguages(repositorie: string) {
    const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
        owner: username,
        repo: repositorie
    });

    return response.data;
}