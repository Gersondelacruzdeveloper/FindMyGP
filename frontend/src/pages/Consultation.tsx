import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  HiVideoCamera,
  HiOutlineChatBubbleLeftRight,
  HiPaperAirplane,
} from "react-icons/hi2";

export default function Consultation() {
  const { appointmentId } = useParams();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 grid md:grid-cols-3 gap-6">
      {/* Video Call Section */}
      <div className="md:col-span-2 bg-black rounded-xl shadow-lg relative h-[400px] flex items-center justify-center text-white">
        <HiVideoCamera className="w-16 h-16 text-gray-400" />
        <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-sm rounded-lg shadow">
          Appointment #{appointmentId}
        </span>
        <div className="absolute bottom-4 flex space-x-3 w-full justify-center">
          <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700">
            End Call
          </button>
        </div>
      </div>

      {/* Chat + Notes Section */}
      <div className="bg-white rounded-xl shadow-lg flex flex-col h-[400px]">
        <div className="p-4 border-b flex items-center space-x-2">
          <HiOutlineChatBubbleLeftRight className="text-blue-600" />
          <h3 className="font-semibold text-blue-700">Chat</h3>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.length > 0 ? (
            messages.map((msg, i) => (
              <div
                key={i}
                className="bg-blue-50 border border-blue-200 p-2 rounded-lg text-sm text-gray-700"
              >
                {msg}
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm text-center mt-10">
              No messages yet
            </p>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <HiPaperAirplane />
          </button>
        </div>
      </div>
    </div>
  );
}
