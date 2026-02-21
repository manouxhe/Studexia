"use client";

import { useState } from "react";
import ChatMessage from "@/components/layout/ChatMessage";
import ChatInput from "@/components/layout/ChatInput";

type Message = {
  text: string;
  sender: "user" | "bot";
};

export default function FAQPage() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour 👋 Comment puis-je t'aider ?", sender: "bot" },
  ]);

  const [input, setInput] = useState("");

  const faqResponses = [
    {
      keywords: ["logement", "kot"],
      answer: "Tu peux consulter la section Logements.",
    },
    {
      keywords: ["job", "stage"],
      answer: "Va dans la section Opportunités.",
    },
    {
      keywords: ["ressource", "cours"],
      answer: "La section Ressources contient les fiches.",
    },
  ];

  function getResponse(message: string) {
    const lower = message.toLowerCase();

    for (const faq of faqResponses) {
      if (faq.keywords.some((keyword) => lower.includes(keyword))) {
        return faq.answer;
      }
    }

    return "Je n'ai pas compris. Essaie avec logement, job ou ressources.";
  }

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" as const };
    const botMessage = {
      text: getResponse(input),
      sender: "bot" as const,
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Assistance Studexia</h1>

      <div className="w-full max-w-xl bg-gray-50 p-6 rounded-3xl shadow-lg">
        <div className="h-96 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} sender={msg.sender} />
          ))}
        </div>

        <ChatInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}
