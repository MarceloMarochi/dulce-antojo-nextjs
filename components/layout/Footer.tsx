import { FaInstagram, FaWhatsapp } from "react-icons/fa";

interface FooterProps {
  instagramUrl: string;
  whatsappNumber: string;
}

export default function Footer({ instagramUrl, whatsappNumber }: FooterProps) {
  const waLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="border-t bg-amber-950/25 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Línea 1 */}
          <p className="text-amber-950/80 font-medium text-lg">
            Cualquier consulta no dude en contactarnos.
          </p>

          {/* Línea 2 - Redes sociales */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-amber-950/80 hover:text-rose-500 transition-colors group"
            >
              <FaInstagram className="text-2xl group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Instagram</span>
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-amber-950/80 hover:text-green-600 transition-colors group"
            >
              <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
              <span className="font-semibold">+{whatsappNumber}</span>
            </a>
          </div>

          {/* Línea 3 - Copyright */}
          <div className="text-sm text-amber-900/60 pt-4 w-full">
            © {new Date().getFullYear()} — Autor Marcelo Gabriel Marochi
          </div>
        </div>
      </div>
    </footer>
  );
}