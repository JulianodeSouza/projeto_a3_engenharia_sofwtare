import { mastra } from "@/mastra";
import { Agent } from "@mastra/core/agent";

/**
 * @class ProviderVisagismAgent
 * @description Provider layer responsible for creating and configuring the AI agent that will process facial measurements and provide recommendations based on visagism principles. This class encapsulates the logic for initializing the agent with the necessary instructions and model settings.
 * @method createAiAgent - Method to create and configure the AI agent.
 * @returns {Promise<Agent>} An instance of the AI agent configured with the necessary instructions and model to perform the required tasks.
 */
export default class ProviderVisagismAgent {
  async createAiAgent(): Promise<Agent> {
    const agent = mastra.getAgent("visagism-agent");
    return agent;
  }
}
