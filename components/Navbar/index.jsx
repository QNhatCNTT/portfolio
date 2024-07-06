"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useCycle, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { slideInFromTop } from "@/utils/motion";
import styles from "./index.module.scss";
import classNames from "classnames";
import { useParams } from "next/navigation";
import Image from "next/image";
import useDevice from "@/hooks/useDevice";
import { useDimensions } from "@/hooks/useDimensions";
import { MenuToggle } from "./MenuToggle";

const navItems = [
    {
        name: "About Us",
        href: "about-us",
    },
    {
        name: "Skills",
        href: "skills",
    },
    {
        name: "Experience",
        href: "experience",
    },
    {
        name: "Projects",
        href: "projects",
    },
];

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};
export default function Navbar() {
    const headerRef = useRef(null);
    const { scrollY } = useScroll();
    const background = useTransform(scrollY, [0, 100], ["#0c0c1d", "#03001417"]);
    const height = useTransform(scrollY, [0, 100], [84, 84]);
    const params = useParams();
    const [hash, setHash] = useState("about-us");

    useEffect(() => {
        setHash(window.location.hash.replace("#", "") || "about-us");
    }, [params]);

    const navHighlighter = () => {
        const sections = document.querySelectorAll("section[id]");
        let scrollY = window.scrollY;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 85;
            let sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                setHash(sectionId);
            }
        });
    };

    useEffect(() => {
        const handlerScroll = () => {
            navHighlighter();
        };
        document.addEventListener("scroll", handlerScroll);

        return () => document.removeEventListener("scroll", handlerScroll);
    }, []);

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            ref={headerRef}
            variants={slideInFromTop(0.4)}
            className={styles.header}
            style={{
                background,
                height,
            }}
        >
            <div className={styles.container}>
                <nav className={styles.leftNav}>
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={`#${item.href}`}
                            className={classNames(styles.itemLink, {
                                [styles.avtice]: hash === item.href,
                            })}
                        >
                            {item.name}
                            <span className={styles.divider}>&nbsp;</span>
                        </Link>
                    ))}
                </nav>
                <nav className={styles.rightNav}>
                    <Link href="https://github.com/QNhatCNTT" target="_blank" className={styles.itemLogo}>
                        <Image src="/icons/github.svg" width={24} height={24} alt="github" />
                    </Link>
                    <Link href="https://www.facebook.com/black.Raizel/" target="_blank" className={styles.itemLogo}>
                        <Image src="/icons/facebook.svg" width={24} height={24} alt="facebook" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/qnhatit98/" target="_blank" className={styles.itemLogo}>
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin" />
                    </Link>
                </nav>
            </div>
        </motion.header>
    );
}
