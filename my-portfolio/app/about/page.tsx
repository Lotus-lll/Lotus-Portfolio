import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { EditorialFooter, EditorialHeader } from "@/components/layout/editorial-chrome";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About the designer, design approach, and collaboration process.",
};

export default function AboutPage() {
  return (
    <>
      <EditorialHeader />
      <main className="bg-[#f4f4f2] text-neutral-950">

      <section className="border-y border-neutral-900">
        <div className="mx-auto w-full max-w-[1665px] px-5 py-12 md:px-10 md:py-16">
          <Reveal className="grid gap-8 border-b border-dashed border-neutral-700 pb-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold tracking-[0.2em]">🙋 ABOUT THE DESIGNER</p>
              <h1 className="mt-5 font-[family-name:var(--font-be-vietnam-pro)] text-5xl font-extrabold tracking-[0.02em] md:text-7xl">
                LOTUS
              </h1>
              <p className="mt-6 max-w-[760px] text-base leading-8 md:text-2xl md:leading-[2]">
                {siteConfig.about}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-neutral-900 bg-white">
              <Image
                src="/images/home/contact/company-card-01.png"
                alt="Designer visual"
                width={900}
                height={680}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <svg
              className="pointer-events-none absolute -right-8 -top-10 hidden h-[180px] w-[180px] text-neutral-700/60 md:block"
              viewBox="0 0 220 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="110" cy="110" r="35" stroke="currentColor" />
              <circle cx="110" cy="110" r="58" stroke="currentColor" />
              <circle cx="110" cy="110" r="81" stroke="currentColor" />
              <circle cx="110" cy="110" r="104" stroke="currentColor" />
            </svg>
            <Reveal className="rounded-2xl border border-neutral-900 bg-[#efede8] p-6">
              <h2 className="text-lg font-bold">Experience Focus</h2>
              <p className="mt-3 leading-8 text-neutral-800">
                SaaS, B2B tools, growth platform, and mobile product experiences.
              </p>
            </Reveal>
            <Reveal className="rounded-2xl border border-neutral-900 bg-[#efede8] p-6" delay={0.05}>
              <h2 className="text-lg font-bold">Typical Deliverables</h2>
              <p className="mt-3 leading-8 text-neutral-800">
                Information architecture, wireframes, high-fidelity UI, and design system specs.
              </p>
            </Reveal>
            <Reveal className="rounded-2xl border border-neutral-900 bg-[#efede8] p-6" delay={0.1}>
              <h2 className="text-lg font-bold">Collaboration</h2>
              <p className="mt-3 leading-8 text-neutral-800">
                Fast iteration with measurable goals and development-ready handoff.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <EditorialFooter />
      </main>
    </>
  );
}
