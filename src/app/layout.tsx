import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Papel de Axe | Papelaria afetiva e personalizados",
  description:
    "Papelaria personalizada para umbanda e candomble, com acabamento delicado, tiragens especiais e atendimento acolhedor."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
