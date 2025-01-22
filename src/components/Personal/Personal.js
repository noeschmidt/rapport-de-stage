import Card from "../ColoredCards/Card";
import { ParagraphsContainer } from "../Text/Paragraph";
export default function Personal() {
  const cards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={48}
          height={48}
          color={"#fffdf4"}
          fill={"none"}
        >
          <path
            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 15.002L7.00868 14.9996"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="9.5"
            cy="8.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="16.5"
            cy="9.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Front End",
      showBulletPoint: true,
      showDescription: false,
      bulletPoints: ["Next.js", "Tailwind", "Framer Motion", "Shadcn"],
      color: "#E7582E",
      roundedTopLeft: "24px",
      roundedTopRight: "0",
      roundedBotRight: "24px",
      roundedBotLeft: "0",
      paddingY: 24,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={48}
          height={48}
          color={"#fffdf4"}
          fill={"none"}
        >
          <path
            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M5.5 12.5L5.97454 12.1836C6.44849 11.8677 6.68546 11.7097 6.91293 11.7803C7.1404 11.851 7.24617 12.1154 7.45772 12.6443L9 16.5L11.0883 10.2351C11.5283 8.91505 11.7483 8.25503 12.2721 7.87752C12.7959 7.5 13.4916 7.5 14.883 7.5H18.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 12L15.5 13.5M15.5 13.5L14 15M15.5 13.5L17 15M15.5 13.5L14 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Back End",
      showBulletPoint: true,
      showDescription: false,
      bulletPoints: ["MySQL", "Python", "Strapi", "Bash"],
      color: "#0D9488",
      roundedTopLeft: "12px",
      roundedTopRight: "12px",
      roundedBotRight: "12px",
      roundedBotLeft: "12px",
      paddingY: 24,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={48}
          height={48}
          color={"#fffdf4"}
          fill={"none"}
        >
          <path
            d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 2V4M6 2V4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 8H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Gestion de projet",
      showBulletPoint: true,
      showDescription: false,
      bulletPoints: ["Jira", "Teams", "OneDrive", "Notion"],
      color: "#4F46E5",
      roundedTopLeft: "0",
      roundedTopRight: "24px",
      roundedBotRight: "0",
      roundedBotLeft: "24px",
      paddingY: "-[24px]",
    },
  ];
  const softSkills = [
    "Durant ce stage, j’ai pu développer mes soft-skills, notamment ma rigueur, mon organisation, mon attitude et mon approche pour résoudre des problèmes.",
    "J’ai découvert que je préfère travailler en équipe plutôt que de travailler seul.",
    'J’ai également remarqué que j’avais parfois tendance à "sprinter", c’est-à-dire à essayer de terminer mon travail le plus vite possible sur une courte période, ce qui me fatiguait rapidement. Cette approche n’était pas idéale, car elle m’épuisait et réduisait la qualité de mon travail.',
    "Une autre leçon importante que j’ai apprise est qu’il vaut mieux aborder un bug ou une tâche de manière calme et réfléchie, plutôt que de chercher à les régler trop vite. Lorsque je bâclais une tâche pour aller plus vite, cela créait souvent davantage de problèmes à résoudre par la suite.",
  ];
  const projectsPro = [
    "Ce stage, ainsi que mes projets personnels, m’ont permis de mieux comprendre mes aspirations professionnelles.",
    "J’aime toucher à plusieurs domaines comme le code, le design et le marketing. Cela me pousse à envisager de travailler dans une petite équipe où je pourrais contribuer à divers projets, plutôt que dans une grande entreprise où je serais assigné à une seule fonction.",
    "Le monde des assurances, bien qu’intéressant d’un point de vue financier, ne correspond pas à mes valeurs sur le long terme. Je ne me vois pas y travailler toute ma vie.",
    "Pour mon prochain stage, je vais chercher une opportunité dans une équipe avec des développeurs plus seniors ou au sein d’une agence. Cela me permettrait d’apprendre davantage et de travailler dans un environnement collaboratif.",
  ];
  return (
    <main className="textured-background size-full text-base-softWhite py-12 md:py-48 z-20 relative">
      <div className="max-width-custom px-8 flex flex-col gap-8 justify-center size-full mx-auto">
        <h4 className="text-base-softWhite text-4xl text-left font-semibold">
          Tech stack utilisée
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              smallTitle={card.smallTitle}
              description={card.description}
              showBulletPoint={card.showBulletPoint}
              showDescription={card.showDescription}
              color={card.color}
              roundedTopLeft={card.roundedTopLeft}
              roundedTopRight={card.roundedTopRight}
              roundedBotLeft={card.roundedBotLeft}
              roundedBotRight={card.roundedBotRight}
              bulletPoints={card.bulletPoints}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-8 md:mt-24">
          <h4 className="text-base-softWhite text-2xl md:text-4xl text-left font-semibold">
            Soft-skills et réflexion personnelle
          </h4>
          <ParagraphsContainer
            paragraphs={softSkills}
            textSize="text-xl md:text-4xl lg:text-5xl"
          />
        </div>
        <div className="flex flex-col gap-4 mt-8 md:mt-16">
          <h4 className="text-base-softWhite text-2xl md:text-4xl text-left font-semibold">
            Impact sur le projet professionel
          </h4>
          <ParagraphsContainer
            paragraphs={projectsPro}
            textSize="text-xl md:text-4xl lg:text-5xl"
          />
        </div>
      </div>
    </main>
  );
}
