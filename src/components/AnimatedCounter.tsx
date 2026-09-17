"use client";

import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  fontSize?: string;
  fontSizeMobile?: string;
}

export default function AnimatedCounter({ target, fontSize = "48px" }: AnimatedCounterProps) {
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animatedRef.current) return;

    let animationFrameId: number;

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;
      setCount(0);
      const duration = 1400; // 1.4s
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeProgress * target);
        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    if (typeof IntersectionObserver === "undefined") {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target]);

  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label={`Counting to ${target}`}
      style={{
        fontFamily: '"Inter", "Inter Placeholder", sans-serif',
        fontSize: fontSize,
        fontStyle: "normal",
        fontWeight: "700",
        letterSpacing: "0em",
        lineHeight: "1em",
        textAlign: "left",
        color: "rgb(51, 51, 51)",
        position: "relative",
        display: "inline-block",
      }}
    >
      <span aria-hidden="true">{count}</span>
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: "0",
        }}
      >
        {target}
      </span>
    </div>
  );
}

