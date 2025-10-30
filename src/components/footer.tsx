import { PiLinkedinLogo, PiInstagramLogo } from "react-icons/pi";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      id="footer"
      className="
        w-full bg-[#EEEEEE] text-gray-700
        flex flex-col md:flex-row justify-between items-center
        px-6 sm:px-12 lg:px-24 py-12 gap-10 md:gap-6
      "
    >
      {/* Coluna 1 - Quem somos */}
      <div className="max-w-sm text-center md:text-left">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-[#218B7E] to-[#3F6A9A] bg-clip-text text-transparent">Quem somos</h2>
        <p className="text-sm leading-relaxed text-gray-600">
          Capacitando estudantes a entregar soluções tecnológicas profissionais
          enquanto desenvolvem experiência prática.
        </p>
      </div>

      {/* Coluna 2 - Siga-nos */}
        <div className="max-w-sm text-left">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-[#218B7E] to-[#3F6A9A] bg-clip-text text-transparent">Siga-nos</h2>
          <div className="flex gap-2">
            {/* Ícone do LinkedIn */}
            <a
              href="https://www.linkedin.com/company/consultoria-j%C3%BAnior-einstein/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/assets/redes/linkedin_icon.png"
                alt="LinkedIn"
                width={50}
                height={50}
                className="hover:opacity-75 transition-opacity"
              />
            </a>

            {/* Ícone do Instagram */}
            <a
              href="https://www.instagram.com/consultoriajr.einstein/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="/assets/redes/instagram_icon.png"
                alt="Instagram"
                width={50}
                height={50}
                className="hover:opacity-75 transition-opacity"
              />
            </a>
          </div>
        </div>

      {/* Coluna 3 - Logo */}
      <div className="relative w-32 h-20 md:w-40 md:h-24">
        <Image
          src="/assets/logos/logo_junior_cinza.png"
          alt="Insper Code logo"
          fill
          className="object-contain"
        />
      </div>
    </footer>
  );
}

