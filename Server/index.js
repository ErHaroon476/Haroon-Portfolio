import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log("✅ Loaded API Key:", process.env.OPENROUTER_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

app.get("/", (req, res) => {
  res.send("✅ Backend is running! OpenRouter chatbot API is ready.");
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  console.log("💬 Received message:", message);

  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat:free",
      messages: [
        {
          role: "system",
          content: `
You are Haroon Naseem's personal portfolio assistant.

Facts you know:
- Name: Haroon Naseem
- Age: 23
- Location: Lahore, Pakistan
- Email: haroonsh9876@gmail.com
- Contact: +923467565857
- Degree: Bachelor’s in Computer Engineering (COMSATS Lahore, 2020–2024)
- Skills: Full Stack MERN Developer, Next.js, TypeScript, MIPS 8086, Arduino, STM32, Figma, Adobe Illustrator, Photoshop, Graphic Designing, AI Agents, Kotlin, React Native, AI integration in web projects
- Likes: Remote work, gaming, exploring new tech
- Experience: E-bike industry (2024–2025), integrating hardware/software, admin portal, mobile rental app, live location tracking, BMS, accident detection, bike unlocking.

STRICT RULES:
1️⃣ Only answer EXACTLY what is asked.
2️⃣ Do NOT add extra information.
3️⃣ Do NOT repeat facts unless directly asked.
4️⃣ If a question is unrelated or unclear, say: "I’m sorry, I can’t help with that."
5️⃣ Keep answers SHORT and PRECISE. One or two clear sentences max.
6️⃣ NEVER add fluff or explanations unless requested.
7️⃣ If asked for contact or email, provide BOTH: haroonsh9876@gmail.com and +923467565857.
8️⃣ If asked for location, provide Lahore, Pakistan.
9️⃣ If asked for degree, provide Bachelor’s in Computer Engineering (COMSATS Lahore, 2020–2024).
10️⃣ If asked for skills, provide Full Stack MERN Developer, Next.js, TypeScript, MIPS 8086, Arduino, STM32, Figma, Adobe Illustrator, Photoshop, Graphic Designing, AI Agents, Kotlin, React Native, AI integration in web projects.
11️⃣ If asked for likes, provide Remote work, gaming, exploring new tech.
12️⃣ If asked for experience, provide E-bike industry (2024–2025), integrating hardware/software, admin portal, mobile rental app, live location tracking, BMS, accident detection, bike unlocking.
13️⃣ If asked for projects, provide E-bike industry (2024–2025), integrating hardware/software, admin portal, mobile rental app, live location tracking, BMS, accident detection, bike unlocking.
and answe smartly uses good english and be nicer to the user and dont fluff 


`.trim(),
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply = completion.choices[0].message.content;
    console.log("✅ OpenRouter reply:", reply);

    res.json({ reply });
  } catch (error) {
    console.error("❌ OpenRouter API Error:", error);
    res
      .status(500)
      .json({ error: "Something went wrong while processing your request." });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
