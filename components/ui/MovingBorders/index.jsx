"use client";

import React from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import classNames from "classnames";

import styles from "./index.module.scss";
export function Button({
    borderRadius = "10px",
    children,
    as: Component = "button",
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}) {
    return (
        <Component
            className={classNames(styles.buttonContainer, containerClassName)}
            style={{
                borderRadius,
            }}
            {...otherProps}
        >
            <div className={styles.childButtonMoving} style={{ borderRadius }}>
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div className={classNames(styles.movingChild, borderClassName)} />
                </MovingBorder>
            </div>

            <div
                className={classNames(styles.childButton, className)}
                style={{
                    borderRadius,
                }}
            >
                {children}
            </div>
        </Component>
    );
}

export const MovingBorder = ({ children, duration = 2000, rx, ry, ...otherProps }) => {
    const pathRef = useRef();
    const progress = useMotionValue(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
    const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className={styles.movingIcon}
                width="100%"
                height="100%"
                {...otherProps}
            >
                <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform,
                }}
            >
                {children}
            </motion.div>
        </>
    );
};
