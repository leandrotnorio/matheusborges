import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentor Matheus Borges",
  description: "Método Maquina de Vendas Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://scripts.converteai.net" />
        <link rel="preconnect" href="https://cdn.converteai.net" />
        <link rel="preconnect" href="https://images.converteai.net" />

        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link
          rel="preload"
          href="https://scripts.converteai.net/b200f9a4-10ba-473a-80d3-6d314b4a207b/players/69b0875a011455be91e1c0e5/v4/player.js"
          as="script"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#111111] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
