import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCZroZHIrXpxhvZVvEtEKrb6Ppcp7z8lOc";
const genAI = new GoogleGenerativeAI(API_KEY);

export async function askAi(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(
      `You are a medical AI assistant. Please provide a helpful and informative response to the following medical query: ${prompt}`
    );

    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw error;
  }
}