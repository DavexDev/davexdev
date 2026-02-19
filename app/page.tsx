import Hero from "@/components/sections/Hero";
import Evolution from "@/components/sections/Evolution";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Evolution />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}
