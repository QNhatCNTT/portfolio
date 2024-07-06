"use client";

import React, { useRef } from "react";
import classNames from "classnames";
import styles from "./ProjectItem.module.scss";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import Link from "next/link";
export default function ProjectItem({ data, isFullWith = false, progress }) {
    const container = useRef(null);

    return (
        <div
            ref={container}
            className={classNames(styles.itemContainer, {
                [styles.fullWith]: isFullWith,
            })}
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: container }}
                className={classNames(styles.itemContainer, {
                    [styles.fullWith]: isFullWith,
                })}
            >
                <motion.article initial="hidden" animate="visible" className={styles.article}>
                    <motion.div initial="hidden" animate="visible" className={styles.background}></motion.div>
                    <div className={styles.image}>
                        <motion.img
                            src={data.image}
                            alt={data.name}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.1 }}
                        />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.type}>{data.type}</p>
                        <p className={styles.name}>{data.name}</p>
                        <p className={styles.descriptions}>{data.descriptions}</p>
                        <div className={styles.icon}>
                            <div className={styles.technologies}>
                                {data?.technologies?.map((t, index) => (
                                    <GetIconWithTechs key={index} technology={t} />
                                ))}
                            </div>
                            <Link href={data.link} target="_blank" className={styles.link}>
                                <motion.img
                                    src="/icons/github.svg"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    width={40}
                                    height={40}
                                    alt="github"
                                />
                            </Link>
                        </div>
                    </div>
                </motion.article>
            </motion.div>
        </div>
    );
}

const GetIconWithTechs = ({ technology = "javascript" }) => {
    return <Image src={`/images/${technology?.toLowerCase()}.png`} width={40} height={40} alt={technology} />;
};
