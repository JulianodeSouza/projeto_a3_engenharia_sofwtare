import { Agent } from "@mastra/core/agent";
import { groq } from '@ai-sdk/groq';
import fs from "fs";
import path from "path";

export const agent = new Agent({
  id: "visagism-agent",
  name: "Visagism AI Agent",
  instructions: fs.readFileSync(
    path.resolve(process.cwd(), "prompt_rules/prompt_rules.md"),
    "utf-8"
  ),
  model: groq("llama-3.3-70b-versatile"),
  maxRetries: 2,
});
