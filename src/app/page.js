import Cards from "@/components/Project/Cards";
import Paragraph from "@/components/Text/Paragraph";
import About from "@/components/About/About";
import Goals from "@/components/Goals/Goals";
import Explanation from "@/components/Explanation/Explanantion";
export default function Home() {
  return (
    <>
      <div className="h-screen">
        <h1 className="font-bold">Hello</h1>
      </div>

      <About />
      <Goals />
      <Explanation />
    </>
  );
}
