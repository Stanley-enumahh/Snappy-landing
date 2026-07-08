import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Install from "../components/Install";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#f5f5f5]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Install />
    </main>
  );
}
