import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#f5f5f5]">
      <Navbar />
      <Hero />
    </main>
  );
}
