import axios from "axios";

export async function scrapeGithub(username: string) {
    const repos = await axios.get(`https://api.github.com/users/${username}/repos`);
    const filteredUserRepos = repos.data.map((repo: any) => ({
        description: repo.description,
        name: repo.name,
        fullName: repo.full_name,
        starCount: repo.stargazers_count,
    }));

    return filteredUserRepos;
}

export async function scrapeLinkedIn(profileSlug: string) {
    void profileSlug;
    return [];
}

export async function scrapeResume(resumeUrl: string) {
    void resumeUrl;
    return [];
}