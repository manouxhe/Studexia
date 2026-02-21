type Props = {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
};

export default function ChatInput({ input, setInput, sendMessage }: Props) {
  return (
    <div className="mt-4 flex gap-3">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ex: Je cherche un stage en marketing"
        className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none ring-indigo-200 transition focus:ring-2"
      />
      <button
        type="button"
        onClick={sendMessage}
        className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Envoyer
      </button>
    </div>
  );
}
