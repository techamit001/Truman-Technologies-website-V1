import React, { useState } from "react";
import { Send, X, MessageCircle } from "lucide-react";

const TrumanAssistant = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi! I'm Truman Assistant 👋\nAsk me anything about talent, technology, AI, or TruDefender."
        }
    ]);

    const [isTyping, setIsTyping] = useState(false);

    // 🧠 SMART BOT REPLY LOGIC
    const getBotReply = (msg) => {
        msg = msg.toLowerCase();

        if (msg.includes("talent") || msg.includes("hire")) {
            return "We help companies hire top tech, AI, cloud, and engineering talent. What role are you looking for?";
        }

        if (msg.includes("service") || msg.includes("offer")) {
            return "We offer Talent Solutions, IT Consulting, DevOps, AI, and TruDefender for cybersecurity.";
        }

        if (msg.includes("trudefender") || msg.includes("security")) {
            return "TruDefender™ is our AI-driven MDR platform for detection & response. Want features or pricing?";
        }

        if (msg.includes("contact") || msg.includes("call") || msg.includes("talk")) {
            return "You can email us at hello@truman-technologies.com or use the Contact page.";
        }

        if (msg.includes("hello") || msg.includes("hi")) {
            return "Hello! 👋 How can I assist you today?";
        }

        return "Thanks for your message! Our team will reply shortly.";
    };

    // SEND MESSAGE LOGIC
    const sendMessage = () => {
        if (!input.trim()) return;

        const newUserMsg = { sender: "user", text: input };
        setMessages((prev) => [...prev, newUserMsg]);
        setInput("");

        // bot typing animation
        setIsTyping(true);

        setTimeout(() => {
            const reply = getBotReply(input);
            const botMsg = { sender: "bot", text: reply };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 700);
    };

    // QUICK REPLY BUTTONS
    const quickReplies = [
        "Talent Solutions",
        "Our Services",
        "TruDefender",
        "Contact"
    ];

    return (
        <>
            {/* Floating Button */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="fixed bottom-6 right-6 bg-brand-blue text-white shadow-xl rounded-full p-4 z-50 hover:scale-110 transition"
                >
                    <MessageCircle size={28} />
                </button>
            )}

            {/* Chat Window */}
            {open && (
                <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">

                    {/* Header */}
                    <div className="bg-brand-blue text-white p-4 rounded-t-2xl flex justify-between items-center">
                        <h2 className="font-semibold text-lg">Truman Assistant</h2>
                        <button onClick={() => setOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="p-4 h-80 overflow-y-auto space-y-4">

                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`max-w-[80%] px-4 py-2 rounded-xl ${
                                    msg.sender === "user"
                                        ? "bg-brand-blue text-white ml-auto"
                                        : "bg-gray-100 text-gray-700"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-xl inline-block">
                                typing…
                            </div>
                        )}
                    </div>

                    {/* Quick Replies */}
                    <div className="px-4 pb-2 flex flex-wrap gap-2">
                        {quickReplies.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setInput(tag);
                                    setTimeout(sendMessage, 100);
                                }}
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Input Box */}
                    <div className="p-4 border-t flex items-center gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask me anything..."
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none"
                        />

                        <button
                            onClick={sendMessage}
                            className="bg-brand-blue text-white p-2 rounded-xl hover:scale-110 transition"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default TrumanAssistant;
