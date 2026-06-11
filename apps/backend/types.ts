import { z } from "zod";

export const InterviewRequestSchema = z.object({
    name: z.string(),
    githubUrl: z.string().url(),
    linkedinUrl: z.string().url()
})

export type InterviewRequest = z.infer<typeof InterviewRequestSchema>;