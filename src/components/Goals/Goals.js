import Card from "../Card";
export default function Goals() {
  const titleSize = "text-xl md:text-3xl xl:text-5xl";
  const goals = [
    {
      title: "Objectifs et attentes",
      showImage: false,
      showDescription: false,
      color: "#E7582E",
      textAlign: "text-center",
      titleClassNames: "text-nowrap",
    },
    {
      title: "Devenir un meilleur développeur full-stack",
      description: "Atteint à 75%",
      showImage: false,
      color: "#0D9488",
      textAlign: "text-left",
      titleClassNames: titleSize,
    },
    {
      title: "Comprendre le domaine des assurances",
      description: "Atteint à 90%",
      showImage: false,
      color: "#4F46E5",
      textAlign: "text-left",
      titleClassNames: titleSize,
    },
    {
      title: "Développer ma rigueur",
      description: "Atteint à 50%",
      showImage: false,
      textAlign: "text-left",
      color: "#E7582E",
      height: "h-40 md:h-72",
      titleClassNames: titleSize,
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
            color={goal.color}
            textAlign={goal.textAlign}
            height={goal.height}
            titleClassNames={goal.titleClassNames}
          />
        ))}
      </div>
    </main>
  );
}
