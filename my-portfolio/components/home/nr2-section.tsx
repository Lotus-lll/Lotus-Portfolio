"use client";

import Link from "next/link";
import { projectArchiveCards } from "@/data/project-archive-cards";
import { useDesktopScale } from "@/components/home/use-desktop-scale";

/** Figma 131:2「Image」底栏装饰（107:12883 / 107:12884 / 107:12885） */
const imgNr2FooterRight = "/home/nr2-footer-deco-right.png";
const imgNr2FooterLeft = "/home/nr2-footer-deco-left.png";
const imgEllipse1 = "/home/list-marker-dot.png";
const imgVector2 = "/home/nr2-link-arrow.svg";

const tags = [
  "#用户研究与用户画像",
  "#线框图和流程图",
  "#设计系统",
  "#可用性测试",
  "#高保真原型制作",
  "#品牌与视觉设计",
  "#AI Enhanced Design",
];

const cards = projectArchiveCards.slice(3, 9);

function Card({
  date,
  tag,
  title,
  desc,
  img,
}: {
  date: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <article className="group relative w-[413.405px]">
      <p className="absolute left-[8px] top-[12px] origin-top-left rotate-90 whitespace-nowrap text-[14px] leading-[14.867px] text-[#787672]">
        {date}
      </p>
      <div className="relative ml-[31.85px] h-[215.969px] w-[381.555px] overflow-hidden rounded-[20px]">
        <img
          src={img}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="absolute left-[0.24px] top-[184.05px] h-[220px] w-[371px] rounded-[10px] border border-black bg-[#f1ece5]">
        <div className="absolute left-[42.24px] top-[32.92px] flex items-center gap-1">
          <img src={imgEllipse1} alt="" className="h-1 w-1" />
          <p className="text-[12.743px] font-bold tracking-[0.8495px]">{tag}</p>
        </div>
        <div className="absolute left-[42.24px] top-[63.91px] w-[284px]">
          <div className="inline-block">
            <h3 className="text-[20px] font-bold tracking-[2px]">{title}</h3>
            <span className="mt-[2px] block h-px w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
          </div>
        </div>
        <p className="absolute left-[41.57px] top-[105px] w-[286px] text-[12.743px] leading-[16.991px] tracking-[1.2743px] text-[#999691]">
          {desc}
        </p>
      </div>
    </article>
  );
}

export function Nr2Section() {
  const marquee = [...tags, ...tags, ...tags, ...tags];
  const { desktopScale, viewportWidth } = useDesktopScale();
  const canvasWidth = Math.max(1665, viewportWidth);

  return (
    <section id="nr2" className="relative border-t border-black bg-[#f8f6f3]">
      <div
        className="desktop-scale-shell relative w-full"
        style={{ "--desktop-base-height": "1464px", height: `${1464 * desktopScale}px` } as any}
      >
        <div
          className="desktop-scale-canvas relative h-[1464px]"
          style={{ width: `${canvasWidth}px`, transform: `scale(${desktopScale})` }}
        >
        <aside className="absolute left-0 top-0 z-40 h-[1464px] w-[96px] border-r border-black bg-white">
          <div className="flex h-full w-full items-start justify-center pt-[67px]">
            <p className="rotate-90 whitespace-nowrap text-[20px] font-bold tracking-[2px]">📁 设计项目</p>
          </div>
        </aside>

        <div className="absolute inset-x-0 top-0 z-30 h-[67.89px] overflow-hidden border-b border-[#d9d9d9]">
            <div className="nr2-marquee flex w-max items-center gap-[52px] pl-[106px] pt-[19px]">
              {marquee.map((item, i) => (
                <span key={`${item}-${i}`} className="whitespace-nowrap text-[24px] tracking-[2px]">
                  {item}
                </span>
              ))}
            </div>
          </div>

        <div className="absolute z-10 ml-[96px] h-[1459px] w-[calc(100%-96px)] bg-[#f8f6f3]">
          <div className="relative mx-auto h-full w-full max-w-[1569px]">
          <div className="absolute left-[100.67px] top-[172px] flex gap-[64px]">
            {cards.slice(0, 3).map((card) => (
              <Link key={`${card.slug}-${card.title}`} href={`/projects/${card.slug}`}>
                <Card {...card} />
              </Link>
            ))}
          </div>

          <div className="absolute left-[100.67px] top-[697.05px] flex gap-[64px]">
            {cards.slice(3, 6).map((card) => (
              <Link key={`${card.slug}-${card.title}`} href={`/projects/${card.slug}`}>
                <Card {...card} />
              </Link>
            ))}
          </div>

          <div className="absolute left-[100.67px] top-[636.05px] h-0 w-[1367.664px] border-b border-dashed border-black" />

          <div className="absolute left-[627.02px] top-[1161.07px]">
            <Link
              href="/projects"
              className="group flex h-[53.094px] w-[315.383px] items-center justify-center gap-6 rounded-[100px] border border-black bg-white text-[16px] font-bold tracking-[2px] transition hover:bg-black hover:text-white"
            >
              <span>查看更多</span>
              <img
                src={imgVector2}
                alt=""
                className="h-[7px] w-[15px] transition group-hover:brightness-0 group-hover:invert"
              />
            </Link>
          </div>

          {/* Figma 131:2「Image」——与稿一致：frame x/y/w/h；左右两图子层坐标（中间图在 nr3 叠层，此处不重复渲染） */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[0.4296875px] top-[1193.1953125px] h-[320.59375px] w-[1580.5703125px] max-w-none"
          >
            <div className="absolute left-[1325.1875px] top-0 h-[204.4140625px] w-[255.3828125px] overflow-hidden">
              <img
                src={imgNr2FooterRight}
                alt=""
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover"
              />
            </div>
            <div className="absolute left-0 top-[9.46875px] h-[157.15625px] w-[337.6875px] overflow-hidden">
              <img
                src={imgNr2FooterLeft}
                alt=""
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover"
              />
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}

