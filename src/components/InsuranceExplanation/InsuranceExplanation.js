import { ParagraphsContainer } from "../Text/Paragraph";
export default function InsuranceExplanation() {
  const paragraphs = [
    "C’est un sujet vaste et complexe, mais je vais essayer de l’expliquer le plus simplement possible.",
    "Tout d’abord, comme expliqué plus haut, en Suisse, seule l’assurance de base est obligatoire. L’assurance complémentaire, quant à elle, est considérée comme une assurance répondant à des besoins spécifiques qui ne sont pas couverts par l’assurance de base.",
    "Il existe différents types d’assurances complémentaires : pour les soins ambulatoires, l’hospitalisation, les voyages, et bien d’autres.",
    "Chacun de ces produits répond à des besoins précis. Par exemple, si vous souhaitez bénéficier de plus de confort lors d’une hospitalisation avec une chambre privée, obtenir un remboursement partiel pour le fitness ou les médecines douces, une assurance complémentaire peut répondre à vos attentes.",
    "Il existe une multitude d’assureurs en Suisse (Helsana, Swica, Visana, Groupe Mutuel, etc.). Vous avez peut-être déjà vécu une mauvaise expérience avec un assureur (ou un ancien assureur) ou entendu des amis en parler négativement.",
    'Et oui, les assureurs ne sont pas là pour faire des cadeaux : leur objectif principal est de générer des bénéfices. Cependant, il est important de noter qu’il n’existe pas d’assureur "ULTIME". D’après mes recherches approfondies et après avoir lu toutes les conditions particulières des produits d’assurance, j’ai le plus confiance en Swica, Helsana et Visana.',
    "Dans certains cas, une assurance complémentaire peut être très utile, voire rentable. Par exemple, j’ai récemment souscrit aux assurances TOP et Sana chez Helsana. Ces deux assurances me coûtent, combinées, environ CHF 22.- par mois. En contrepartie, elles me remboursent jusqu’à CHF 200.- pour le fitness par an, CHF 500.- par an pour les check-ups, ainsi que d’autres traitements comme la kinésithérapie, l’acupuncture, et bien d’autres.",
    "Cela signifie qu’au total, ces assurances me coûtent environ CHF 260.- par an, mais je récupère largement cette somme grâce aux remboursements proposés.",
    "Aussi, il est fréquent que les Suisses soient surassurés. Une démarche utile que j’ai faite avec ma famille a été de consacrer 30 minutes à lister toutes nos assurances, consulter les détails de chaque produit sur le site de nos assureurs, et nous poser la question suivante : Avons-nous vraiment besoin de ce produit et est-il rentable ?",
    "En résumé, l’assurance de base en Suisse est obligatoire. À part consulter Priminfo pour identifier l’offre la moins chère, il n’y a pas beaucoup d’options pour la modifier. En revanche, les assurances complémentaires peuvent être très intéressantes si elles sont bien choisies. N’hésitez pas à chercher celle qui vous convient le mieux !",
  ];
  return (
    <main className="white-background bg-fixed relative w-full h-full z-20">
      <div className="max-width-custom px-8 flex flex-col gap-8 justify-center size-full mx-auto py-12 md:py-32">
        <div className="px-4 py-2 bg-brand-600 w-fit rounded-lg text-base-softWhite font-medium border border-brand-200 shadow-md">
          Explication
        </div>
        <h2>Assurances complémentaires</h2>
        <ParagraphsContainer
          paragraphs={paragraphs}
          textSize="text-lg md:text-4xl lg:text-5xl"
        />
      </div>
    </main>
  );
}
