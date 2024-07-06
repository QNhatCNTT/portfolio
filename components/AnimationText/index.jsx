/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./index.module.scss";
const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.05,
        },
    },
};
export const AnimatedText = ({
    text,
    el: Wrapper = "p",
    className,
    once,
    repeatDelay,
    animation = defaultAnimations,
    isRepeat = true,
    wrapLines,
}) => {
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];

    useEffect(() => {
        let timeout;
        const show = () => {
            console.log("show");
            controls.start("visible");

            if (!isRepeat) return;

            if (repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start("hidden");
                    controls.start("visible");
                }, repeatDelay);
            }
        };

        show();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Wrapper className={className}>
            <motion.span
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {},
                }}
                aria-hidden
            >
                {textArray.map((line, lineIndex) => (
                    <span className={styles.block} key={`${line}-${lineIndex}`}>
                        {line.split(" ").map((word, wordIndex) => (
                            <span className={styles.inlineBlock} key={`${word}-${wordIndex}`}>
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={`${char}-${charIndex}`}
                                        className={styles.inlineBlock}
                                        variants={animation}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className={styles.inlineBlock}>&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
};
