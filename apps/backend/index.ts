import express from "express";
import { InterviewRequestSchema } from "./types";
import { scrapeGithub } from "./scrappers.ts";

const app = express();
app.use(express.json());

app.post("api/v1/pre-interview", async (req, res) => {
    const parseResult = InterviewRequestSchema.safeParse(req.body);
    if (!parseResult.success) {
        res.status(400).json({ message: "Invalid request body", errors: parseResult.error.errors });
        return;
    }

    const data = parseResult.data;
    const githubUrl = data.githubUrl.endsWith("/") ? data.githubUrl.slice(0, -1) : data.githubUrl;
    const linkedinUrl = data.linkedinUrl.endsWith("/") ? data.linkedinUrl.slice(0, -1) : data.linkedinUrl;

    // scrape github
    const githubUserName = githubUrl.split("/").pop();
    const linkedinUserName = linkedinUrl.split("/").pop();

    const userRepoInfo = await scrapeGithub(githubUserName ?? "");
}); 