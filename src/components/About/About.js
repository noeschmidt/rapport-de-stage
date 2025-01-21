import Paragraph from "../Text/Paragraph";
import Image from "next/image";
export default function About() {
  const abouts = [
    {
      description:
        "Mérillat Consulting courtage en assurances, placement et conseils financiers.",
    },
    {
      description:
        "Mon role a été développeur full-stack & designer, ayant pour mission de développer une web app de comparaison d’assurances suisses.",
    },
    {
      description:
        "En collaboration avec Monsieur Joachim Mérillat, j’ai travaillé depuis l’espace de coworking de Regus à Lancy-Pont-Rouge.",
    },
    {
      description:
        "Je détaille plus tard les technologies, mais quelques outils utilisés ont été...",
    },
  ];
  return (
    <main className="textured-background h-screen w-full relative">
      <div className="absolute top-12 right-0 size-64">
        <Image src={"/orange-logo.png"} fill alt="logo" />
      </div>

      <div className="size-full flex flex-col place-items-center justify-center text-base-softWhite">
        {abouts.map((about, index) => (
          <Paragraph key={index} paragraph={about.description} index={index} />
        ))}
      </div>
    </main>
  );
}
