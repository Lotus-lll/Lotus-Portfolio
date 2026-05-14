"use client";

import { useDesktopScale } from "@/components/home/use-desktop-scale";

/** Figma 131:10「lotus 2」——与稿 130:15446 / nr5 中央字标一致 */
const imgLotus2 = "/home/nr5-lotus-figma-131-10.png";
/** Figma 107:12954「Image」——与稿 nr5 左下角装饰一致 */
const imgImage = "/home/nr5-corner-figma-12954.png";

const lotusStrip = Array.from({ length: 8 }, () => "lotus UI/UX portfolio");

export function Nr5Section() {
  const stripLoop = [...lotusStrip, ...lotusStrip];
  const { desktopScale, viewportWidth } = useDesktopScale();
  const canvasWidth = Math.max(1665, viewportWidth);

  return (
    <section className="relative border-y border-black">
      <div
        className="desktop-scale-shell relative w-full"
        style={{ "--desktop-base-height": "515px", height: `${515 * desktopScale}px` } as any}
      >
        <div
          className="absolute left-1/2 top-0 h-[515px]"
          style={{
            width: `${canvasWidth}px`,
            transform: `translateX(-50%) scale(${desktopScale})`,
            transformOrigin: "top center",
          }}
        >
        <div className="absolute inset-x-0 top-px h-[514.031px] bg-white">
          <div className="relative h-[66.891px] overflow-hidden">
            <div className="nr2-marquee flex w-max items-center gap-[42px] pt-[18.78px]">
              {stripLoop.map((item, idx) => (
                <span key={`top-${idx}`} className="whitespace-nowrap text-[25.486px] italic tracking-[2.5486px]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex h-[380.258px] items-center justify-center border-y border-[#d9d9d9]">
            <img
              src={imgLotus2}
              alt="Lotus"
              loading="lazy"
              decoding="async"
              className="h-[120px] w-[425px] object-contain"
            />
          </div>

          <div className="relative h-[66.891px] overflow-hidden">
            <div className="nr2-marquee flex w-max items-center gap-[42px] pt-[18.78px]">
              {stripLoop.map((item, idx) => (
                <span key={`bottom-${idx}`} className="whitespace-nowrap text-[25.486px] italic tracking-[2.5486px]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute left-0 right-0 top-0 mx-auto h-full w-full max-w-[1665px]">
            <img
              src={imgImage}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute left-[37.1640625px] top-[294.890625px] h-[162.859375px] w-[220.875px] object-contain"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

