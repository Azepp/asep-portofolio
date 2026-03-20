import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

export default function SplashScreen() {
  const [phase, setPhase] = useState("done");

  useLayoutEffect(() => {
    const hasShown = sessionStorage.getItem("splash_shown");
    if (hasShown) return;

    setPhase("enter");

    const startExit = () => {
      setTimeout(() => setPhase("exit"), 1800);
    };

    if (document.readyState === "complete") {
      startExit();
    } else {
      window.addEventListener("load", startExit);
      return () => window.removeEventListener("load", startExit);
    }
  }, []);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-custom-yellow overflow-hidden"
      animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
      transition={phase === "exit" ? { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } : { duration: 0 }}
      onAnimationComplete={() => {
        if (phase === "exit") {
          sessionStorage.setItem("splash_shown", "true");
          setPhase("done");
        }
      }}
    >
      <div className="overflow-hidden">
        <motion.h1 className="text-5xl font-extrabold tracking-tight" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}>
          AsepStudio.
        </motion.h1>
      </div>
    </motion.div>
  );
}