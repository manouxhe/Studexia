"use client";

import { useMemo, useState } from "react";
import ChatMessage from "@/components/layout/ChatMessage";
import ChatInput from "@/components/layout/ChatInput";

type Message = {
  text: string;
  sender: "user" | "bot";
};

type FAQRule = {
  keywords: string[];
  answer: string;
};

export default function FAQPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Salut 👋 Je suis l'assistant Studexia. Pose-moi une question sur les stages, le travail, le logement ou les ressources.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const faqResponses: FAQRule[] = useMemo(
    () => [
      {
        keywords: ["logement", "kot", "studio", "appartement"],
        answer:
          "Tu peux consulter la section Logements pour trouver un kot et filtrer selon ta ville et ton budget.",
      },
      {
        keywords: ["job", "stage", "travail", "emploi", "cv"],
        answer:
          "Va dans la section Opportunités pour les jobs et stages. Tu peux aussi préparer ton CV et activer des alertes.",
      },
      {
        keywords: ["ressource", "cours", "synthèse", "examen"],
        answer:
          "La section Ressources contient des fiches, synthèses et outils utiles pour tes révisions.",
      },
      {
        keywords: ["bonjour", "salut", "hello"],
        answer: "Bonjour 👋 Dis-moi ce que tu cherches et je te guide.",
      },
    ],
    []
  );

  function getResponse(message: string) {
    const cleanedMessage = message.toLowerCase().trim();

    const matchedRule = faqResponses.find((rule) =>
      rule.keywords.some((keyword) => cleanedMessage.includes(keyword))
    );

    if (matchedRule) return matchedRule.answer;

    return "Je n'ai pas encore la réponse exacte. Essaie avec des mots-clés comme stage, travail, logement, kot ou ressources.";
  }

  function sendMessage() {
    if (!input.trim()) return;

    const text = input.trim();

    setMessages((prev) => [
      ...prev,
      { text, sender: "user" },
      { text: getResponse(text), sender: "bot" },
    ]);
    setInput("");
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">Assistant Studexia</h1>
        <p className="mt-2 text-sm text-slate-600">
          Réponses rapides par mots-clés pour orienter les étudiants.
        </p>

        <div className="mt-6 h-[28rem] overflow-y-auto rounded-2xl bg-slate-50 p-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} sender={msg.sender} />
          ))}
        </div>

        <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
      </div>
    </div>
  );
}
