import { AgentSchema } from "@/types/responseAgent";
import ProviderVisagismAgent from "./provider";
import ErrorApi from "@/api/middlewares/errors";

/**
 * @class ServiceVisagismAgent
 * @description Service layer that utilizes the ProviderVisagismAgent to process facial measurements and provide recommendations based on visagism principles. This class implements the singleton pattern to ensure a single instance throughout the application.
 * @method getInstance - Static method to retrieve the singleton instance of the service.
 * @method analyzeFacialMeasurements - Method that takes facial measurements as input, creates an AI agent using the provider, and generates a response with a detailed diagnosis and haircut recommendations.
 * @returns {Promise<AgentSchema>} The response from the AI agent containing the facial diagnostic and haircut recommendations.
 */
export default class ServiceVisagismAgent extends ProviderVisagismAgent {
  private static instance: ServiceVisagismAgent;
  private provider: ProviderVisagismAgent;

  private constructor() {
    super();
    this.provider = new ProviderVisagismAgent();
  }

  public static getInstance(): ServiceVisagismAgent {
    if (!ServiceVisagismAgent.instance) {
      ServiceVisagismAgent.instance = new ServiceVisagismAgent();
    }
    return ServiceVisagismAgent.instance;
  }

  async processFacialPhoto(idUser: number, userPhoto?: string): Promise<any> {
    if (!idUser || !userPhoto) {
      throw new ErrorApi("Invalid data", 400);
    }

    // TODO - Send data to API python to process the photo and extract facial measurements, then call analyzeFacialMeasurements with the extracted data

    // const analysisResult = await this.analyzeFacialMeasurements();

    // TODO - Save analysisResult in database with idUser and return the result to the client

    // return analysisResult;
  }

  private async analyzeFacialMeasurements(measurements: any) {
    const agent = await this.provider.createAiAgent();

    if (!agent) {
      throw new ErrorApi("Error to generate AI agent", 400);
    }

    const prompt = `
      <dados_entrada>
      ${JSON.stringify(measurements)}
      </dados_entrada>`;

    const response = await agent.generate(prompt, {
      modelSettings: {
        temperature: 0.2,
      },
      structuredOutput: {
        schema: AgentSchema,
      },
    });

    return response;
  }
}
