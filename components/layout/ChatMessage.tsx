type Props = {
  message: string;
  sender: "user" | "bot";
};

export default function ChatMessage({ message, sender }: Props) {
  return (
    <div
      className={`max-w-xs px-4 py-2 rounded-2xl mb-3 text-sm ${
        sender === "user"
          ? "bg-indigo-500 text-white ml-auto"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      {message}
    </div>
  );
}
