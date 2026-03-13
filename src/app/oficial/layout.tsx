import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        <link rel="preload" href="https://cdn.converteai.net/b200f9a4-10ba-473a-80d3-6d314b4a207b/69b1e3ee005f4e6dada6114a/main.m3u8" as="fetch"></link>
        <meta name="facebook-domain-verification" content="aaqm5qredcd6vnslhz5zmmhufpfd7w" />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#111111] text-white antialiased`}
      >
        {children}
        
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1624802691854105');
        fbq('track', 'PageView');
        `}
      </Script>
      <noscript><img height="1" width="1" style={{display:"none"}}
      src="https://www.facebook.com/tr?id=1624802691854105&ev=PageView&noscript=1"
      /></noscript>

      </body>
    </html>
  );
}