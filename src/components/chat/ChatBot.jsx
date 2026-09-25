import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | ready | loading | error
  const [loadingMessage, setLoadingMessage] = useState("");
  const [autoSpeak, setAutoSpeak] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // ---- Voice: recognition ----
  const {
    transcript,
    interimTranscript,
    listening,
    supported: browserSupportsSpeechRecognition,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  // ---- Voice: synthesis ----
  const {
    speak,
    stop: stopSpeaking,
    supported: ttsSupported,
  } = useSpeechSynthesis();

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when ready
  useEffect(() => {
    if (isOpen && status === "ready") inputRef.current?.focus();
  }, [isOpen, status]);

  // Live transcript → input
  useEffect(() => {
    if (listening) {
      setInput((transcript + " " + interimTranscript).trim());
    } else if (transcript) {
      setInput(transcript.trim());
    }
  }, [listening, transcript, interimTranscript]);

  // Auto-speak latest assistant message
  useEffect(() => {
    if (!autoSpeak || !ttsSupported) return;
    const last = messages[messages.length - 1];
    if (last && last.role === "assistant" && !last.streaming && last.content) {
      speak(last.content);
    }
  }, [messages, autoSpeak, ttsSupported, speak]);

  // ---- Open the bot: initialize chat ----
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

  // ---- Voice controls ----
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

  // ---- Send message ----
  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || status !== "ready") return;

    const userMessage = input.trim();
    setInput("");
    resetTranscript();

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setStatus("loading");

    try {
      const reply = await sendChatMessage(userMessage, messages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setStatus("ready");
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again or reach Henry directly at golatth1@gmail.com.",
        },
      ]);
      setStatus("ready");
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
