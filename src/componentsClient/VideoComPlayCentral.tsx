'use client'

import Script from "next/script";



type SmartPlayerElement = HTMLElement & {
  shadowRoot?: ShadowRoot;
};

export default function VideoComPlayCentral() {


  return (
    
    <div className="mt-3 mx-2">
      <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden bg-mist-300">
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
    </div>
  );
}


{/*
<vturb-smartplayer id="vid-69b1a135de82d6df46fd3944" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>
 <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/b200f9a4-10ba-473a-80d3-6d314b4a207b/players/69b1a135de82d6df46fd3944/v4/player.js", s.async=!0,document.head.appendChild(s); </script>
 */}