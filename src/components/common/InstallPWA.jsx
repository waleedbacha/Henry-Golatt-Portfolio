import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share } from "lucide-react";
import "./InstallPWA.css";

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    const iOS = /iphone|ipad|ipod/.test(ua);
    const standalone = window.navigator.standalone === true;
    setIsIOS(iOS && !standalone);

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const dismissed = localStorage.getItem("hg-pwa-dismissed");
      if (!dismissed) setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  useEffect(() => {
    if (!isIOS) return;
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("hg-pwa-dismissed");
      if (!dismissed) setShowInstall(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, [isIOS]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowInstall(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowInstall(false);
    localStorage.setItem("hg-pwa-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {showInstall && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="install-pwa-banner"
        >
          <button
            className="install-pwa-close"
            onClick={handleDismiss}
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>

          <div className="install-pwa-icon">
            <Download size={20} />
          </div>

          <div className="install-pwa-content">
            <div className="install-pwa-title">Install HG Consulting</div>
            <div className="install-pwa-desc">
              {isIOS ? (
                <>
                  Tap{" "}
                  <Share
                    size={12}
                    style={{ display: "inline", verticalAlign: "middle" }}
                  />{" "}
                  then <strong>"Add to Home Screen"</strong>
                </>
              ) : (
                "Add to your home screen for quick access"
              )}
            </div>
          </div>

          {!isIOS && (
            <button className="install-pwa-btn" onClick={handleInstall}>
              Install
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallPWA;
