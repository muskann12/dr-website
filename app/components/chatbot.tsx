"use client";
import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Stethoscope,
  Shield,
  Zap,
  Trash2,
} from "lucide-react";

interface Message {
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userMessage = {
      type: "user" as const,
      content: question,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const currentQuestion = question;
    setQuestion("");

    try {
      const res = await fetch("https://fast-api-chatbot1-3.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: currentQuestion }),
      });
      const data = await res.json();

      const botMessage = {
        type: "bot" as const,
        content: data.reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage = {
        type: "bot" as const,
        content:
          "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => setMessages([]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        type: "bot",
        content:
          "Hello! I'm Dr. Yousuf AI Assistant. I'm here to provide medical information and support. Please remember I'm an AI assistant and not a substitute for professional medical advice. How can I help you today?",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 p-4 rounded-full shadow-xl transition-all duration-300 ${
          isOpen
            ? "bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rotate-90 scale-110"
            : "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-110 shadow-2xl"
        } text-white`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full border-2 border-white font-medium">
            AI
          </div>
        )}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-40 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Stethoscope size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Dr. Yousuf AI</h1>
                  <div className="flex items-center space-x-2 text-blue-100 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Online • AI Medical Assistant</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={clearChat}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors duration-200"
                  title="Clear conversation"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors duration-200"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center mt-8">
                <div className="relative inline-block mb-4">
                  <div className="p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Bot size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  Dr. Yousuf AI Assistant
                </h3>
                <p className="text-sm text-gray-600 mb-6 max-w-xs mx-auto">
                  Your intelligent medical companion for reliable health information and guidance
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm max-w-xs mx-auto">
                  <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="text-blue-600 text-lg mb-1">💡</div>
                    <span className="text-gray-700 font-medium">Health Tips</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="text-blue-600 text-lg mb-1">🩺</div>
                    <span className="text-gray-700 font-medium">Medical Info</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="text-blue-600 text-lg mb-1">📋</div>
                    <span className="text-gray-700 font-medium">Symptoms</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="text-blue-600 text-lg mb-1">⚕️</div>
                    <span className="text-gray-700 font-medium">Advice</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                        msg.type === "user"
                          ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md"
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {msg.type === "bot" && (
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                              <Bot size={16} className="text-white" />
                            </div>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {msg.content}
                          </p>
                          <p
                            className={`text-xs mt-2 font-medium ${
                              msg.type === "user" ? "text-blue-100" : "text-gray-500"
                            }`}
                          >
                            {msg.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                        {msg.type === "user" && (
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                              <User size={16} className="text-blue-700" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm max-w-[85%]">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <Bot size={16} className="text-white" />
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 bg-white p-4">
            <div className="flex space-x-3">
              <textarea
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-800 placeholder-gray-500 resize-none bg-white transition-all duration-200"
                rows={2}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Describe your symptoms or ask a medical question..."
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !question.trim()}
                className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white p-3 rounded-xl transition-all duration-200 self-end disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-600">
              <div className="flex items-center space-x-1.5">
                <Shield size={12} className="text-green-500" />
                <span>Secure & Private</span>
              </div>
              <div className="w-px h-3 bg-gray-300"></div>
              <div className="flex items-center space-x-1.5">
                <Zap size={12} className="text-yellow-500" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
