import React, { useState, useRef, useEffect } from "react";
import { Trash2, SendHorizonal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatbotMessages");
    return saved
      ? JSON.parse(saved)
      : [{ role: "assistant", content: "Hi! Ask me anything about Haroon Naseem." }];
  });

  const [input, setInput] = useState("");
  const messagesRef = useRef(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const scrollbarTimeout = useRef(null);

  useEffect(() => {
    localStorage.setItem("chatbotMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const key = import.meta.env.VITE_OPENROUTER_API_KEY;

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          messages: [
            {
              role: "system",
              content: `
              You are Haroon Naseem personal AI Assistant 
              who made you --haroon made you 
            
              Profile:

Name: Haroon Naseem

Age: 23

Location: Lahore, Pakistan

Email: haroonsh9876@gmail.com

Contact: +923467565857

Degree: Bachelor’s in Computer Engineering (COMSATS, 2020–2024)

Skills: MERN, Next.js, TypeScript, MIPS 8086, Arduino, STM32, Figma, Illustrator, Photoshop, Graphic Designing, AI Agents, Kotlin, React Native, AI integration

Interests: Remote work, gaming, new tech

Experience: E-bike rental system, mobile + web, BMS, GPS, accident detection, IoT integration

Behavior Rules for Assistant:

Only respond to what's asked

No extra info, no repetition

Clear, short, nice, and helpful

Concise with proper spacing

Use line breaks for clarity

Strictly to-the-point, no fluff`.trim(),
            },
            { role: "user", content: input },
          ],
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "❌ No response from AI.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("❌ OpenRouter error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Failed to reach OpenRouter." },
      ]);
    }
  };

  const clearMessages = () => {
    setMessages([
      { role: "assistant", content: "Hi! Ask me anything about Haroon Naseem." },
    ]);
    localStorage.removeItem("chatbotMessages");
  };

  const handleShowScrollbar = () => {
    setShowScrollbar(true);
    if (scrollbarTimeout.current) clearTimeout(scrollbarTimeout.current);
    scrollbarTimeout.current = setTimeout(() => setShowScrollbar(false), 1000);
  };

  useEffect(() => {
    const container = messagesRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleShowScrollbar);
    handleShowScrollbar();
    return () => {
      container.removeEventListener("scroll", handleShowScrollbar);
      if (scrollbarTimeout.current) clearTimeout(scrollbarTimeout.current);
    };
  }, [messages]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full max-w-[700px] mx-auto p-4 bg-[#0f172a] bg-opacity-90 backdrop-blur rounded-3xl shadow-2xl border border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#00CED1]"></div>
          <h2 className="text-lg font-bold text-white">Ask Me About Haroon</h2>
        </div>
        <button
          onClick={clearMessages}
          className="text-gray-400 hover:text-red-400 transition"
          title="Clear chat"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div
        ref={messagesRef}
        className={`h-[250px] overflow-y-auto px-2 py-3 bg-[#1e293b] bg-opacity-50 rounded-2xl shadow-inner ${
          showScrollbar ? " show-scrollbar" : ""
        }`}
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-2xl shadow transition-all duration-300 ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {msg.content}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex mt-4"
      >
        <input
          className="flex-1 px-4 py-3 bg-[#374151] text-white rounded-l-full focus:outline-none"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-full text-white flex items-center justify-center"
        >
          <SendHorizonal size={19} />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
