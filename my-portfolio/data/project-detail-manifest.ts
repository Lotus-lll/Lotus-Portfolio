export type ProjectDetailImage = {
  src: string;
  alt?: string;
};

export type ProjectDetailManifestItem = {
  slug: string;
  images: ProjectDetailImage[];
};

const localDetail = (slug: string, fileName: string) =>
  `/images/project-details/${slug}/${fileName}`;

const makeImages = (slug: string, files: string[]): ProjectDetailImage[] =>
  files.map((file, index) => ({
    src: localDetail(slug, file),
    alt: `${slug}-${index + 1}`,
  }));

export const projectDetailManifest: ProjectDetailManifestItem[] = [
  {
    slug: "enterprise-saas-dashboard",
    images: makeImages("enterprise-saas-dashboard", [
      "enterprise-saas-dashboard-01.webp",
      "enterprise-saas-dashboard-02.webp",
      "enterprise-saas-dashboard-03.webp",
      "enterprise-saas-dashboard-04.webp",
      "enterprise-saas-dashboard-05.webp",
      "enterprise-saas-dashboard-06.webp",
      "enterprise-saas-dashboard-07.webp",
      "enterprise-saas-dashboard-08.webp",
      "enterprise-saas-dashboard-09.webp",
      "enterprise-saas-dashboard-10.webp",
      "enterprise-saas-dashboard-11.webp",
      "enterprise-saas-dashboard-12.webp",
      "enterprise-saas-dashboard-13.webp",
      "enterprise-saas-dashboard-14.webp",
    ]),
  },
  {
    slug: "marketing-campaign-crm",
    images: makeImages("marketing-campaign-crm", [
      "marketing-campaign-crm-1.webp",
      "marketing-campaign-crm-2.webp",
      "marketing-campaign-crm-3.webp",
      "marketing-campaign-crm-4.webp",
      "marketing-campaign-crm-5.webp",
      "marketing-campaign-crm-6.webp",
      "marketing-campaign-crm-7.webp",
      "marketing-campaign-crm-8.webp",
      "marketing-campaign-crm-9.webp",
      "marketing-campaign-crm-10.webp",
      "marketing-campaign-crm-11.webp",
      "marketing-campaign-crm-12.webp",
      "marketing-campaign-crm-13.webp",
      "marketing-campaign-crm-14.webp",
      "marketing-campaign-crm-15.webp",
      "marketing-campaign-crm-16.webp",
      "marketing-campaign-crm-17.webp",
      "marketing-campaign-crm-18.webp",
    ]),
  },
  {
    slug: "mobile-travel-app",
    images: makeImages("mobile-travel-app", [
      "mobile-travel-app-01.webp",
      "mobile-travel-app-02.webp",
      "mobile-travel-app-03.webp",
      "mobile-travel-app-04.webp",
      "mobile-travel-app-05.webp",
      "mobile-travel-app-06.webp",
      "mobile-travel-app-07.webp",
      "mobile-travel-app-08.webp",
      "mobile-travel-app-09.webp",
      "mobile-travel-app-10.webp",
      "mobile-travel-app-11.webp",
      "mobile-travel-app-12.webp",
      "mobile-travel-app-13.webp",
      "mobile-travel-app-14.webp",
    ]),
  },
  {
    slug: "finance-mobile-banking",
    images: makeImages("finance-mobile-banking", [
      "finance-mobile-banking-2.webp",
      "finance-mobile-banking-3.webp",
      "finance-mobile-banking-4.webp",
      "finance-mobile-banking-5.webp",
      "finance-mobile-banking-6.webp",
      "finance-mobile-banking-7.webp",
      "finance-mobile-banking-8.webp",
      "finance-mobile-banking-9.webp",
      "finance-mobile-banking-10.webp",
      "finance-mobile-banking-11.webp",
      "finance-mobile-banking-12.webp",
      "finance-mobile-banking-13.webp",
      "finance-mobile-banking-14.webp",
    ]),
  },
  {
    slug: "ops-admin-platform",
    images: makeImages("ops-admin-platform", [
      "ops-admin-platform-1.webp",
      "ops-admin-platform-2.webp",
      "ops-admin-platform-3.webp",
      "ops-admin-platform-4.webp",
      "ops-admin-platform-5.webp",
      "ops-admin-platform-6.webp",
      "ops-admin-platform-7.webp",
      "ops-admin-platform-8.webp",
      "ops-admin-platform-9.webp",
      "ops-admin-platform-10.webp",
      "ops-admin-platform-11.webp",
      "ops-admin-platform-12.webp",
    ]),
  },
  {
    slug: "brand-growth-system",
    images: makeImages("brand-growth-system", [
      "brand-growth-system-1.jpg",
      "brand-growth-system-2.jpg",
      "brand-growth-system-3.jpg",
      "brand-growth-system-4.jpg",
      "brand-growth-system-5.jpg",
      "brand-growth-system-6.jpg",
      "brand-growth-system-7.jpg",
      "brand-growth-system-8.jpg",
      "brand-growth-system-9.jpg",
      "brand-growth-system-10.jpg",
    ]),
  },
  {
    slug: "membership-service-platform",
    images: makeImages("membership-service-platform", [
      "membership-service-platform-1.webp",
      "membership-service-platform-2.webp",
      "membership-service-platform-3.webp",
      "membership-service-platform-4.webp",
      "membership-service-platform-5.webp",
      "membership-service-platform-6.webp",
      "membership-service-platform-7.webp",
      "membership-service-platform-8.webp",
      "membership-service-platform-9.webp",
      "membership-service-platform-10.webp",
      "membership-service-platform-11.webp",
      "membership-service-platform-12.webp",
      "membership-service-platform-13.webp",
    ]),
  },
  {
    slug: "smart-data-console",
    images: makeImages("smart-data-console", [
      "smart-data-console-1.webp",
      "smart-data-console-2.webp",
      "smart-data-console-3.webp",
      "smart-data-console-4.webp",
      "smart-data-console-5.webp",
      "smart-data-console-6.webp",
      "smart-data-console-7.webp",
      "smart-data-console-8.webp",
      "smart-data-console-9.webp",
      "smart-data-console-10.webp",
      "smart-data-console-11.webp",
      "smart-data-console-12.webp",
      "smart-data-console-13.webp",
      "smart-data-console-14.webp",
      "smart-data-console-15.webp",
      "smart-data-console-16.webp",
      "smart-data-console-17.webp",
      "smart-data-console-18.webp",
    ]),
  },
  {
    slug: "creator-tools-suite",
    images: makeImages("creator-tools-suite", [
      "creator-tools-suite-2.webp",
      "creator-tools-suite-3.webp",
      "creator-tools-suite-4.webp",
      "creator-tools-suite-5.webp",
      "creator-tools-suite-6.webp",
    ]),
  },
  {
    slug: "leading-group-vi-design",
    images: makeImages("leading-group-vi-design", [
      "leading-group-vi-design-1.jpg",
      "leading-group-vi-design-2.jpg",
      "leading-group-vi-design-3.jpg",
      "leading-group-vi-design-4.jpg",
      "leading-group-vi-design-5.jpg",
      "leading-group-vi-design-6.jpg",
      "leading-group-vi-design-7.jpg",
      "leading-group-vi-design-8.jpg",
      "leading-group-vi-design-9.jpg",
      "leading-group-vi-design-10.jpg",
      "leading-group-vi-design-11.jpg",
      "leading-group-vi-design-12.jpg",
      "leading-group-vi-design-13.jpg",
      "leading-group-vi-design-14.jpg",
      "leading-group-vi-design-15.jpg",
      "leading-group-vi-design-16.jpg",
      "leading-group-vi-design-17.jpg",
      "leading-group-vi-design-18.jpg",
      "leading-group-vi-design-19.jpg",
      "leading-group-vi-design-20.jpg",
      "leading-group-vi-design-21.jpg",
    ]),
  },
  {
    slug: "h5-campaign-design",
    images: makeImages("h5-campaign-design", [
      "h5-campaign-design-1.webp",
      "h5-campaign-design-2.webp",
      "h5-campaign-design-3.webp",
      "h5-campaign-design-4.webp",
      "h5-campaign-design-5.webp",
    ]),
  },
  {
    slug: "aigc-output-design",
    images: makeImages("aigc-output-design", [
      "aigc-output-design-1.webp",
      "aigc-output-design-2.webp",
      "aigc-output-design-3.webp",
    ]),
  },
];

export const projectDetailManifestBySlug = Object.fromEntries(
  projectDetailManifest.map((item) => [item.slug, item])
);

