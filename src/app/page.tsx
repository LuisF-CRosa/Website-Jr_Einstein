import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Services } from "../components/services";
import { SuccessCasesSection } from "../components/case-services";
import { Contact } from "../components/contact"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start bg-zinc-100">

      <section id="home" className="relative w-full bg-white overflow-hidden">
        <Header />
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

      <section id="contact" className="flex flex-col items-center w-full mt-20 px-5">
        <div className="flex flex-col justify-center w-full max-w-6xl">
          <h2 className="text-4xl font-semibold mb-3 text-left w-full text-zinc-700">Contato</h2>
          <Contact />
        </div>
      </section>

      <section id="footer" className="flex flex-col items-center w-full mt-20">
        <Footer />
      </section>
    </div>
  );
}
