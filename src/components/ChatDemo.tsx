import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import aiNetwork from "@/assets/ai-network.jpg";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const exampleQuestions = [
  "What can Owl AI do?",
  "How fast is your processing?",
  "Tell me about security features",
];

const predefinedResponses: Record<string, string> = {
  "what can owl ai do?": "Owl AI can analyze data, provide predictive insights, process natural language, and deliver real-time analytics. I'm designed to help you make smarter decisions faster!",
  "how fast is your processing?": "Our AI processes queries in under 50ms on average, handling millions of data points simultaneously with 99.9% accuracy.",
  "tell me about security features": "Owl AI uses enterprise-grade encryption, secure data handling, and complies with industry standards to keep your information safe and private.",
};

export const ChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Owl AI. Ask me anything about our capabilities or try one of the example questions below.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = predefinedResponses[userMessage.toLowerCase()] || 
        "That's an interesting question! Owl AI is constantly learning and evolving. Feel free to explore our features or ask about specific capabilities.";
      
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleExampleClick = (question: string) => {
    setInput(question);
  };

  return (
    <section id="demo" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Try It Live</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the power of Owl AI with our interactive demo
          </p>
        </div>

        <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl animate-scale-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Owl AI Assistant</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div 
            className="h-96 overflow-y-auto p-4 space-y-4"
            style={{
              backgroundImage: `url(${aiNetwork})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          >
            <div className="absolute inset-0 bg-background/95" />
            <div className="relative space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 animate-fade-in ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/80 backdrop-blur-sm border border-border/50 text-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Example Questions */}
          <div className="p-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(question)}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 hover:bg-primary/20 text-foreground border border-primary/20 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-background/50 border-border/50"
              />
              <Button 
                onClick={handleSend}
                variant="hero"
                size="icon"
                disabled={!input.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
