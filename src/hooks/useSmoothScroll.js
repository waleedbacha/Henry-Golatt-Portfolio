import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    let lenis = null;
    let gsapInstance = null;
    let rafCallback = null;
    let cancelled = false;

    // Dynamically import GSAP + Lenis so they don't block first paint
    (async () => {
      try {
        const [LenisModule, gsapModule, stModule] = await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

        if (cancelled) return;

        const Lenis = LenisModule.default;
        gsapInstance = gsapModule.gsap;
        const ScrollTrigger = stModule.ScrollTrigger;

        gsapInstance.registerPlugin(ScrollTrigger);

        // Respect users who prefer reduced motion
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: !prefersReducedMotion,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
        });

        window.lenis = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        rafCallback = (time) => {
          lenis.raf(time * 1000);
        };

        gsapInstance.ticker.add(rafCallback);
        gsapInstance.ticker.lagSmoothing(0);

        // Refresh trigger positions after layout settles
        setTimeout(() => {
          if (!cancelled) ScrollTrigger.refresh();
        }, 500);
      } catch (err) {
        // Silently fail — page still works without smooth scroll
        console.warn("Smooth scroll init failed:", err);
      }
    })();

    return () => {
      cancelled = true;
      try {
        if (rafCallback && gsapInstance) {
          gsapInstance.ticker.remove(rafCallback);
        }
        if (lenis) lenis.destroy();
      } catch (err) {
        // ignore
      }
      if (window.lenis) window.lenis = null;
    };
  }, []);
}
