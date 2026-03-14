import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": HTMLAttributes<HTMLElement> & {
        id?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

declare global {
  interface Window {
    fbq?: (
      command: "init" | "track" | "trackCustom" | "consent",
      eventNameOrPixelId: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

export {};