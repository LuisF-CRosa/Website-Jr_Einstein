import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Services } from "../components/services";
import { About } from "../components/about";
import { SuccessCasesSection } from "../components/case-services";
import { Contact } from "../components/contact"
import { Inicio } from "../components/inicio";

import Image from "next/image";
import bgPlaceholder from "@/assets/einsteinjr.webp"; 


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start bg-zinc-100">
      <Header />
      <section id="home" className="relative w-full">
          <div className="relative w-screen h-screen overflow-hidden">
        <Image
          src={bgPlaceholder} // static import -> next gera blurDataURL automaticamente
          alt="Background Einstein Jr."
          fill
          priority
          placeholder="blur"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,#325D51_0%,#325D51_40%,#011F41_80%)] opacity-80 mix-blend-multiply"></div>
        <Inicio />
      </div>
      </section>

      <section id="about" className="flex flex-col items-center w-full mt-15 xl: px-5">
        <div className="flex flex-col items-between justify-center w-full max-w-6xl">
          <About />
        </div>
      </section>

      <section id="services" className="flex flex-col items-center w-full mt-15 xl: px-5">
        <div className="flex flex-col items-between justify-center w-full max-w-6xl">
          <Services />
        </div>
      </section>

      <section id="cases" className="flex flex-col items-center w-full mt-15 xl: px-5">
        <div className="flex flex-col items-between justify-center w-full max-w-6xl">
          <SuccessCasesSection />
        </div>
      </section>

      <section id="contact" className="flex flex-col items-center w-full mt-20 xl: px-5">
        <div className="flex flex-col justify-center w-full max-w-6xl">
          <Contact />
        </div>
      </section>

      <section id="footer" className="flex flex-col items-center w-full mt-20">
        <Footer />
      </section>
    </div>
  );
}
