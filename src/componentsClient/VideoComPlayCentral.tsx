'use client'

import Script from "next/script";



type SmartPlayerElement = HTMLElement & {
  shadowRoot?: ShadowRoot;
};

export default function VideoComPlayCentral() {


  return (
    
    <div className="mt-3 w-full">
      <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden bg-mist-300">
        <vturb-smartplayer
          id="vid-69b0875a011455be91e1c0e5"
          style={{
            display: "block",
            margin: "0 auto",
            width: "100%",
            height: "100%",
          }}
        />

        <Script
          src="https://scripts.converteai.net/b200f9a4-10ba-473a-80d3-6d314b4a207b/players/69b0875a011455be91e1c0e5/v4/player.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}


{/*

<div id="vid_69b0875a011455be91e1c0e5" style="position: relative; width: 100%; padding: 56.25% 0 0;"> <img id="thumb_69b0875a011455be91e1c0e5" src="https://images.converteai.net/b200f9a4-10ba-473a-80d3-6d314b4a207b/players/69b0875a011455be91e1c0e5/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_69b0875a011455be91e1c0e5" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div> </div> <script type="text/javascript" id="scr_69b0875a011455be91e1c0e5"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/b200f9a4-10ba-473a-80d3-6d314b4a207b/players/69b0875a011455be91e1c0e5/player.js", s.async=!0,document.head.appendChild(s); </script>



'use client'

import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'

const VIDEO_URL =
  'https://cdn.converteai.net/1fb21d75-5ccd-4d69-8903-25608648d696/669294dd44bbef000b09e3c9/main.m3u8'

export default function VideoComPlayCentral() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const hlsRef = useRef<Hls | null>(null)

  const [startedWithAudio, setStartedWithAudio] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setupHls = async () => {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = VIDEO_URL
        setIsReady(true)

        try {
          video.muted = true
          await video.play()
        } catch {
          // autoplay pode falhar silenciosamente
        }

        return
      }

      if (Hls.isSupported()) {
        const hls = new Hls({
          autoStartLoad: true,
          enableWorker: true,
        })

        hlsRef.current = hls
        hls.loadSource(VIDEO_URL)
        hls.attachMedia(video)

        hls.on(Hls.Events.MANIFEST_PARSED, async () => {
          setIsReady(true)

          try {
            video.muted = true
            await video.play()
          } catch {
            // autoplay pode falhar silenciosamente
          }
        })

        hls.on(Hls.Events.ERROR, (_event, data) => {
          console.error('Erro no HLS:', data)
        })
      }
    }

    setupHls()

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
    }
  }, [])

  const handleCenterButtonClick = async () => {
    const video = videoRef.current
    if (!video || isTransitioning) return

    setIsTransitioning(true)

    try {
      if (!startedWithAudio) {
        video.pause()
        video.currentTime = 0
        video.muted = false

        await video.play()

        setStartedWithAudio(true)
        setIsPaused(false)
        return
      }

      if (video.paused) {
        await video.play()
        setIsPaused(false)
      } else {
        video.pause()
        setIsPaused(true)
      }
    } catch (error) {
      console.error('Erro ao controlar reprodução do vídeo:', error)
    } finally {
      setIsTransitioning(false)
    }
  }

  return (
    <div className="mt-6 mx-2 overflow-hidden bg-black shadow-2xl md:mx-6">
      <div className="relative aspect-video w-full bg-black">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          playsInline
          preload="auto"
          controls={startedWithAudio}
          onPause={() => {
            if (startedWithAudio) setIsPaused(true)
          }}
          onPlay={() => {
            if (startedWithAudio) setIsPaused(false)
          }}
        />

        {!startedWithAudio && (
          <button
            type="button"
            onClick={handleCenterButtonClick}
            disabled={isTransitioning || !isReady}
            aria-label="Reproduzir vídeo"
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer disabled:opacity-70"
          >
            <span className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600/40"
                style={{ animationDuration: '1.8s' }}
              />
              <span className="absolute inline-flex h-[88%] w-[88%] rounded-full bg-red-600/30" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-red-500 bg-black/35 backdrop-blur-sm sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-9 w-9 fill-red-500 sm:h-11 sm:w-11"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}

        {startedWithAudio && isPaused && (
          <button
            type="button"
            onClick={handleCenterButtonClick}
            disabled={isTransitioning}
            aria-label="Retomar vídeo"
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <span className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600/40"
                style={{ animationDuration: '1.8s' }}
              />
              <span className="absolute inline-flex h-[88%] w-[88%] rounded-full bg-red-600/30" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-red-500 bg-black/35 backdrop-blur-sm sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-9 w-9 fill-red-500 sm:h-11 sm:w-11"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}*/}
















{/*
export default function VideoComPlayCentral() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [startedWithAudio, setStartedWithAudio] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleCenterButtonClick = async () => {
    const video = videoRef.current
    if (!video || isTransitioning) return

    setIsTransitioning(true)

    try {
      if (!startedWithAudio) {
        video.pause()
        video.currentTime = 0
        video.muted = false

        const playPromise = video.play()
        if (playPromise !== undefined) {
          await playPromise
        }

        setStartedWithAudio(true)
        setIsPaused(false)
        return
      }

      if (video.paused) {
        const playPromise = video.play()
        if (playPromise !== undefined) {
          await playPromise
        }
        setIsPaused(false)
      } else {
        video.pause()
        setIsPaused(true)
      }
    } catch (error) {
      console.error('Erro ao controlar reprodução do vídeo:', error)
    } finally {
      setIsTransitioning(false)
    }
  }

  return (
    <div className="mt-6 mx-2 overflow-hidden border border-white/10 bg-black shadow-2xl md:mx-6">
      <div className="relative aspect-video w-full">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="metadata"
          onPause={() => {
            if (startedWithAudio) setIsPaused(true)
          }}
          onPlay={() => {
            if (startedWithAudio) setIsPaused(false)
          }}
        >
          <source
            src="https://cdn.converteai.net/1fb21d75-5ccd-4d69-8903-25608648d696/669294dd44bbef000b09e3c9/main.m3u8"
            type="application/x-mpegURL"
          />
        </video>

        {(isPaused || !startedWithAudio) && (
          <button
            type="button"
            onClick={handleCenterButtonClick}
            disabled={isTransitioning}
            aria-label="Reproduzir vídeo"
            className="cursor-pointer absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 disabled:pointer-events-none"
          >
            <span className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600/40"
                style={{ animationDuration: '1.8s' }}
              />

              <span className="absolute inline-flex h-[88%] w-[88%] rounded-full bg-red-600/30" />

              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-red-500 bg-black/35 backdrop-blur-sm sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-9 w-9 fill-red-500 sm:h-11 sm:w-11"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
*/}