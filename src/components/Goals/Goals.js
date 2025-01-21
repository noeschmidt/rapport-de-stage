import Card from "../Card";
export default function Goals() {
  const goals = [
    {
      title: "Objectifs et attentes",
      showImage: false,
      showDescription: false,
      color: "#E7582E",
      textAlign: "text-center",
    },
    {
      title: "Devenir un meilleur développeur full-stack",
      description: "Atteint à 75%",
      showImage: false,
      color: "#0D9488",
      textAlign: "text-left",
    },
    {
      title: "Comprendre le domaine des assurances",
      description: "Atteint à 90%",
      showImage: false,
      color: "#4F46E5",
      textAlign: "text-left",
    },
    {
      title: "Développer ma rigueur",
      description: "Atteint à 50%",
      showImage: false,
      textAlign: "text-left",
      color: "#E7582E",
      height: "h-72",
    },
  ];
  return (
    <main className="max-width-custom px-8 mx-auto">
      {goals.map((goal, index) => (
        <Card
          key={index}
          title={goal.title}
          description={goal.description}
          showImage={goal.showImage}
          showDescription={goal.showDescription}
          color={goal.color}
          textAlign={goal.textAlign}
          height={goal.height}
        />
      ))}
    </main>
  );
}
