import { FaInstagram, FaWhatsapp } from "react-icons/fa";

interface FooterProps {
  instagramUrl: string;
  whatsappNumber: string; // ej: "5493511234567"
}

export default function Footer({ instagramUrl, whatsappNumber }: FooterProps) {
  const waLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="mt-16 border-t border-amber-200/60 bg-amber-600/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Línea 1 */}
          <p className="text-amber-950/80 font-medium">
            Cualquier consulta no dude en contactarnos.
          </p>

          {/* Línea 2 */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-950/80 hover:text-amber-950 transition"
            >
              <FaInstagram className="text-xl" />
              <span className="font-semibold">Instagram</span>
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-950/80 hover:text-amber-950 transition"
            >
              <FaWhatsapp className="text-xl" />
              <span className="font-semibold">+{whatsappNumber}</span>
            </a>
          </div>

          {/* Línea 3 */}
          <div className="text-sm text-amber-900/70">
            © {new Date().getFullYear()} — Autor Marcelo Gabriel Marochi
          </div>
        </div>
      </div>
    </footer>
  );
}
