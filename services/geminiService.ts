
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `You are the AMP Tech Intelligent Assistant. 
AMP Tech (A M P Technologies) is a leading provider of industrial solutions including CNC machines, Wire Cut EDM, Laser systems, and Automation.
Your goal is to help customers understand technical specifications, suggest machines for their specific needs, and provide general engineering advice.
Keep responses professional, technical yet accessible, and concise. 
If asked about contact info: Address is Bangalore, India. Email: info@amptech.co.in.
Focus on: Precision, Durability, and Innovation.`;

export async function getGeminiResponse(history: ChatMessage[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently experiencing heavy load. Please try again in a moment.";
  }
}
