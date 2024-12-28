"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import Picture1 from "../../../public/images/woman-xmas.webp";
import Picture2 from "../../../public/images/car-xmas.webp";
import Picture3 from "../../../public/images/accessories-xmas.webp";
import Image from "next/image";
import styles from "../../app/page.module.scss";

const word = "with motion";

export default function ParallaxScrollChristmas() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  // Pré-calculer des décalages aléatoires pour chaque lettre
  const randomOffsets = useMemo(
    () => word.split("").map(() => Math.floor(Math.random() * -25) - 5),
    []
  );

  const images = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
  ];

  return (
    <div className="mt-40">
      <h1 className=" pb-40 text-8xl text-center">Christmas Scroll</h1>
      <div ref={container} className={styles.container}>
        <div className={styles.body}>
          <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
          <h1>Scroll</h1>
          <div className={styles.word}>
            <p className="pb-6">
              {word.split("").map((letter, i) => {
                const y = useTransform(
                  scrollYProgress,
                  [0, 0.1, 1],
                  [0, 0, randomOffsets[i]]
                );
                return (
                  <motion.span style={{ top: y }} key={`letter_${i}`}>
                    {letter}
                  </motion.span>
                );
              })}
            </p>
          </div>
        </div>
        <div className={styles.images}>
          {images.map(({ src, y }, i) => (
            <motion.div
              style={{ y }}
              key={`image_${i}`}
              className={styles.imageContainer}
            >
              <Image src={src} placeholder="blur" alt="image" fill />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
