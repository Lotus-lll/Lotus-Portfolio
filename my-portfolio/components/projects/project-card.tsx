import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(20,20,20,0.08)]">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="space-y-2 p-4 md:p-5">
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="text-lg font-medium text-neutral-900">{project.title}</h3>
          <p className="text-sm text-neutral-600">{project.subtitle}</p>
        </div>
      </Link>
    </article>
  );
}
