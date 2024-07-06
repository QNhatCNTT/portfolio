"use client";

import Banner from "@/components/Banner";
import Parallax from "@/components/Parallax";
import styles from "./index.module.scss";
import ExperiencesSection from "@/components/Experiences";
import MyProjects from "@/components/MyProject";
import TsParticles from "@/components/TsParticles";
import StarsCanvas from "@/components/StarBackground";
import config from "@/constants/tsparticles";

export default function HomePage() {
    return (
        <main className={styles.main}>
            <TsParticles config={config} />
            <StarsCanvas />
            <Banner />
            <Parallax />
            <ExperiencesSection />
            <MyProjects />
        </main>
    );
}
