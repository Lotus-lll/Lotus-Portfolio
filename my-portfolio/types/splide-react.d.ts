/* Workaround: @splidejs/react-splide types are not resolved via package.json "exports" in some TS setups */
declare module "@splidejs/react-splide" {
  import type { Component, ReactNode } from "react";
  import type { Options } from "@splidejs/splide";
  import type { Splide as SplideInstance } from "@splidejs/splide";

  export { Options } from "@splidejs/splide";

  export class Splide extends Component<{
    options?: Options;
    className?: string;
    id?: string;
    hasTrack?: boolean;
    role?: string;
    "aria-label"?: string;
    children?: ReactNode;
  }> {
    readonly splideRef: React.RefObject<HTMLDivElement | null>;
    splide: SplideInstance | undefined;
  }

  export const SplideSlide: (props: {
    className?: string;
    children?: ReactNode;
  }) => ReactNode;
}
