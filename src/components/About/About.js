import { ParagraphsContainer } from "../Text/Paragraph";
export default function About() {
  const abouts = [
    "Mérillat Consulting courtage en assurances, placement et conseils financiers.",

    "Mon role a été développeur full-stack & designer, ayant pour mission de développer une web app de comparaison d’assurances suisses.",

    "En collaboration avec Monsieur Joachim Mérillat, j’ai travaillé depuis l’espace de coworking de Regus à Lancy-Pont-Rouge.",
  ];
  return (
    <main className="textured-background h-screen w-full relative shadow-lg z-20">
      <div className="size-full flex flex-col gap-4 place-items-center justify-center p-8 text-base-softWhite">
        <ParagraphsContainer
          paragraphs={abouts}
          textSize="text-xl md:text-4xl lg:text-5xl"
        />
      </div>
    </main>
  );
}
