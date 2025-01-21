import Card from "../ColoredCards/Card";
import Paragraph from "../Text/Paragraph";
export default function Explanation() {
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
            d="M10 8.5H8.70711C8.25435 8.5 7.82014 8.67986 7.5 9M14 8.5H15.2929C15.7456 8.5 16.1799 8.67986 16.5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.31313 17.9198C6.89597 16.5535 6.89576 14.4497 7.31168 13.0825C7.57009 12.2331 8.29788 12 9.11765 12H14.8823C15.701 12 16.4284 12.2327 16.6872 13.0807C17.1043 14.4476 17.1043 16.5524 16.6872 17.9193C16.4284 18.7673 15.701 19 14.8823 19H9.11765C8.29936 19 7.57194 18.7675 7.31313 17.9198Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13.5L2 12M17 13.5L22 12M7 17.5L3.5 17M17 17.5L20.5 17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Base",
      smallTitle: "Obligatoire",
      description:
        "Couvre les besoins de base, quand on va chez le médecin, etc...",
      showBulletPoint: false,
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
            d="M12 8V16M16 12L8 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Complémentaire",
      smallTitle: "Facultative",
      description:
        "Couvre les besoins “en plus” qu’on peut avoir, par exemple: le fitness, les lunettes, la médecine alternative.",
      showBulletPoint: false,
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
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 16H15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11L8.5 9.5M8.5 9.5L7 8M8.5 9.5L7 11M8.5 9.5L10 8M17 11L15.5 9.5M15.5 9.5L14 8M15.5 9.5L14 11M15.5 9.5L17 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Vie",
      smallTitle: "Facultative",
      description:
        "Couvre en cas de décès ou parfois un investissement pour la retraire.",
      showBulletPoint: false,
      color: "#4F46E5",
      roundedTopLeft: "0",
      roundedTopRight: "24px",
      roundedBotRight: "0",
      roundedBotLeft: "24px",
      paddingY: "-[24px]",
    },
  ];
  const projectDescription = {
    description: `Première chose, un courtier en assurance touche de l'argent en vous vendant une assurance. Il va toucher une commission différentes en fonction de l'assureur, c'est pour ça que certains courtiers ont tendance à vouloir vous vendre des produits dont vous n'avez aucune utilité mais qui s'ajoute au prix total.

En Suisse, vous connaissez peut-être Comparis, pour comparer vos assurances. En fait, Comparis peut être perçu comme un énorme courtier, il vous propose de conclure des assurances, qui selon lui sont avantageuses, et touche une commission sur chaque vente.

Le soucis avec Comparis, c'est qu'il n'est pas assez précis. Il vous pose 1 question et directement vous propose des produits.

Sauf que c'est bien plus complexe, pour savoir si un produit est vraiment adéquat, il faut poser plus de questions pour découvrir vraiment les besoins d'une personne.

Par exemple, une personne qui souhaite couvrir des prestations lié à ses dents, va vouloir une assurance dentaire. Mais chez beaucoup d'assureur, il y a des variantes avec des taux de remboursements plus ou moins élevés, et des primes à payer différentes aussi. Ce qui rends le choix difficile, si la personne a 1 seul rendez-vous par année, on ne va pas lui proposer la couverture la plus haute.

Un des soucis principal est que forcément il est légèrement biaisé. S'il peut toucher 5 fois plus avec un certain assureur, il a tout intérêt à vous recommender cet assureur.

Notre mission avec Zoodle (Le nom de l'app) était de comparer tous les produits d'assurances complémentaires en fonction des besoins de chaque personne, pour déterminer quel(s) produit(s) est adéquat.

Pas facile, puisque qu'il existe des centaines de produits, tous sont différents, tous ont un prix différent, en fonction de l'âge, du sexe, d'où-t-on réside, et d'autres critères.

Pour les prix, Comparis a accès à une API pour chaque assureur, sauf que nous non. Ce qui fait que nous devons soit utiliser des listes de prix en Excel, soit faire du scraping sur le site de chaque assureur.`,
  };
  return (
    <main className="textured-background size-full text-base-softWhite py-8">
      <div className="max-width-custom px-8 flex flex-col gap-8 justify-center size-full mx-auto">
        <h4 className="text-base-softWhite text-4xl text-left font-semibold">
          Courte explication des assurances en Suisse.
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
              color={card.color}
              roundedTopLeft={card.roundedTopLeft}
              roundedTopRight={card.roundedTopRight}
              roundedBotLeft={card.roundedBotLeft}
              roundedBotRight={card.roundedBotRight}
            />
          ))}
        </div>
        <h4 className="text-base-softWhite text-4xl text-left font-semibold">
          Description du projet
        </h4>

        <Paragraph paragraph={projectDescription.description} index={0} />
      </div>
    </main>
  );
}
