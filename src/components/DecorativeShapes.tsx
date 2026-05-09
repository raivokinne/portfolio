import { motion } from "motion/react";

const shapes = [
  {
    className: "fixed top-20 right-20 w-32 h-32 border-2 border-foreground/10 -z-10",
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    rotate: [0, 90, 0],
    duration: 20,
  },
  {
    className: "fixed bottom-20 left-20 w-24 h-24 border-2 border-foreground/10 -z-10",
    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
    rotate: [0, -90, 0],
    duration: 15,
  },
];

export default function DecorativeShapes() {
  return (
    <>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={shape.className}
          aria-hidden="true"
          animate={{ rotate: shape.rotate }}
          transition={{ duration: shape.duration, repeat: Infinity, ease: "linear" }}
          style={{ clipPath: shape.clipPath, willChange: "transform" }}
        />
      ))}
    </>
  );
}
