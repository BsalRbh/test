import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <div className="container px-[16px] mx-auto ">
        <Navbar />
        <Hero />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
