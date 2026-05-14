"use client";

import { useEffect, useState } from "react";

const DESKTOP_BASE_WIDTH = 1665;

export function useDesktopScale() {
  const [viewportWidth, setViewportWidth] = useState(DESKTOP_BASE_WIDTH);
  const [desktopScale, setDesktopScale] = useState(1);

  useEffect(() => {
    const applyScale = () => {
      const width = window.innerWidth;
      const nextScale = Math.min(1, width / DESKTOP_BASE_WIDTH);
      setViewportWidth(width);
      setDesktopScale(nextScale);
    };

    applyScale();
    window.addEventListener("resize", applyScale);
    return () => window.removeEventListener("resize", applyScale);
  }, []);

  return { viewportWidth, desktopScale };
}
