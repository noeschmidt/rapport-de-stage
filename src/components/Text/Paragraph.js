"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function ParagraphsContainer({ paragraphs, textSize = "text-base" }) {
  const totalParagraphs = paragraphs.length;
  const spacePerParagraph = 1 / totalParagraphs;

  const buffer = 0.1 * spacePerParagraph;

  return (
    <div className="flex flex-col gap-4 md:gap-8 xl:gap-12 2xl:gap-16">
      {paragraphs.map((paragraph, index) => (
        <Paragraph
          key={index}
          paragraph={paragraph}
          index={index}
          textSize={textSize}
          totalParagraphs={totalParagraphs}
          spacePerParagraph={spacePerParagraph}
          buffer={buffer}
        />
      ))}
    </div>
  );
}

function Paragraph({
  paragraph,
  index,
  textSize,
  totalParagraphs,
  spacePerParagraph,
  buffer,
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  const paragraphStart = index * spacePerParagraph;
  const paragraphEnd = paragraphStart + spacePerParagraph - buffer;

  const animationSpace = spacePerParagraph - buffer;
  return (
    <p
      ref={container}
      className={`flex ${textSize} text-left justify-start max-w-screen-2xl p-0 flex-wrap`}
    >
      {words.map((word, i) => {
        const wordStart = paragraphStart + (i / words.length) * animationSpace;
        const wordEnd = wordStart + animationSpace / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[wordStart, wordEnd]}>
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
