import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSpeechRecognition, useSpeechSynthesis } from "../../hooks/useVoice";
import { sendChatMessage } from "../../utils/chatApi";
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
  Sparkles,
  ArrowRight,
} from "lucide-react";
import "./ChatBot.css";

// ✅ NEW — keywords that trigger the assessment CTA
const SERVICE_INTENT_KEYWORDS = [
  "service",
  "services",
  "offer",
  "offers",
  "help with",
  "help us",
  "what do you do",
  "what can you do",
  "what can you help",
  "capabilities",
  "solutions",
  "how can you help",
];

const detectServiceIntent = (text) => {
  if (!text) return false;
  const lower = text.toLowerCase();
  return SERVICE_INTENT_KEYWORDS.some((kw) => lower.includes(kw));
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle");
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [showAssessmentCta, setShowAssessmentCta] = useState(false); // ✅ NEW

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate(); // ✅ NEW

  const {
    transcript,
    interimTranscript,
    listening,
    supported: browserSupportsSpeechRecognition,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  const {
    speak,
    stop: stopSpeaking,
    supported: ttsSupported,
  } = useSpeechSynthesis();

  useEffect(() => {
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [messages, showAssessmentCta]);

  useEffect(() => {
    if (isOpen && status === "ready") inputRef.current?.focus();
  }, [isOpen, status]);

  useEffect(() => {
    if (listening) {
      setInput((transcript + " " + interimTranscript).trim());
    } else if (transcript) {
      setInput(transcript.trim());
    }
  }, [listening, transcript, interimTranscript]);

  useEffect(() => {
    if (!autoSpeak || !ttsSupported) return;
    const last = messages[messages.length - 1];
    if (last && last.role === "assistant" && !last.streaming && last.content) {
      speak(last.content);
    }
  }, [messages, autoSpeak, ttsSupported, speak]);

  // ✅ Notify the rest of the app when the chat opens/closes
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("hg:chatbot-toggle", { detail: { isOpen } }),
    );
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    if (status === "idle") {
      setStatus("ready");
      setMessages([
        {
          role: "assistant",
          content:
            "Hi! 👋 I'm the HG Consulting assistant. I can help you learn about our services, projects, awards, or Henry Golatt's background. What would you like to know?",
        },
      ]);
    }
  };

  const toggleListening = () => {
    if (listening) stopListening();
    else {
      resetTranscript();
      setInput("");
      startListening();
    }
  };

  const toggleAutoSpeak = () => {
    if (autoSpeak) stopSpeaking();
    setAutoSpeak(!autoSpeak);
  };

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || status !== "ready") return;

    const userMessage = input.trim();
    setInput("");
    resetTranscript();

    // ✅ NEW — hide CTA on new question
    setShowAssessmentCta(false);

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setStatus("loading");

    try {
      const reply = await sendChatMessage(userMessage, messages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setStatus("ready");

      // ✅ NEW — detect service intent, show CTA after a short delay
      if (detectServiceIntent(userMessage)) {
        setTimeout(() => setShowAssessmentCta(true), 700);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again or reach Henry directly at golattb@outlook.com.",
        },
      ]);
      setStatus("ready");
    }
  };

  // ✅ NEW — navigate to /discover
  const handleStartAssessment = () => {
    stopSpeaking();
    setIsOpen(false);
    navigate("/discover");
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
                  {status === "loading" && "● Thinking..."}
                  {status === "error" && "● Offline"}
                </div>
              </div>
            </div>

            <div className="chat-header-controls">
              {ttsSupported && (
                <button
                  className={`chat-header-btn ${autoSpeak ? "active" : ""}`}
                  onClick={toggleAutoSpeak}
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
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message chat-message-${msg.role}`}>
                {msg.content}
              </div>
            ))}

            {/* ✅ NEW — Assessment CTA card */}
            {showAssessmentCta && status === "ready" && (
              <div className="chat-assessment-cta">
                <div className="chat-assessment-cta-glow" />
                <div className="chat-assessment-cta-icon">
                  <Sparkles size={16} />
                </div>
                <div className="chat-assessment-cta-content">
                  <div className="chat-assessment-cta-title">
                    Not sure which service fits you?
                  </div>
                  <div className="chat-assessment-cta-desc">
                    Take our 2-minute readiness assessment to find out where
                    you're strongest and what to do next.
                  </div>
                  <button
                    className="chat-assessment-cta-btn"
                    onClick={handleStartAssessment}
                  >
                    Start Assessment
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {status === "loading" && (
              <div className="chat-message chat-message-assistant">
                <Loader2
                  className="chat-spinner"
                  size={14}
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Listening banner */}
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
            {browserSupportsSpeechRecognition && (
              <button
                type="button"
                className={`chat-mic ${listening ? "chat-mic-listening" : ""}`}
                onClick={toggleListening}
                disabled={status !== "ready"}
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
                  : "Thinking..."
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
