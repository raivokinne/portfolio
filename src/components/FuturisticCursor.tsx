import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const SHAPES = [
  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
];

interface TrailNode {
  el: HTMLDivElement;
  timeout: number;
}

export default function FuturisticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailsRef = useRef<TrailNode[]>([]);
  const shapeIndex = useRef(0);

  const springConfig = { damping: 25, stiffness: 1200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    document.body.style.cursor = "none";
    document.body.style.userSelect = "none";

    const addTrail = (x: number, y: number) => {
      const trail = document.createElement("div");
      trail.className = "fixed pointer-events-none z-[9999]";
      const shape = SHAPES[shapeIndex.current % SHAPES.length];
      shapeIndex.current++;
      trail.style.cssText = `
        left: ${x}px; top: ${y}px;
        width: 16px; height: 16px;
        transform: translate(-50%, -50%);
        border: 2px solid rgba(0,0,0,0.35);
        background: rgba(0,0,0,0.08);
        clip-path: ${shape};
        transition: opacity 0.25s ease-out, transform 0.25s ease-out;
        opacity: 0.5;
      `;
      document.body.appendChild(trail);

      requestAnimationFrame(() => {
        trail.style.opacity = "0";
        trail.style.transform = "translate(-50%, -50%) scale(0.2)";
      });

      const timeout = window.setTimeout(() => {
        trail.remove();
      }, 300);

      trailsRef.current.push({ el: trail, timeout });
      while (trailsRef.current.length > 6) {
        const old = trailsRef.current.shift();
        if (old) {
          clearTimeout(old.timeout);
          old.el.remove();
        }
      }
    };

    let throttleTimer: number | undefined;
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!throttleTimer) {
        throttleTimer = window.setTimeout(() => {
          throttleTimer = undefined;
        }, 24);
        addTrail(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      window.removeEventListener("mousemove", handleMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
      trailsRef.current.forEach((t) => {
        clearTimeout(t.timeout);
        t.el.remove();
      });
      trailsRef.current = [];
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[10000]"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        x: "-50%",
        y: "-50%",
      }}
    >
      <motion.div
        className="w-8 h-8 bg-background/90 border-[3px] border-foreground shadow-sharp-sm"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 left-1/2 w-[5px] h-[5px] bg-foreground -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}
