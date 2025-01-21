"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Paragraph({ paragraph, index }) {
  const container = useRef(index);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  const paragraphStart = index * 0.25; // 0.25 représente l'espace entre chaque paragraphe
  const paragraphEnd = paragraphStart + 0.25;
  return (
    <p
      ref={container}
      className="flex text-lg md:text-4xl max-w-[1000px] p-0 flex-wrap"
    >
      {words.map((word, i) => {
        const start = paragraphStart + (i / words.length) * 0.25;
        const end = paragraphStart + ((i + 1) / words.length) * 0.25;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
function Word({ children, progress, range }) {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-1 md:mr-3 mt-0 md:mt-3">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
}

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span
        className="absolute opacity-20
      "
      >
        {children}
      </span>

      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
