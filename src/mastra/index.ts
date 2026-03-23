import { Mastra } from "@mastra/core";

import { agent as visagismAgent } from "./visagismAgent";

export const mastra = new Mastra({
  agents: { "visagism-agent": visagismAgent },
});
