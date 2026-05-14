import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialFooter, EditorialHeader } from "@/components/layout/editorial-chrome";
import { BackToTopButton } from "@/components/projects/back-to-top-button";
import { projectDetailHeaderBySlug } from "@/data/project-detail-header";
import { projectDetailTitleBySlug } from "@/data/project-detail-title";
import { projectDetailManifestBySlug } from "@/data/project-detail-manifest";
import { projects } from "@/data/projects";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.title,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const detailManifest = projectDetailManifestBySlug[slug];

  if (!project) {
    notFound();
  }

  const detailImages =
    detailManifest?.images && detailManifest.images.length > 0
      ? detailManifest.images
      : project.gallery.map((src, index) => ({
          src,
          alt: `${project.title}-fallback-${index + 1}`,
        }));
  const detailPageTitle = projectDetailTitleBySlug[slug] ?? project.title;
  const titleLabel = `📁 ${detailPageTitle}`;
  const detailHeaderLine = projectDetailHeaderBySlug[slug] ?? "SAAS · APP · PMS · PC";

  return (
    <>
      <EditorialHeader />
      <main className="overflow-x-hidden bg-[#f8f6f3] text-neutral-950">

      <section className="border-b border-black">
        <div className="mx-auto flex h-[55.203px] w-full max-w-[1665px] items-end justify-between px-4 pb-[14px] md:px-[53.094px] md:pb-[19px]">
          <Link
            href="/projects"
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

      <section className="relative border-b border-black bg-[#f8f6f3]">
        <div className="mx-auto w-full max-w-[1665px] px-4 py-8 xl:h-[199.695px] xl:px-[53.094px] xl:py-0">
          <div className="flex items-center justify-between xl:h-full">
            <div>
              <h1 className="text-[32px] font-bold leading-[1.1] tracking-[1.5px] xl:text-[54px] xl:leading-[53.096px] xl:tracking-[5.3096px]">
                {titleLabel}
              </h1>
              <p className="mt-3 text-sm leading-7 tracking-[1px] xl:mt-[20.172px] xl:text-[19.114px] xl:leading-[38.229px] xl:tracking-[1.5292px]">
                {detailHeaderLine}
              </p>
            </div>
            {/* Figma「项目名称」116:15075 内右侧图 116:15125「Image」248×183 */}
            <img
              src="/projects/detail-header-thumb-116-15125.png"
              alt=""
              className="hidden h-[183px] w-[248px] object-cover xl:block"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-900">
        <div className="mx-auto w-full max-w-[1472px] px-3 pb-[80px] pt-[24px] xl:px-0 xl:pb-[120px] xl:pt-[40px]">
          <div>
            {detailImages.map((image, index) => (
              <div key={`${project.slug}-${image.src}-${index}`}>
                <Image
                  src={image.src}
                  alt={image.alt ?? `${project.title}-${index + 1}`}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 1472px) 100vw, 1472px"
                  priority={index === 0}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackToTopButton />

      <EditorialFooter />
      </main>
    </>
  );
}
