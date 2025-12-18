import "./globals.css";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
};


export const metadata: Metadata = {
  metadataBase: new URL("https://www.neuralcraft.com.ar"),
  title: {
    default: "NeuralCraft | IA, Smart Cities y Desarrollo de Software",
    template: "%s | NeuralCraft",
  },
  description:
    "Ingeniería aplicada a la Inteligencia Artificial. Desarrollamos soluciones de IA, analítica, smart cities y software a medida para organizaciones y ciudades.",
  keywords: [
    "NeuralCraft",
    "Inteligencia Artificial",
    "IA Generativa",
    "Smart Cities",
    "Desarrollo de Software",
    "Analítica",
    "BI",
    "Transformación Digital",
    "Ciberseguridad",
    "Cloud",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.neuralcraft.com.ar",
    siteName: "NeuralCraft",
    title: "NeuralCraft | IA, Smart Cities y Desarrollo de Software",
    description:
      "Ingeniería aplicada a la Inteligencia Artificial. Soluciones de IA, analítica, smart cities y software a medida.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "NeuralCraft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralCraft | IA, Smart Cities y Desarrollo de Software",
    description:
      "Ingeniería aplicada a la Inteligencia Artificial. Soluciones de IA, analítica, smart cities y software a medida.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // themeColor: "#0A0A0C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
