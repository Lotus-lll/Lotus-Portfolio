"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { projectArchiveCards } from "@/data/project-archive-cards";
import { useDesktopScale } from "@/components/home/use-desktop-scale";

/** Figma 107:11937「Video」导出（MCP asset，与稿一致） */
const imgNr1Video = "/home/nr1-video-figma.png";
/** Figma 107:11944「Image」插画 */
const imgNr1Illustration = "/home/nr1-illustration-figma.png";
/** Figma 107:11945「Link」CTA 条背景 */
const imgNr1CtaBg = "/home/nr1-cta-bg-figma.png";
/** Figma 107:11945 内小圆箭头 */
const imgNr1CtaArrow = "/home/nr1-cta-arrow-figma.svg";
/** Figma 首页「Rectangle 2」底纹 PNG（get_screenshot 107:11906），避免 JPEG 网格黑边 */
const imgNr1PaperBg = "/home/nr1-paper-bg-figma.png";
/** nr1 左栏正文（产品文案，非 Figma 逐字稿） */
const NR1_BODY_COPY = `拥有7年设计经验，参与过的项目类型主要有SaaS、B 端系统、C 端、班牌硬件终端，H5运营设计等实践经验。

工作经历让我形成一种工作方式：先判断问题属于什么类型，再选择合适的设计路径，而不是套用固定的方法。相比单纯的界面优化，我更关注设计是否能够对实际使用产生影响。且持续引入 AI 辅助设计，用于方案探索和效率提升，目前大约能提升 40% 的产出效率。

设计不是单一风格或方法，而是：在不同约束和场景下，找到更合适的解法。`;

export function Nr1Section() {
  const router = useRouter();
  const slides = useMemo(
    () =>
      projectArchiveCards.slice(0, 3).map((item, index) => {
        const yearPart = item.date.slice(0, 4);
        const monthMatch = item.date.match(/\.(\d{2})/);
        const monthPart = monthMatch?.[1] ?? "01";
        return {
          slug: item.slug,
          image: item.img,
          monthText: monthPart,
          yearText: yearPart,
          yearLabel: "year",
          title: item.title,
          system: item.tag,
          tags: item.tags,
          description: item.desc,
        };
      }),
    []
  );
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const { desktopScale, viewportWidth } = useDesktopScale();
  const current = slides[currentIndex];
  const prevSlide = () =>
    setCurrentIndex((idx) => (idx - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentIndex((idx) => (idx + 1) % slides.length);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((idx) => (idx + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  return (
    <section id="nr1" className="relative overflow-hidden bg-[#F8F6F3] py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[#F8F6F3]"
        style={{
          backgroundImage: `url(${imgNr1PaperBg})`,
          backgroundSize: "1665px auto",
          backgroundPosition: "center -75px",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-[85.61px] z-[1] h-[810px] border-y border-black bg-white"
        style={{
          display: viewportWidth > 1665 ? "block" : "none",
          width: `${Math.max(12, (viewportWidth - 1665) / 2 + 12)}px`,
        }}
      />
      <div
        className="relative z-[1] nr1-desktop-shell mx-auto w-full max-w-[1665px]"
        style={{ height: `${880 * desktopScale}px` }}
      >
        <div
          className="nr1-desktop-canvas relative h-[840px] w-[1665px]"
          style={{ transform: `scale(${desktopScale})` }}
        >
          {/* Figma 107:11936「bg」+ 107:11937「Video」——与右侧「右边」板块分离，仅作中间条带 */}
          <div className="absolute left-[371.66px] top-[263.35px] z-[1] h-[723.16px] w-[825.1px] overflow-hidden bg-[#0a0a0a]">
            <img
              src={imgNr1Video}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-[95.57px] top-[129.43px] z-[2] h-[765px] w-[435.38px]">
            <div className="relative top-0 flex h-[41.34px] items-center border-b border-dashed border-black pb-[15.87px]">
              <p className="text-[20px] font-bold tracking-[2px]">🤔 我是谁？</p>
            </div>
            <h1 className="absolute left-[0.43px] top-[71.18px] text-[50px] font-bold leading-none">
              Lotus
            </h1>
            {/* 正文上沿距 Lotus 下沿 = Lotus 上沿距「我是谁？」下沿（71.18 - 41.34 ≈ 29.84px） */}
            <p className="absolute left-0 top-[151.02px] w-[419px] whitespace-pre-wrap text-justify text-[14px] font-bold leading-[29.733px] tracking-[2px]">
              {NR1_BODY_COPY}
            </p>

            {/* Figma 107:11945「Link」——外框与内层 107:11946 / 107:11948 坐标与 get_design_context 一致 */}
            <a
              href="#nr4"
              className="group absolute left-[76.46875px] top-[533.61px] h-[49.90625px] w-[342.9921875px] overflow-visible"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <img
                  src={imgNr1CtaBg}
                  alt=""
                  aria-hidden
                  className="absolute left-0 top-0 h-[103.09%] w-full max-w-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute left-[33.98px] top-[14.34px] h-[12.742px] w-[256.109px]">
                <p className="absolute left-[calc(50%-91.07px)] top-0 m-0 whitespace-nowrap text-[12.743px] font-bold leading-[12.743px] tracking-[2.676px] text-black">
                  对她很感兴趣，去联系她！
                </p>
              </div>
              <div className="pointer-events-none absolute left-[310.08px] top-[9.55px] size-[22.297px]">
                <img
                  src={imgNr1CtaArrow}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 block size-full max-w-none transition-[filter] duration-200 ease-out group-hover:invert"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>

            <img
              src={imgNr1Illustration}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute left-[74.35px] top-[593.61px] h-[159.28px] w-[285.65px] object-cover"
            />
          </div>

          <div className="absolute left-[597px] top-[25.61px] z-[3] h-[810px] w-[1080px] rounded-tl-[405px] rounded-bl-[405px] border-t border-b border-black bg-white" />
          <div
            className="group absolute left-[853.17px] top-[114.7px] z-[4] h-[631.83px] w-[637.14px] cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => router.push(`/projects/${current.slug}`)}
          >
          <p className="mb-[17.23px] text-[22px] font-bold tracking-[0.8px]">🧑‍🎓 近期设计的项目</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="rounded-[20px] bg-[#ddd]">
                <div className="h-[357.86px] overflow-hidden rounded-[20px] bg-[#ddd]">
                  <img
                    src={current.image}
                    alt=""
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-[357.86px] w-[637px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="mt-[29.73px]">
                <div className="flex items-start">
                  <p className="font-[family-name:var(--font-be-vietnam-pro)] text-[53.096px] font-bold leading-none">
                    {current.monthText}
                  </p>
                  <div className="ml-[8px] pt-[2.45px]">
                    <p className="font-[family-name:var(--font-be-vietnam-pro)] text-[18px] font-bold leading-[18px]">
                      {current.yearText}
                    </p>
                    <p className="mt-[3px] font-[family-name:var(--font-be-vietnam-pro)] text-[22px] font-bold uppercase leading-[23px]">
                      {current.yearLabel}
                    </p>
                  </div>
                  <div className="ml-[145px] flex w-[350px] items-start justify-between">
                    <div>
                      <p className="text-[12.743px] font-bold tracking-[0.6371px]">{current.title}</p>
                      <p className="mt-[8px] text-[12px] tracking-[2.0389px]">{current.tags}</p>
                    </div>
                    <p className="text-[12.743px] font-bold tracking-[0.6371px]">{current.system}</p>
                  </div>
                </div>

                <p className="mt-[16px] w-[638px] text-justify text-[16.991px] font-bold leading-[31.857px] tracking-[2px]">
                  {current.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-[17px] flex items-center justify-center gap-[27.6px]">
            {slides.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`切换到第 ${idx + 1} 个项目`}
                className={`h-[8.49px] w-[8.49px] rounded-full transition-colors ${
                  idx === currentIndex ? "bg-black" : "bg-[#aaa8a7]"
                }`}
              />
            ))}
          </div>
          </div>

          <button
            aria-label="上一项"
            onClick={prevSlide}
            className="absolute left-[741.09px] top-[382.25px] z-[5] flex h-[53.09px] w-[53.09px] items-center justify-center rounded-full border border-black bg-white transition-colors hover:bg-black hover:text-white"
          >
          <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" aria-hidden="true">
            <path
              d="M14.5 7L9.5 12L14.5 17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          </button>
          {/* 下一项：左缘距卡片右缘 = 右缘距画布右缘（1665），(1665-1490.17-53.09)/2 ≈ 60.87 */}
          <button
            aria-label="下一项"
            onClick={nextSlide}
            className="absolute left-[1551.04px] top-[382.25px] z-[5] flex h-[53.09px] w-[53.09px] items-center justify-center rounded-full border border-black bg-white transition-colors hover:bg-black hover:text-white"
          >
          <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" aria-hidden="true">
            <path
              d="M9.5 7L14.5 12L9.5 17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          </button>
        </div>
      </div>

    </section>
  );
}

