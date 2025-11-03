import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles, RefreshCw, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const EXAMPLE_QUESTIONS = [
  "Which CO₂ capture technology is most cost-effective for Indian coal plants?",
  "Summarize the key learnings from Boundary Dam case study.",
  "What are the main challenges for CCUS deployment in India?",
  "Compare pre-combustion vs post-combustion capture for cement plants.",
  "What geological storage options are available in India?",
  "How does CO₂ utilization in chemicals differ from EOR?",
];

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("ccus-ai-chat");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load chat history:", e);
      }
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("ccus-ai-chat", JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (queryText?: string) => {
    const query = queryText || input.trim();
    if (!query) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: query,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Invoke the deployed Supabase Edge Function: ai-assistant
      const { data, error } = await supabase.functions.invoke("ai-assistant", {
        body: { message: query },
      });

      if (error) throw error;

      // Function returns Gemini response; extract text safely
      // Common shape: data.candidates[0].content.parts[0].text
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.answer ||
        JSON.stringify(data);

      const assistantMessage: Message = {
        role: "assistant",
        content: text,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error("AI Assistant error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem("ccus-ai-chat");
    toast({
      title: "Chat cleared",
      description: "Your conversation history has been cleared.",
    });
  };

  const handleExampleClick = (question: string) => {
    setInput(question);
  };

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Sparkles className="w-10 h-10 text-primary animate-pulse" />
              <div className="absolute inset-0 w-10 h-10 text-primary animate-ping opacity-20">
                <Sparkles className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              AI Assistant
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ask questions about CCUS technologies, case studies, and implementation
            strategies for India's Net Zero journey.
          </p>
        </div>

        {/* Example Questions */}
        {messages.length === 0 && (
          <div className="mb-6 animate-fade-slide-up">
            <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Suggested Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {EXAMPLE_QUESTIONS.map((question, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="h-auto py-4 px-5 text-left justify-start whitespace-normal hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group"
                  onClick={() => handleExampleClick(question)}
                >
                  <Sparkles className="w-4 h-4 mr-2 shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                  <span className="text-sm leading-relaxed">{question}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <Card className="mb-6 border-border/50 shadow-lg backdrop-blur-sm bg-card/95">
          <ScrollArea className="h-[600px] p-6">
            {messages.length === 0 && !isLoading ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/5 animate-ping" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground mb-2">
                    Welcome to CCUS AI Assistant
                  </p>
                  <p className="text-muted-foreground max-w-md">
                    Start a conversation by asking a question or selecting an example above.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-4 animate-fade-slide-up ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl p-5 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "bg-muted/50 text-foreground border border-border/50"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              h1: ({ children }) => (
                                <h1 className="text-2xl font-bold mb-4 text-foreground">{children}</h1>
                              ),
                              h2: ({ children }) => (
                                <h2 className="text-xl font-semibold mb-3 text-foreground">{children}</h2>
                              ),
                              h3: ({ children }) => (
                                <h3 className="text-lg font-semibold mb-2 text-foreground">{children}</h3>
                              ),
                              p: ({ children }) => (
                                <p className="mb-3 leading-relaxed text-foreground">{children}</p>
                              ),
                              ul: ({ children }) => (
                                <ul className="list-disc pl-5 mb-3 space-y-1">{children}</ul>
                              ),
                              ol: ({ children }) => (
                                <ol className="list-decimal pl-5 mb-3 space-y-1">{children}</ol>
                              ),
                              li: ({ children }) => (
                                <li className="text-foreground">{children}</li>
                              ),
                              code: ({ inline, children }: any) =>
                                inline ? (
                                  <code className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-sm">
                                    {children}
                                  </code>
                                ) : (
                                  <code className="block p-4 rounded-lg bg-muted border border-border font-mono text-sm overflow-x-auto">
                                    {children}
                                  </code>
                                ),
                              pre: ({ children }) => <pre className="mb-3">{children}</pre>,
                              strong: ({ children }) => (
                                <strong className="font-semibold text-foreground">{children}</strong>
                              ),
                              a: ({ children, href }) => (
                                <a
                                  href={href}
                                  className="text-primary hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {children}
                                </a>
                              ),
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border/50">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopy(message.content, idx)}
                              className="h-8 px-2 text-xs hover:bg-primary/10"
                            >
                              {copiedIndex === idx ? (
                                <>
                                  <Check className="w-3 h-3 mr-1" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 mr-1" />
                                  Copy
                                </>
                              )}
                            </Button>
                            <span className="text-xs text-muted-foreground">
                              {new Date(message.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                          <p className="text-xs opacity-80 mt-3">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                      )}
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1 text-primary-foreground font-semibold text-sm">
                        U
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-4 animate-fade-slide-up">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                    <div className="max-w-[85%] rounded-2xl p-5 bg-muted/50 border border-border/50">
                      <div className="space-y-3">
                        <Skeleton className="h-4 w-[300px]" />
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </ScrollArea>
        </Card>

        {/* Input Area */}
        <div className="relative">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                placeholder="Ask me anything about CCUS technologies..."
                className="min-h-[100px] resize-none pr-4 text-base border-border/50 focus:border-primary/50 transition-colors shadow-sm"
                disabled={isLoading}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button
                onClick={() => handleSubmit()}
                disabled={isLoading || !input.trim()}
                size="icon"
                className="h-[100px] w-14 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </Button>
              {messages.length > 0 && (
                <Button
                  onClick={handleClearChat}
                  disabled={isLoading}
                  variant="outline"
                  size="icon"
                  className="h-12 w-14 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-all duration-300"
                  title="Clear chat history"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-4">
            <span>Press <kbd className="px-2 py-0.5 rounded bg-muted text-foreground font-mono text-xs">Enter</kbd> to send</span>
            <span>•</span>
            <span><kbd className="px-2 py-0.5 rounded bg-muted text-foreground font-mono text-xs">Shift+Enter</kbd> for new line</span>
            <span>•</span>
            <span>Chat history saved locally</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
