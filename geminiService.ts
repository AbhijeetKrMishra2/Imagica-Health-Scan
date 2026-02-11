
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getHealthAdvice(query: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User symptoms/query: ${query}. 
      As a diagnostic center assistant, suggest which general categories of medical tests (e.g., pathology, imaging) might be relevant for these concerns. 
      IMPORTANT: Include a disclaimer that this is NOT a medical diagnosis and they should consult a doctor. 
      Keep it brief and helpful for a diagnostic center setting.`,
      config: {
        systemInstruction: "You are a helpful and professional health advisor for Imagica Health Scan. You help users understand which diagnostic tests are typically associated with certain health concerns.",
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't generate a recommendation. Please consult with our front desk staff.";
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm having trouble providing advice right now. Please speak with our reception or consult a physician.";
  }
}