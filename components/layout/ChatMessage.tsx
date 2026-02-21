type Props = {
  message: string;
  sender: "user" | "bot";
};

export default function ChatMessage({ message, sender }: Props) {
  const isUser = sender === "user";

  return (
    <div className={`mb-3 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "rounded-br-md bg-indigo-600 text-white"
            : "rounded-bl-md border border-slate-200 bg-white text-slate-800"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
