import Cards from "@/components/Project/Cards";
import Paragraph from "@/components/Text/Paragraph";
export default function Home() {
  return (
    <>
      <h1 className="font-bold">Hello</h1>
      <Cards />
      <div className="h-screen"></div>
      <Paragraph
        paragraph={
          "Mon role a été développeur full-stack & designer, ayant pour mission de développer une web app de comparaison d’assurances suisses."
        }
      />
      <div className="h-screen"></div>
    </>
  );
}
