import React, { useState, useEffect, useRef } from "react";
import { useSpeechRecognition, useSpeechSynthesis } from "../../hooks/useVoice";
import {
  Bot,
  X,
  Send,
  Loader2,
  AlertCircle,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
} from "lucide-react";
import { knowledgeBase } from "../../data/knowledgeBase";
import { buildVectorStore, searchStore } from "../../utils/vectorStore";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [vectorStore, setVectorStore] = useState(null);
  const [engine, setEngine] = useState(null);
  const [autoSpeak, setAutoSpeak] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // ===== Speech Recognition =====
  // ===== Speech Recognition =====
  const {
    transcript,
    interimTranscript,
    listening,
    supported: browserSupportsSpeechRecognition,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  // ===== Speech Synthesis =====
  const {
    speak,
    stop: stopSpeaking,
    isSpeaking,
    supported: ttsSupported,
  } = useSpeechSynthesis();

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && status === "ready") {
      inputRef.current?.focus();
    }
  }, [isOpen, status]);

  // When user stops speaking, put transcript into input
  // Show transcript live in the input
  useEffect(() => {
    if (listening) {
      // While listening, show interim + final
      setInput((transcript + " " + interimTranscript).trim());
    } else if (transcript) {
      // When stopped, just the final
      setInput(transcript.trim());
    }
  }, [listening, transcript, interimTranscript]);

  // Auto-speak the latest assistant message
  useEffect(() => {
    if (!autoSpeak || !ttsSupported) return;

    const lastMsg = messages[messages.length - 1];
    if (
      lastMsg &&
      lastMsg.role === "assistant" &&
      !lastMsg.streaming &&
      lastMsg.content
    ) {
      speak(lastMsg.content);
    }
  }, [messages, autoSpeak, ttsSupported, speak]);

  // ===== Initialize =====
  const initialize = async () => {
    if (status !== "idle") return;

    try {
      if (!navigator.gpu) {
        setStatus("error");
        setLoadingMessage(
          "Your browser does not support the AI features. Please use Chrome, Edge, or another modern browser with WebGPU enabled.",
        );
        return;
      }

      setStatus("loading");
      setLoadingMessage("Loading AI model (first time only, ~1GB)...");

      const webllm = await import("@mlc-ai/web-llm");

      const initProgressCallback = (report) => {
        const progress = Math.round((report.progress || 0) * 100);
        setLoadingMessage(`Loading AI model: ${report.text || `${progress}%`}`);
      };

      const mlcEngine = await webllm.CreateMLCEngine(
        "Llama-3.2-1B-Instruct-q4f32_1-MLC",
        { initProgressCallback },
      );

      setEngine(mlcEngine);
      setLoadingMessage("Preparing knowledge base...");

      const store = await buildVectorStore(knowledgeBase);
      setVectorStore(store);

      setStatus("ready");
      setLoadingMessage("");

      setMessages([
        {
          role: "assistant",
          content:
            "Hi! 👋 I'm the HG Consulting assistant. I can help you learn about our services, projects, awards, or Henry Golatt's background. What would you like to know?",
        },
      ]);
    } catch (err) {
      console.error("Chat init error:", err);
      setStatus("error");
      setLoadingMessage(
        "Failed to load AI model. Please refresh the page and try again.",
      );
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (status === "idle") {
      initialize();
    }
  };

  // ===== Voice Controls =====
  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      resetTranscript();
      setInput("");
      startListening();
    }
  };

  const toggleAutoSpeak = () => {
    if (isSpeaking) {
      stopSpeaking();
    }
    setAutoSpeak(!autoSpeak);
  };

  // ===== Simple Intent Handler =====
  const handleSimpleIntent = (message) => {
    const lower = message.toLowerCase().trim();

    const greetings = [
      "hi",
      "hello",
      "hey",
      "hola",
      "yo",
      "sup",
      "hiya",
      "howdy",
      "greetings",
      "good morning",
      "good afternoon",
      "good evening",
      "good day",
    ];

    const isGreeting = greetings.some(
      (g) =>
        lower === g ||
        lower.startsWith(g + " ") ||
        lower.startsWith(g + "!") ||
        lower.startsWith(g + ",") ||
        lower.startsWith(g + "?"),
    );

    if (isGreeting) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "assistant",
          content:
            "Hello! 👋 I'm the HG Consulting assistant. I can help you learn about our services, projects, Henry Golatt's background, awards, and how to get in touch. What would you like to know?",
          streaming: false,
        },
      ]);
      return true;
    }

    const thanks = ["thanks", "thank you", "thx", "ty", "appreciate it"];
    if (thanks.some((t) => lower.includes(t))) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "assistant",
          content:
            "You're welcome! 😊 Is there anything else you'd like to know about HG Consulting?",
          streaming: false,
        },
      ]);
      return true;
    }

    const goodbyes = ["bye", "goodbye", "see you", "later", "cya", "farewell"];
    if (goodbyes.some((g) => lower.includes(g))) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "assistant",
          content:
            "Goodbye! 👋 Feel free to come back anytime if you have more questions about HG Consulting.",
          streaming: false,
        },
      ]);
      return true;
    }

    const helpPhrases = [
      "what can you do",
      "help",
      "what can i ask",
      "what do you know",
      "how can you help",
      "what can you tell me",
    ];
    if (helpPhrases.some((h) => lower.includes(h))) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "assistant",
          content:
            "I can answer questions about HG Consulting, including:\n\n• Services\n• Projects\n• About Henry Golatt\n• Awards\n• Publications\n• Contact\n\nJust ask me anything!",
          streaming: false,
        },
      ]);
      return true;
    }

    if (
      lower.includes("who are you") ||
      lower.includes("what are you") ||
      lower.includes("your name")
    ) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "assistant",
          content:
            "I'm the AI assistant for HG Consulting Services, founded by Henry A. Golatt. How can I help you today?",
          streaming: false,
        },
      ]);
      return true;
    }

    const topicKeywords = {
      services: [
        "service",
        "services",
        "offer",
        "provide",
        "help with",
        "what do you do",
        "what can you help",
        "assistance",
      ],
      projects: [
        "project",
        "projects",
        "work",
        "case study",
        "case studies",
        "client",
        "clients",
        "partnership",
        "partnerships",
        "initiative",
        "what have you done",
        "what have you built",
      ],
      founder: [
        "henry",
        "golatt",
        "founder",
        "owner",
        "ceo",
        "principal",
        "who runs",
        "who founded",
        "who started",
        "who leads",
        "background",
        "bio",
        "biography",
        "about him",
        "about henry",
      ],
      awards: [
        "award",
        "awards",
        "recognition",
        "honor",
        "honors",
        "achievement",
        "achievements",
        "won",
        "received",
        "forbes",
        "diversity champion",
      ],
      publications: [
        "publication",
        "publications",
        "published",
        "book",
        "books",
        "article",
        "articles",
        "research",
        "paper",
        "papers",
        "playbook",
        "wrote",
        "author",
      ],
      boards: [
        "board",
        "boards",
        "advisory",
        "advisor",
        "member",
        "coalition",
        "committee",
        "trustee",
      ],
      contact: [
        "contact",
        "email",
        "reach",
        "connect",
        "linkedin",
        "location",
        "located",
        "address",
        "phone",
        "get in touch",
        "how to reach",
      ],
      hbcu: [
        "hbcu",
        "hbcu coalition",
        "historically black",
        "university",
        "universities",
        "college",
        "colleges",
        "academic",
      ],
      company: [
        "company",
        "about you",
        "about hg",
        "who is hg",
        "what is hg",
        "mission",
        "vision",
        "values",
        "story",
      ],
    };

    const matchedTopics = [];
    for (const [topic, keywords] of Object.entries(topicKeywords)) {
      if (keywords.some((kw) => lower.includes(kw))) {
        matchedTopics.push(topic);
      }
    }

    return { handled: false, topics: matchedTopics };
  };

  // ===== Send Message =====
  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || status !== "ready" || !engine || !vectorStore) return;

    const userMessage = input.trim();
    setInput("");
    resetTranscript();

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "", streaming: true },
    ]);

    try {
      const intentResult = handleSimpleIntent(userMessage);
      if (intentResult === true) return;

      const topicsHint = intentResult?.topics || [];

      let relevant;
      if (topicsHint.length > 0) {
        const topicToCategory = {
          services: "Services",
          projects: "Projects",
          founder: "About",
          awards: "Awards",
          publications: "Publications",
          boards: "Boards",
          contact: "Contact",
          hbcu: "Services",
          company: "General",
        };

        const targetCategories = topicsHint
          .map((t) => topicToCategory[t])
          .filter(Boolean);

        const filtered = knowledgeBase.filter((item) =>
          targetCategories.includes(item.category),
        );

        if (filtered.length > 0) {
          const allResults = await searchStore(vectorStore, userMessage, 8);
          const filteredIds = new Set(filtered.map((f) => f.id));
          const prioritized = allResults
            .filter((r) => filteredIds.has(r.id))
            .slice(0, 4);

          relevant =
            prioritized.length >= 2 ? prioritized : allResults.slice(0, 4);
        } else {
          relevant = await searchStore(vectorStore, userMessage, 4);
        }
      } else {
        relevant = await searchStore(vectorStore, userMessage, 4);
      }

      const context = relevant
        .map((r) => `[${r.category}] ${r.content}`)
        .join("\n\n");

      const systemPrompt = `You are the friendly, professional AI assistant for HG Consulting Services, founded by Henry A. Golatt in Columbus, Ohio.

YOUR ROLE:
- Help visitors learn about HG Consulting's services, projects, awards, and founder
- Be warm, concise, and professional
- Use ONLY the context below to answer factual questions

RULES:
1. If the context contains the answer, use it — rewrite it naturally
2. If the context does NOT contain the answer, say: "I don't have that specific information. Please reach out to Henry directly at golatth1@gmail.com or connect on LinkedIn."
3. Never make up facts
4. Keep answers under 100 words unless asked for details
5. Use bullet points when listing multiple items
6. Speak in a natural, human, friendly tone

CONTEXT FROM HG CONSULTING WEBSITE:
${context}`;

      const chatMessages = [
        { role: "system", content: systemPrompt },
        ...newMessages.slice(-6).map((m) => ({
          role: m.role,
          content: m.content,
        })),
      ];

      const chunks = await engine.chat.completions.create({
        messages: chatMessages,
        temperature: 0.3,
        max_tokens: 400,
        stream: true,
      });

      let fullResponse = "";

      for await (const chunk of chunks) {
        const delta = chunk.choices[0]?.delta?.content || "";
        fullResponse += delta;

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: fullResponse,
            streaming: true,
          };
          return updated;
        });
      }

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: fullResponse,
          streaming: false,
        };
        return updated;
      });
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
          streaming: false,
        };
        return updated;
      });
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          className="chat-fab"
          onClick={handleOpen}
          aria-label="Open chat"
        >
          <Bot size={28} />
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-header-avatar">
                <Bot size={22} />
              </div>
              <div>
                <div className="chat-header-title">HG Assistant</div>
                <div className="chat-header-status">
                  {status === "ready" && "● Online"}
                  {status === "loading" && "● Loading..."}
                  {status === "error" && "● Offline"}
                </div>
              </div>
            </div>

            {/* Header controls */}
            <div className="chat-header-controls">
              {ttsSupported && (
                <button
                  className={`chat-header-btn ${autoSpeak ? "active" : ""}`}
                  onClick={toggleAutoSpeak}
                  aria-label={autoSpeak ? "Mute voice" : "Unmute voice"}
                  title={autoSpeak ? "Voice on" : "Voice off"}
                >
                  {autoSpeak ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
              )}
              <button
                className="chat-close"
                onClick={() => {
                  stopSpeaking();
                  setIsOpen(false);
                }}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="chat-body">
            {status === "loading" && (
              <div className="chat-loading">
                <Loader2 className="chat-spinner" size={32} />
                <p>{loadingMessage}</p>
                <span className="chat-loading-note">
                  This only happens once. Next time it will load instantly.
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="chat-error">
                <AlertCircle size={32} />
                <p>{loadingMessage}</p>
              </div>
            )}

            {status === "ready" && (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`chat-message chat-message-${msg.role}`}
                  >
                    {msg.content}
                    {msg.streaming && <span className="chat-typing">▋</span>}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input */}
          {/* Listening Banner */}
          {listening && (
            <div className="chat-listening-banner">
              <span className="chat-listening-dot" />
              <span className="chat-listening-text">
                Listening... speak now
              </span>
              <button
                type="button"
                className="chat-listening-stop"
                onClick={stopListening}
              >
                Done
              </button>
            </div>
          )}

          {/* Input */}
          <form className="chat-input-form" onSubmit={handleSend}>
            {/* Mic button */}
            {browserSupportsSpeechRecognition && (
              <button
                type="button"
                className={`chat-mic ${listening ? "chat-mic-listening" : ""}`}
                onClick={toggleListening}
                disabled={status !== "ready"}
                aria-label={listening ? "Stop listening" : "Start voice input"}
                title={listening ? "Listening..." : "Voice input"}
              >
                {listening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
            )}

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                status === "ready"
                  ? listening
                    ? "Listening..."
                    : "Ask or speak..."
                  : "Please wait..."
              }
              disabled={status !== "ready"}
              className="chat-input"
            />

            <button
              type="submit"
              disabled={status !== "ready" || !input.trim()}
              className="chat-send"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
