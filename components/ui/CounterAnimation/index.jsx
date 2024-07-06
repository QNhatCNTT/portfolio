"use client";
import React, { useEffect, useRef } from "react";
import { useInView, useIsomorphicLayoutEffect, useMotionValue, useSpring } from "framer-motion";

export default function CounterAnimationText({ value, duration = 3000 }) {
    const ref = useRef();
    const isInView = useInView(ref);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration });
    useIsomorphicLayoutEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}>0</span>;
}
