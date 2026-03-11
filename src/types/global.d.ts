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

export {};