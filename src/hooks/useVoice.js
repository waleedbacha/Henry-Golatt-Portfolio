// ============================================================
// VOICE HOOK - Chrome-Friendly with Fresh Instances
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react';

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSupported(true);
    }
  }, []);

  const speak = useCallback((text) => {
    if (!supported || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1.0;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [supported]);

  return { speak, stop, isSpeaking, supported };
}

export function useSpeechRecognition() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [supported, setSupported] = useState(false);
  const [error, setError] = useState(null);

  const recognitionRef = useRef(null);
  const shouldListenRef = useRef(false);
  const restartTimeoutRef = useRef(null);
  const isStartingRef = useRef(false);

  // ✅ Create a FRESH recognition instance each time
  const createRecognition = useCallback(() => {
    if (typeof window === 'undefined') return null;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
      setError(null);
      isStartingRef.current = false;
    };

    recognition.onresult = (event) => {
      let finalText = '';
      let interimText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalText += result[0].transcript + ' ';
        } else {
          interimText += result[0].transcript;
        }
      }
      if (finalText) {
        setTranscript((prev) => (prev + ' ' + finalText).trim());
      }
      setInterimTranscript(interimText);
    };

    recognition.onerror = (event) => {
      console.warn('Speech error:', event.error);
      setError(event.error);
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        shouldListenRef.current = false;
        setListening(false);
      }
    };

    recognition.onend = () => {
      setInterimTranscript('');
      isStartingRef.current = false;

      // ✅ Only restart if we're supposed to be listening
      if (shouldListenRef.current) {
        clearTimeout(restartTimeoutRef.current);
        // ✅ Create a FRESH instance after a short delay (Chrome needs this)
        restartTimeoutRef.current = setTimeout(() => {
          if (!shouldListenRef.current) {
            setListening(false);
            return;
          }
          recognitionRef.current = createRecognition();
          if (recognitionRef.current) {
            try {
              recognitionRef.current.start();
            } catch (e) {
              // If it fails, try once more
              setTimeout(() => {
                if (shouldListenRef.current) {
                  try {
                    recognitionRef.current.start();
                  } catch (err) {
                    setListening(false);
                  }
                }
              }, 200);
            }
          }
        }, 400);
      } else {
        setListening(false);
      }
    };

    return recognition;
  }, []);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }
    setSupported(true);
    recognitionRef.current = createRecognition();

    return () => {
      shouldListenRef.current = false;
      clearTimeout(restartTimeoutRef.current);
      try {
        recognitionRef.current?.stop();
      } catch (e) {}
    };
  }, [createRecognition]);

  const startListening = useCallback(() => {
    if (isStartingRef.current) return;
    setTranscript('');
    setInterimTranscript('');
    setError(null);
    shouldListenRef.current = true;
    isStartingRef.current = true;

    // ✅ Always create a fresh instance before starting
    recognitionRef.current = createRecognition();

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.warn('Start failed:', e);
        isStartingRef.current = false;
      }
    }
  }, [createRecognition]);

  const stopListening = useCallback(() => {
    shouldListenRef.current = false;
    clearTimeout(restartTimeoutRef.current);
    try {
      recognitionRef.current?.stop();
    } catch (e) {}
    setListening(false);
    isStartingRef.current = false;
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
  }, []);

  return {
    listening,
    transcript,
    interimTranscript,
    supported,
    error,
    startListening,
    stopListening,
    resetTranscript,
  };
}