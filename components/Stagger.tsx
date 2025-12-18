"use client";

import { useEffect, useRef, useState } from "react";

export default function Stagger({
  children,
  className = "",
  itemClassName = "",
  baseDelayMs = 80,
}: {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  baseDelayMs?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          style={{ transitionDelay: `${i * baseDelayMs}ms` }}
          className={[
            "transition duration-700 ease-out will-change-transform",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            itemClassName,
          ].join(" ")}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
