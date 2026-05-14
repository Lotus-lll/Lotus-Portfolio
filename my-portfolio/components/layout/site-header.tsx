"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/common/container";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="space-y-0.5">
          <p className="text-sm font-semibold tracking-[0.18em] text-neutral-900">
            PORTFOLIO
          </p>
          <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500">
            {siteConfig.role}
          </p>
        </Link>

        <nav className="flex items-center gap-5 text-sm md:gap-8">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive
                    ? "font-medium text-neutral-950"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
