"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Stethoscope, Shield, Zap } from "lucide-react";

interface Message {
  type: 'user' | 'bot';
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
    
    const userMessage = { type: 'user' as const, content: question, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    
    const currentQuestion = question;
    setQuestion("");

    try {
      const res = await fetch("https://fast-api-chatbot1-3.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: currentQuestion }),
      });
      const data = await res.json();
      
      const botMessage = { type: 'bot' as const, content: data.reply, timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = { 
        type: 'bot' as const, 
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.", 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, errorMessage]);
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        type: 'bot',
        content: "Hello! I'm Dr. Yousuf AI Assistant. I'm here to provide medical information and support. Please remember I'm an AI assistant and not a substitute for professional medical advice. How can I help you today?",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Chat Button - Moved to LEFT */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 text-black p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen 
            ? 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rotate-90 scale-110 ' 
            : 'bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-110'
        } text-white group`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <div className="absolute -top-2 text-black -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            AI
          </div>
        )}
      </button>

      {/* Chat Box - Moved to LEFT */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-40 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200/80 flex flex-col backdrop-blur-sm">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                  <Stethoscope size={18} />
                </div>
                <div>
                  <h1 className="text-sm font-bold">Dr. Yousuf AI</h1>
                  <div className="flex items-center space-x-1 text-blue-100 text-xs">
                    <Zap size={10} className="text-yellow-300" />
                    <span>AI Assistant</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={clearChat}
                  className="p-1 hover:bg-white/20 rounded-lg transition-all duration-200 text-xs backdrop-blur-sm"
                  title="Clear conversation"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Messages Container */}
          <div className="flex-1 p-3 overflow-y-auto bg-gradient-to-b from-gray-50 to-blue-50/30">
            {messages.length === 0 ? (
              <div className="text-center text-gray-600 mt-8">
                <div className="relative inline-block mb-3">
                  <div className="p-3 bg-white rounded-2xl shadow-lg border border-blue-100">
                    <Bot size={36} className="text-blue-500 mx-auto mb-1" />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                    AI
                  </div>
                </div>
                <h3 className="font-bold text-base text-gray-800 mb-1">Dr. Yousuf AI Assistant</h3>
                <p className="text-xs text-gray-600 mb-3">I'm here to help with your medical questions</p>
                <div className="grid grid-cols-2 gap-1 text-xs max-w-xs mx-auto">
                  <div className="bg-white/80 rounded p-1.5 border border-blue-100 text-[10px]">
                    💡 Health Tips
                  </div>
                  <div className="bg-white/80 rounded p-1.5 border border-blue-100 text-[10px]">
                    🩺 Medical Info
                  </div>
                  <div className="bg-white/80 rounded p-1.5 border border-blue-100 text-[10px]">
                    📋 Symptoms
                  </div>
                  <div className="bg-white/80 rounded p-1.5 border border-blue-100 text-[10px]">
                    ⚕️ Advice
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-2xl p-3 shadow-sm transition-all duration-200 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-none shadow-blue-200'
                          : 'bg-white border border-blue-100 rounded-bl-none shadow-gray-100'
                      } hover:shadow-md`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && (
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="p-1 bg-blue-100 rounded-full">
                              <Bot size={12} className="text-blue-600" />
                            </div>
                          </div>
                        )}
                        <p className="text-xs whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        {message.type === 'user' && (
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="p-1 bg-blue-200 rounded-full">
                              <User size={12} className="text-blue-700" />
                            </div>
                          </div>
                        )}
                      </div>
                      <p className={`text-[10px] mt-2 font-medium ${
                        message.type === 'user' ? 'text-blue-200' : 'text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-blue-100 rounded-2xl rounded-bl-none p-3 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <div className="p-1 bg-blue-100 rounded-full">
                          <Bot size={12} className="text-blue-600" />
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Enhanced Input Area */}
          <div className="p-3 border-t border-blue-100/50 bg-white/80 backdrop-blur-sm rounded-b-2xl">
            <div className="flex space-x-2">
              <textarea
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs bg-white/90 backdrop-blur-sm transition-all duration-200"
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
                className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white p-3 rounded-xl transition-all duration-200 self-end shadow-sm hover:shadow-md disabled:shadow-none"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="flex items-center justify-center space-x-3 mt-2 text-[10px] text-gray-500">
              <div className="flex items-center space-x-1">
                <Shield size={10} className="text-green-500" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap size={10} className="text-yellow-500" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
