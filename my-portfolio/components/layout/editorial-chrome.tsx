"use client";

import Link from "next/link";
import { useDesktopScale } from "@/components/home/use-desktop-scale";

/** Figma node 129:15444「logo」/ 107:11929「lotus 1」导出（MCP asset 已落盘为静态资源） */
const headerLotusSrc = "/home/header-lotus-figma.png";

export function EditorialHeader() {
  const { desktopScale, viewportWidth } = useDesktopScale();
  const canvasWidth = Math.max(1665, viewportWidth);

  return (
    <header className="border-b border-black bg-[#F8F6F3]">
      <div className="relative w-full" style={{ height: `${194 * desktopScale}px` }}>
        <div
          className="absolute left-1/2 top-0 h-[194px]"
          style={{
            width: `${canvasWidth}px`,
            transform: `translateX(-50%) scale(${desktopScale})`,
            transformOrigin: "top center",
          }}
        >
          <div className="absolute left-[52.84px] top-1/2 z-0 w-[519.6px] -translate-y-1/2">
            <p className="font-[family-name:var(--font-open-sans)] text-[14px] font-bold uppercase tracking-[2px]">
              LOTUS UI/UX
            </p>
            <p className="mt-0.5 font-[family-name:var(--font-open-sans)] text-[49.9px] font-bold uppercase leading-[1] tracking-[1px]">
              PORTFOLIO
            </p>
            <p className="mt-3 max-w-[420px] text-[12px] font-semibold leading-[20px]">
              Presented by Graduate School of Letters,
              <br />
              Kyoto University
            </p>
          </div>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 z-10 block h-[120px] w-[425px] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            aria-label="返回首页"
          >
            <img
              src={headerLotusSrc}
              alt="Lotus"
              width={425}
              height={120}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="pointer-events-none block h-[120px] w-[425px] max-w-none object-cover"
            />
          </Link>

            <div className="absolute right-[52.84px] top-1/2 z-0 h-[47px] w-[192px] -translate-y-1/2">
              <p className="font-[family-name:var(--font-be-vietnam-pro)] absolute left-[52.84px] top-[-1.8px] text-[53.096px] font-bold leading-[0.9] tracking-[0.85px]">
                UI
              </p>
              <div className="absolute left-[128.81px] top-[0.31px] pb-0">
                <p className="font-[family-name:var(--font-open-sans)] text-[18.052px] font-bold uppercase tracking-[1.8px]">
                  2026
                </p>
                <p className="font-[family-name:var(--font-be-vietnam-pro)] mt-[2px] text-[22px] font-bold uppercase leading-[1]">
                  year
                </p>
              </div>
            </div>
        </div>
      </div>
    </header>
  );
}

export function EditorialFooter() {
  const navItems = [
    { href: "/", label: "🏠 首页" },
    { href: "/projects", label: "📁 设计项目" },
    { href: "/#nr3", label: "💼 工作经历" },
    { href: "/#nr4", label: "☎️ 联系我" },
  ];

  const { desktopScale } = useDesktopScale();

  return (
    <footer className="bg-[#F8F6F3]">
      <div className="relative mx-auto w-full max-w-[1665px]" style={{ height: `${278 * desktopScale}px` }}>
        <div className="relative h-[278px] w-[1665px]" style={{ transform: `scale(${desktopScale})`, transformOrigin: "top left" }}>
        <div className="absolute left-[96px] top-[78.78px] h-[55px] w-[519px]">
          <p className="text-[14px] font-bold uppercase leading-[14px] tracking-[2px]">lotus UI/uX</p>
          <p className="mt-[6px] text-[49.9px] font-bold uppercase leading-[36px] tracking-[1px]">portfolio</p>
        </div>

        <nav className="absolute left-[1140px] top-[97.78px] flex items-start gap-[42px] text-[16px] font-bold leading-[16.991px]">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="group inline-flex flex-col">
              <span className="whitespace-nowrap">{item.label}</span>
              <span className="mt-[2px] h-px w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="absolute left-0 top-[213.78px] flex w-[1665px] justify-center px-[95.57px]">
          <div className="flex h-[63.711px] w-[1473.859px] items-center justify-center rounded-t-[20px] bg-black">
            <p className="text-center text-[12.743px] leading-[14.867px] tracking-[0.7646px] text-white">
              © 2026 Lotus. portfolio
            </p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
