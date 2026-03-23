import z from "zod";

export const AgentSchema = z.object({
  facial_diagnostic: z.object({
    predominant_format: z
      .string()
      .describe("Name of the predominant facial format (e.g., Square, Oval)"),
    technical_analysis: z
      .string()
      .describe("Technical explanation about the user's facial proportions"),
  }),
  recommendations: z
    .array(
      z.object({
        cut_name: z.string(),
        description: z.string(),
        styling_tip: z.string(),
      }),
    )
    .length(3)
    .describe("List with exactly 3 haircut recommendations"),
});
