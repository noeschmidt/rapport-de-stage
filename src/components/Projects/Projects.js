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
        "J’ai crée un tableau, au début de mon stage, pour répertorier chaque produits d’assurances complémentaires. Pour chaque produit, j’enregistrais, en fonction de différents critères, les remboursement proposés.",
      src: "/tableau-comparateur.png",
      color: green,
    },
    {
      title: "Initialisation et configuration d’Infomaniak",
      description:
        "Avant de faire le design, je souhaitais mettre en place les fondations du projet. J’ai donc crée un serveur cloud managé à travers Infomaniak, avec beaucoup de bugs et de problèmes mais grâce à leur support je m’en suis sorti.",
      src: "/infomaniak.png",
      color: indigo,
    },
    {
      title: "Mise en place du Figma",
      description:
        "J’utilise un peu Figma comme un second cerveau. Je fais quasiment tout dessus, j’ai des pages différents pour chaque partie du projet, design, base de donnée, logique, scraping, etc...",
      src: "/figma.png",
      color: orange,
    },
    {
      title: "Initialisation du projet",
      description:
        "J’ai commencé la configuration du projet avec Next.js et j’ai mis en place la connexion avec la base de donnée.",
      src: "/code-project.png",
      color: green,
    },
    {
      title: "Remplissage des pricings",
      description:
        "Les prix des assurances sont complexes, ils peuvent varier en fonction de l’âge, du sexe, de la localité où l’on habite et si on souhaite couvrir la maladie et l’accident ou seulement la maladie. J’ai remplis des Excels manuellement avec des listes de prix, pour chaque produit d’assurance.",
      src: "/pricings.png",
      color: indigo,
    },
    {
      title: "Création de script",
      description:
        "Pour importer les prix dans la base de donnée, il fallait qu’il soit dans un format JSON bien précis. J’ai crée un script pour transformer les Excels en JSON en Python.",
      src: "/script.png",
      color: orange,
    },
    {
      title: "Tentatives de scraping",
      description:
        "Chaque assureur a un outil en ligne qui permet de voir chaque produit d’assurance et le prix associé. J’ai voulu, pour me simplifier la vie, faire du scraping. Mauvaise idée, j’ai passé à essayer de créer des script de scraping foireux, qui ont fonctionné que sur un ou deux assureur. Je me suis rendu compte que faire du bon scraping ça prends un temps fou et qu’il faut des compétences que je n’avais pas forcément développé.",
      src: "/helsana-website.png",
      color: green,
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
