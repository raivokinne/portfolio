import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Trail {
    id: number;
    x: number;
    y: number;
    rotation: number;
}

export default function FuturisticCursor() {
    const [trails, setTrails] = useState<Trail[]>([]);
    const [isMoving, setIsMoving] = useState(false);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        let trailId = 0;
        let timeout: ReturnType<typeof setTimeout>;

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            setIsMoving(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => setIsMoving(false), 100);

            const newTrail: Trail = {
                id: trailId++,
                x: e.clientX,
                y: e.clientY,
                rotation: Math.random() * 360,
            };

            setTrails((prev) => [...prev.slice(-8), newTrail]);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeout);
        };
    }, [cursorX, cursorY]);

    useEffect(() => {
        if (trails.length > 0) {
            const timer = setTimeout(() => {
                setTrails((prev) => prev.slice(1));
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [trails]);

    return (
        <>
            {/* Trail shapes */}
            {trails.map((trail, index) => (
                <motion.div
                    key={trail.id}
                    className="fixed pointer-events-none z-[9999]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.3 - index * 0.03,
                        scale: 1 - index * 0.1,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        left: trail.x,
                        top: trail.y,
                        transform: `translate(-50%, -50%) rotate(${trail.rotation}deg)`,
                    }}
                >
                    <div
                        className="w-4 h-4 border border-gray-800/60 bg-black/20"
                        style={{
                            clipPath:
                                index % 3 === 0
                                    ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                                    : index % 3 === 1
                                        ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                                        : "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                        }}
                    />
                </motion.div>
            ))}

            {/* Main cursor - geometric crosshair */}
            <motion.div
                className="fixed pointer-events-none z-[10000]"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                    transform: "translate(-50%, -50%)",
                }}
            >

                {/* Corner brackets */}
                <motion.div
                    className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        rotate: isMoving ? -90 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Top-left bracket */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-900" />
                    {/* Top-right bracket */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-900" />
                    {/* Bottom-left bracket */}
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gray-900" />
                    {/* Bottom-right bracket */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-900" />
                </motion.div>

                {/* Scanning lines */}
                <motion.div
                    className="absolute w-1 h-px bg-gray-900/50 -translate-y-1/2"
                    animate={{
                        scaleX: isMoving ? [1, 1.5, 1] : 1,
                    }}
                    transition={{ duration: 0.3, repeat: isMoving ? Infinity : 0 }}
                />
                <motion.div
                    className="absolute h-1 w-px bg-gray-900/50 -translate-x-1/2"
                    animate={{
                        scaleY: isMoving ? [1, 1.5, 1] : 1,
                    }}
                    transition={{
                        duration: 0.3,
                        repeat: isMoving ? Infinity : 0,
                        delay: 0.15,
                    }}
                />
            </motion.div>
        </>
    );
}
