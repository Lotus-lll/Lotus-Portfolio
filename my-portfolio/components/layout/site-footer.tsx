import Link from "next/link";
import { Container } from "@/components/common/container";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-5 text-xs text-neutral-600">
          <span>{siteConfig.phone}</span>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-neutral-900">
            {siteConfig.email}
          </a>
        </div>
        <div className="flex gap-5 text-xs text-neutral-600">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neutral-900">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
