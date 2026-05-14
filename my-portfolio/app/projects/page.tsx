import type { Metadata } from "next";
import Link from "next/link";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Nr4Section } from "@/components/home/nr4-section";
import { Nr5Section } from "@/components/home/nr5-section";
import { ProjectsArchiveSection } from "@/components/projects/projects-archive-section";
import { EditorialFooter, EditorialHeader } from "@/components/layout/editorial-chrome";

export const metadata: Metadata = {
  title: "Projects",
  description: "A curated list of UI/UX case studies and product design projects.",
};

export default function ProjectsPage() {
  /** Figma「项目页-nr1」107:12957 内右侧图 107:12965「Image」 */
  const imgProjectsHeader = "/projects/projects-page-header-thumb-107-12965.png";

  return (
    <>
      <EditorialHeader />
      <main className="overflow-x-hidden bg-[#f8f6f3] text-neutral-950">

      <section className="border-b border-black">
        <div className="mx-auto flex h-[55.203px] w-full max-w-[1665px] items-end justify-between px-4 pb-[14px] md:px-[53.094px] md:pb-[19px]">
          <Link
            href="/"
            className="inline-block text-sm font-semibold tracking-[0.08em] transition hover:translate-x-1"
          >
            ←返回上一页
          </Link>
          <nav className="hidden items-start gap-[42px] text-[16px] font-bold leading-[16.991px] uppercase xl:flex">
            <Link href="/">🏠 首页</Link>
            <Link href="/projects">📁 设计项目</Link>
            <Link href="/#nr3">💼 工作经历</Link>
            <Link href="/#nr4">☎️ 联系我</Link>
          </nav>
          <nav className="flex items-center gap-4 text-xs font-bold xl:hidden">
            <Link href="/">🏠 首页</Link>
            <Link href="/#nr4">☎️ 联系</Link>
          </nav>
        </div>
      </section>

      <section className="relative border-b border-[#d9d9d9]">
        <div className="mx-auto w-full max-w-[1665px] px-4 py-8 xl:h-[199.695px] xl:px-[53.094px] xl:py-0">
          <div className="flex items-center justify-between xl:h-full">
            <div>
              <h1 className="text-[34px] font-bold leading-[1.1] tracking-[2px] xl:text-[54px] xl:leading-[53.096px] xl:tracking-[5.3096px]">📁 设计项目</h1>
              <p className="mt-3 text-sm leading-7 tracking-[1px] xl:mt-[20.172px] xl:text-[19.114px] xl:leading-[38.229px] xl:tracking-[1.5292px]">
                SAAS · APP · PMS · WEB · H5
              </p>
            </div>
            <img
              src={imgProjectsHeader}
              alt=""
              className="hidden h-[151.969px] w-[263.352px] object-cover xl:block"
            />
          </div>
        </div>
      </section>

      <ProjectsArchiveSection />
      <RevealOnScroll delay={0.08}>
        <Nr4Section />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <Nr5Section />
      </RevealOnScroll>

      <EditorialFooter />
      </main>
    </>
  );
}
