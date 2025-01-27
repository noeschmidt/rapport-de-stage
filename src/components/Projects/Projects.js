import Card from "../Card";
export default function Projects() {
  const orange = "#E7582E";
  const green = "#0D9488";
  const indigo = "#4F46E5";
  const projects = [
    {
      title: "Projets réalisés",
      color: orange,
      textAlign: "text-center",
    },
    {
      title: "Tableau des produits d’assurances",
      description:
        "J’ai crée un tableau, au début de mon stage, pour répertorier chaque produits d’assurances complémentaires.",
      src: "/tableau-comparateur.png",
      color: green,
      height: "h-96 md:h-[75vh]",
    },
    {
      title: "Initialisation et configuration d’Infomaniak",
      description:
        "Avant de faire le design, je souhaitais mettre en place les fondations du projet.",
      src: "/infomaniak.png",
      color: indigo,
      height: "h-96 md:h-[75vh]",
    },
    {
      title: "Mise en place du Figma",
      description:
        "J'ai des pages différents pour chaque partie du projet, design, base de donnée, logique, scraping, etc...",
      src: "/figma.png",
      color: orange,
      height: "h-96 md:h-[75vh]",
    },
    {
      title: "Initialisation du projet",
      description:
        "J’ai commencé la configuration du projet avec Next.js et j’ai mis en place la connexion avec la base de donnée.",
      src: "/code-project.png",
      color: green,
      height: "h-96 md:h-[75vh]",
    },
    {
      title: "Remplissage des pricings",
      description: "J'ai rempli le tableau des prix sur Excel.",
      src: "/pricings.png",
      color: indigo,
      height: "h-96 md:h-[75vh]",
    },
    {
      title: "Création de script",
      description:
        "J’ai crée un script pour transformer les Excels en JSON en Python.",
      src: "/script.png",
      color: orange,
      height: "h-96 md:h-[75vh]",
    },
    {
      title: "Tentatives de scraping",
      description:
        "J'ai essayé de scraper les comparateurs des assureurs en ligne.",
      src: "/helsana-website.png",
      color: green,
      height: "h-96 md:h-[75vh]",
    },
  ];
  return (
    <main className="white-background bg-fixed w-full h-full z-20 relative">
      <div className="max-width-custom px-8 mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            src={project.src}
            color={project.color}
            showImage={project.showImage}
            showDescription={project.showDescription}
            textAlign={project.textAlign}
            height={project.height}
          />
        ))}
      </div>
    </main>
  );
}
