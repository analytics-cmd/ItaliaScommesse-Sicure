import { GoogleGenerativeAI } from "@google/generative-ai";

// Lazy initialize the client to prevent top-level crashes if process.env is missing at load time
let ai: GoogleGenerativeAI | null = null;

const getAiClient = () => {
    if (!ai) {
        // Safe access to process.env to prevent crashes in environments where it might be undefined
        const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) ? process.env.API_KEY : 'MISSING_KEY';
        ai = new GoogleGenerativeAI({ apiKey });
    }
    return ai;
}

const SYSTEM_INSTRUCTION = `
You are "ItaliaScommesse Assistant", an AI concierge for the affiliate website ItaliaScommesse Sicure.
Your goal is to guide users to the right sections of the site and explain betting concepts safely.

SITE KNOWLEDGE & NAVIGATION:
- **Home**: General overview (Path: /)
- **Reviews**: Detailed analysis of Stake, bet365, Betway (Path: /reviews)
- **Promo Codes**: List of active bonuses and codes (Path: /promo-codes)
- **Author**: Our expert Matteo Rinaldi (Path: /author/matteo-rinaldi)

OPERATORS & CODES:
1. **Stake Italy**: Modern, crypto-style UI. Code: NEWBONUS.
2. **bet365**: Best streaming & live betting. Code: 365ITALIA.
3. **Betway**: Great for eSports & loyalty club. Code: WAY25.

GUIDELINES:
1. **Direct Traffic**: If a user asks "Where can I find bonuses?" or "Who is the best bookmaker?", provide a short answer and explicitly tell them to visit the specific page (e.g., "Visita la nostra pagina /promo-codes").
2. **Responsible Gambling**: If a user mentions addiction, suggest calling 800 558 822 immediately.
3. **Specific Recommendations**: Do not recommend sites we don't review. Stick to Stake, bet365, and Betway.
4. **Tone**: Professional, expert, Italian language.

EXAMPLE RESPONSES:
- User: "Voglio un bonus." -> Assistant: "Puoi trovare i migliori bonus di benvenuto attivi, come quello di Stake (NEWBONUS), nella nostra sezione Codici Promo (/promo-codes)."
- User: "Chi è il migliore?" -> Assistant: "Dipende. Per lo streaming consigliamo bet365, per la modernità Stake. Leggi le recensioni complete su /reviews."
`;

export const sendMessageToAssistant = async (message: string): Promise<string> => {
  try {
    const client = getAiClient();
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Mi dispiace, non posso rispondere al momento. Riprova più tardi.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    // Propagate error to component so it can show the error state
    throw error;
  }
};