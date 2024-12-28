"use client";

import styles from "./page.module.scss";
import ParallaxScrollChristmas from "@/components/FramerMotion/ParallaxScrollChristmas";
import ParallaxScrollNewYear from "@/components/FramerMotion/ParallaxScrollNewYear";

export default function Home() {
  return (
    <main className={styles.main}>
      <ParallaxScrollChristmas />
      <ParallaxScrollNewYear />
    </main>
  );
}
