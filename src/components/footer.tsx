import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0000] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="CineFlix Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="text-2xl font-bold text-white">
                CINE<span className="text-red-600">FLIX</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Sua plataforma de streaming com o melhor conteúdo por um preço que cabe no seu bolso.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Início", "Planos", "Conteúdo", "Sobre Nós", "FAQ"].map((item, index) => (
                <li key={`link-${index + 1}`}>
                  <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Termos de Uso", "Política de Privacidade", "Política de Cookies", "Reembolso"].map((item, index) => (
                <li key={`legal-${index + 1}`}>
                  <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">suporte@cineflix.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-2">Horário de atendimento:</p>
              <p className="text-gray-500 text-xs">Segunda a Sexta: 8h às 20h</p>
              <p className="text-gray-500 text-xs">Sábado: 9h às 15h</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CineFlix. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="text-gray-500 text-xs hover:text-gray-400">
              Formas de Pagamento
            </Link>
            <Link href="#" className="text-gray-500 text-xs hover:text-gray-400">
              Ajuda
            </Link>
            <Link href="#" className="text-gray-500 text-xs hover:text-gray-400">
              Trabalhe Conosco
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

