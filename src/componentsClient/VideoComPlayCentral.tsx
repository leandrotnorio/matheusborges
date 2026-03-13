'use client'

import Script from "next/script";



type SmartPlayerElement = HTMLElement & {
  shadowRoot?: ShadowRoot;
};

export default function VideoComPlayCentral() {


  return (
    
    <div className="mt-3 mx-3 lg:mx-66">
      <div className="relative aspect-video w-full overflow-hidden bg-mist-300">
        <vturb-smartplayer
          id="vid-69b1a135de82d6df46fd3944"
          style={{
            display: "block",
            margin: "0 auto",
            width: "100%",
            height: "100%",
          }}
        />

        <Script
          src="https://scripts.converteai.net/b200f9a4-10ba-473a-80d3-6d314b4a207b/players/69b1a135de82d6df46fd3944/v4/player.js"
          strategy="afterInteractive"
        />
      </div>
      <div className="text-[16px] md:text-2xl text-neutral-700 text-center mx-17 my-4">
        <p><strong>Detalhe:</strong> Mesmo que esteja começando do zero, sem aparecer e sem investir.</p>
        
      </div>
    </div>
  );
}


{/*
<vturb-smartplayer id="vid-69b1a135de82d6df46fd3944" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>
 <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/b200f9a4-10ba-473a-80d3-6d314b4a207b/players/69b1a135de82d6df46fd3944/v4/player.js", s.async=!0,document.head.appendChild(s); </script>
 */}