import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Goals from "@/components/Goals/Goals";
import Explanation from "@/components/Explanation/Explanantion";
import Projects from "@/components/Projects/Projects";
import Personal from "@/components/Personal/Personal";
import Analyze from "@/components/Analyze/Analyze";
import Links from "@/components/Links/Links";
import InsuranceExplanation from "@/components/InsuranceExplanation/InsuranceExplanation";
import Footer from "@/components/Footer/Footer";
import MaskEntry from "@/components/MaskEntry/MaskEntry";
export default function Home() {
  return (
    <>
      <MaskEntry />
      <Hero />
      <About />
      <Goals />
      <Explanation />
      <Projects />
      <Personal />
      <Analyze />
      <Links />
      <InsuranceExplanation />
      <Footer />
    </>
  );
}
