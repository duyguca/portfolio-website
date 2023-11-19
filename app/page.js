import HeroSection from "@/components/heroSection";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import GoToTop from "@/components/goToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#121212] dark:bg-purple-100 px-4 py-2 relative">
      <div className="container w-full max-w-[70rem] mx-auto">
        <HeroSection />
        <Projects />
        <About />
        <Contact />
        <GoToTop />
      </div>
    </main>
  );
}
