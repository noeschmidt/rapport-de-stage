import Card from "../Card";
export default function Analyze() {
  const goals = [
    {
      title: "Analyse critique",
      showImage: false,
      showDescription: false,
      color: "#E7582E",
      textAlign: "text-center",
    },
    {
      title: "Points positifs",
      showImage: false,
      showDescription: false,
      color: "#0D9488",
      textAlign: "text-center",
    },
    {
      title: "Liberté du choix des technologies",
      showImage: false,
      showDescription: false,
      color: "#4F46E5",
      textAlign: "text-center",
    },
    {
      title: "Projet ambitieux et avec une vraie chance de réussite",
      showImage: false,
      showDescription: false,
      color: "#E7582E",
      textAlign: "text-center",
    },
    {
      title: "Bureaux agréables et proche de la ville",
      showImage: false,
      showDescription: false,
      color: "#0D9488",
      textAlign: "text-center",
    },
    {
      title: "Un boss amical et dans le même esprit que moi",
      showImage: false,
      showDescription: false,
      color: "#4F46E5",
      textAlign: "text-center",
    },
    {
      title: "Points d’amélioration",
      showImage: false,
      showDescription: false,
      color: "#E7582E",
      textAlign: "text-center",
    },
    {
      title: "Organisation",
      showImage: false,
      showDescription: true,
      description:
        "Je pense que planifier plus en profondeur le projet pour savoir ce qu’il faut faire chaque semaine, m’aurait permis d’être mieux organisé!",
      color: "#0D9488",
      textAlign: "text-center",
    },
    {
      title: "Equipe",
      showImage: false,
      showDescription: true,
      description:
        "Avoir une équipe (même petite), pour pouvoir m’aider et me conseiller lors de la résolution de problèmes.",
      color: "#4F46E5",
      textAlign: "text-center",
    },
    {
      title: "Suivi",
      showImage: false,
      showDescription: true,
      description:
        "En me découvrant durant ce stage, je me suis rendu compte que je travaillais mieux avec des deadlines précises et des tâches à régler.",
      color: "#E7582E",
      textAlign: "text-center",
    },
    {
      title: "Leçons apprises",
      showImage: false,
      showDescription: false,
      showBulletPoint: true,
      bulletPoints: [
        "Il faut prendre le temps. Tout demande de la patience. Il vaut mieux avancer tranquillement et bien faire quelque chose plutôt que de vouloir terminer rapidement au risque de bâcler le travail.",
        "Je suis un team-player.",
        "Pour avancer efficacement, j’ai besoin de tâches précises, assorties d’une deadline claire.",
        "Il est important de savoir faire des pauses. Parfois, cela aide même à résoudre certains problèmes.",
      ],
      color: "#0D9488",
      textAlign: "text-center",
      showSVGBulletPoint: false,
    },
  ];
  return (
    <main className="white-background bg-fixed w-full h-full z-20 relative">
      <div className="max-width-custom px-8 mx-auto">
        {goals.map((goal, index) => (
          <Card
            key={index}
            title={goal.title}
            description={goal.description}
            showImage={goal.showImage}
            showDescription={goal.showDescription}
            showBulletPoint={goal.showBulletPoint}
            bulletPoints={goal.bulletPoints}
            color={goal.color}
            textAlign={goal.textAlign}
            height={goal.height}
            showSVGBulletPoint={goal.showSVGBulletPoint}
          />
        ))}
      </div>
    </main>
  );
}
