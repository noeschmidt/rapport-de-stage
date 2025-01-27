"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef, useMemo, memo } from "react";

export function ParagraphsContainer({ paragraphs, textSize = "text-base" }) {
  const totalParagraphs = paragraphs.length;
  const spacePerParagraph = 1 / totalParagraphs;

  const buffer = 0.1 * spacePerParagraph;

  const memoizedValues = useMemo(
    () => ({
      spacePerParagraph: 1 / totalParagraphs,
      buffer: 0.1 * (1 / totalParagraphs),
    }),
    [totalParagraphs]
  );

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

  const words = useMemo(() => paragraph.split(" "), [paragraph]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  // Mémoriser les calculs d'animation
  const animationParams = useMemo(() => {
    const paragraphStart = index * spacePerParagraph;
    const paragraphEnd = paragraphStart + spacePerParagraph - buffer;
    const animationSpace = spacePerParagraph - buffer;
    return { paragraphStart, animationSpace };
  }, [index, spacePerParagraph, buffer]);

  return (
    <p
      ref={container}
      className={`flex ${textSize} text-left justify-start max-w-screen-2xl p-0 flex-wrap`}
    >
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={scrollYProgress}
          wordIndex={i}
          totalWords={words.length}
          animationParams={animationParams}
        />
      ))}
    </p>
  );
}
// Optimiser Word avec memo
const Word = memo(function Word({
  word,
  progress,
  wordIndex,
  totalWords,
  animationParams,
}) {
  const { paragraphStart, animationSpace } = animationParams;

  // Calculer la plage une seule fois par mot
  const range = useMemo(() => {
    const wordStart =
      paragraphStart + (wordIndex / totalWords) * animationSpace;
    const wordEnd = wordStart + animationSpace / totalWords;
    return [wordStart, wordEnd];
  }, [paragraphStart, wordIndex, totalWords, animationSpace]);

  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-1 md:mr-3 mt-0 md:mt-3">
      <span className="absolute opacity-20">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
});
