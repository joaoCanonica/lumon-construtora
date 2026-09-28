import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Lumon Construtora | Saphira Residence, Lages",
 description: "Conheça o Saphira Residence, da Lumon Construtora e Incorporadora. Studios e apartamentos de 2 dormitórios, de 30 a 70 m², no bairro Universitário, em Lages.",
 icons: {icon:"/favicon.svg",shortcut:"/favicon.svg"},
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {return <html lang="pt-BR"><body>{children}</body></html>}
