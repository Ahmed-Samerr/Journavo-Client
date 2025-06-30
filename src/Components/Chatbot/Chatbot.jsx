import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    try {
      const response = await fetch(
        "https://travel-cahtbot-production.up.railway.app/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await response.json();
      console.log(data);

      setMessages((prev) => [...prev, { you: input, bot: data.response }]);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="relative z-[9999]">
      {" "}
      {/* ✅ زودنا z-index عالي جدًا */}
      {/* زر الشات */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        {open ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
      {/* صندوق الشات */}
      <div
        className={`${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        } transition-all duration-500 overflow-hidden
        fixed md:absolute
        bottom-0 md:bottom-auto md:top-full md:right-0
        left-1/2 md:left-auto md:translate-x-0 translate-x-[-50%]
        w-full md:w-80 md:max-w-[90vw]
        bg-white rounded-t-xl md:rounded-xl shadow-2xl border z-[9999]`} // ✅ z-index عالي هنا كمان
      >
        <div className="flex items-center justify-between bg-blue-600 text-white p-4">
          <span className="text-lg font-semibold">Chat with us</span>
          <button
            onClick={() => setOpen(false)}
            className="hover:scale-110 transition-transform"
          >
            <X size={24} />
          </button>
        </div>
        <div className="h-[75vh] md:h-80 p-4 overflow-y-scroll">
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-2">
              <p className="text-blue-600 font-medium">You: {msg.you}</p>
              <p className="text-gray-700">Bot: {msg.bot}</p>
            </div>
          ))}
        </div>
        <div className="flex border-t p-2">
          <input
            className="flex-1 border p-2 rounded mr-2 text-sm"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="bg-blue-600 text-white p-2 rounded text-sm"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
