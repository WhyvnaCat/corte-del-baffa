import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress * 100}%`,
        background: "linear-gradient(90deg, var(--color-ocher), var(--color-terracotta))",
        zIndex: 200,
        transition: "width 0.1s linear",
      }}
    />
  );
}
