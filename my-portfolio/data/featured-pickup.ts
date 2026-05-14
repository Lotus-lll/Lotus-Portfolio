import { projects } from "@/data/projects";

export type FeaturedPickupSlide = {
  slug: string;
  /** e.g. "04.03" */
  day: string;
  year: string;
  /** e.g. "Fri" */
  dayName: string;
  categoryLabel: string;
  author: string;
  tags: string[];
  /** Headline under tags */
  title: string;
  image: string;
  href: string;
};

const DAY_PATCHES: Array<{ day: string; dayName: string }> = [
  { day: "04.03", dayName: "Fri" },
  { day: "03.30", dayName: "Mon" },
  { day: "03.25", dayName: "Wed" },
  { day: "03.19", dayName: "Thu" },
  { day: "02.25", dayName: "Wed" },
];

/**
 * First 5 projects → buncomo-style pickup slides (content is portfolio, structure matches reference).
 */
export const featuredPickupSlides: FeaturedPickupSlide[] = projects
  .slice(0, 5)
  .map((p, i) => {
    const patch = DAY_PATCHES[i] ?? DAY_PATCHES[0];
    return {
      slug: p.slug,
      day: patch.day,
      year: p.year,
      dayName: patch.dayName,
      categoryLabel: "案例研究",
      author: "Lotus",
      tags: [
        `#${p.category}`,
        "#UI/UX",
        "#B端",
        "#产品设计",
      ],
      title: p.subtitle,
      image: p.coverImage,
      href: `/projects/${p.slug}`,
    };
  });
