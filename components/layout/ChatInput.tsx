type Props = {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
};

export default function ChatInput({ input, setInput, sendMessage }: Props) {
  return (
    <div className="flex gap-3 mt-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Pose ta question..."
        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={sendMessage}
        className="bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-600 transition"
      >
        Envoyer
      </button>
    </div>
  );
}
