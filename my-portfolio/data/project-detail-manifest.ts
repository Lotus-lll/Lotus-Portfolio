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
      "enterprise-saas-dashboard-01.png",
      "enterprise-saas-dashboard-02.png",
      "enterprise-saas-dashboard-03.png",
      "enterprise-saas-dashboard-04.png",
      "enterprise-saas-dashboard-05.png",
      "enterprise-saas-dashboard-06.png",
      "enterprise-saas-dashboard-07.png",
      "enterprise-saas-dashboard-08.png",
      "enterprise-saas-dashboard-09.png",
      "enterprise-saas-dashboard-10.png",
      "enterprise-saas-dashboard-11.png",
      "enterprise-saas-dashboard-12.png",
      "enterprise-saas-dashboard-13.png",
      "enterprise-saas-dashboard-14.png",
    ]),
  },
  {
    slug: "marketing-campaign-crm",
    images: makeImages("marketing-campaign-crm", [
      "marketing-campaign-crm-1.png",
      "marketing-campaign-crm-2.png",
      "marketing-campaign-crm-3.png",
      "marketing-campaign-crm-4.png",
      "marketing-campaign-crm-5.png",
      "marketing-campaign-crm-6.png",
      "marketing-campaign-crm-7.png",
      "marketing-campaign-crm-8.png",
      "marketing-campaign-crm-9.png",
      "marketing-campaign-crm-10.png",
      "marketing-campaign-crm-11.png",
      "marketing-campaign-crm-12.png",
      "marketing-campaign-crm-13.png",
      "marketing-campaign-crm-14.png",
      "marketing-campaign-crm-15.png",
      "marketing-campaign-crm-16.png",
      "marketing-campaign-crm-17.png",
      "marketing-campaign-crm-18.png",
    ]),
  },
  {
    slug: "mobile-travel-app",
    images: makeImages("mobile-travel-app", [
      "mobile-travel-app-01.png",
      "mobile-travel-app-02.png",
      "mobile-travel-app-03.png",
      "mobile-travel-app-04.png",
      "mobile-travel-app-05.png",
      "mobile-travel-app-06.png",
      "mobile-travel-app-07.png",
      "mobile-travel-app-08.png",
      "mobile-travel-app-09.png",
      "mobile-travel-app-10.png",
      "mobile-travel-app-11.png",
      "mobile-travel-app-12.png",
      "mobile-travel-app-13.png",
      "mobile-travel-app-14.png",
    ]),
  },
  {
    slug: "finance-mobile-banking",
    images: makeImages("finance-mobile-banking", [
      "finance-mobile-banking-2.png",
      "finance-mobile-banking-3.png",
      "finance-mobile-banking-4.png",
      "finance-mobile-banking-5.png",
      "finance-mobile-banking-6.png",
      "finance-mobile-banking-7.png",
      "finance-mobile-banking-8.png",
      "finance-mobile-banking-9.png",
      "finance-mobile-banking-10.png",
      "finance-mobile-banking-11.png",
      "finance-mobile-banking-12.png",
      "finance-mobile-banking-13.png",
      "finance-mobile-banking-14.png",
    ]),
  },
  {
    slug: "ops-admin-platform",
    images: makeImages("ops-admin-platform", [
      "ops-admin-platform-1.png",
      "ops-admin-platform-2.png",
      "ops-admin-platform-3.png",
      "ops-admin-platform-4.png",
      "ops-admin-platform-5.png",
      "ops-admin-platform-6.png",
      "ops-admin-platform-7.png",
      "ops-admin-platform-8.png",
      "ops-admin-platform-9.png",
      "ops-admin-platform-10.png",
      "ops-admin-platform-11.png",
      "ops-admin-platform-12.png",
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
      "membership-service-platform-1.png",
      "membership-service-platform-2.png",
      "membership-service-platform-3.png",
      "membership-service-platform-4.png",
      "membership-service-platform-5.png",
      "membership-service-platform-6.png",
      "membership-service-platform-7.png",
      "membership-service-platform-8.png",
      "membership-service-platform-9.png",
      "membership-service-platform-10.png",
      "membership-service-platform-11.png",
      "membership-service-platform-12.png",
      "membership-service-platform-13.png",
    ]),
  },
  {
    slug: "smart-data-console",
    images: makeImages("smart-data-console", [
      "smart-data-console-1.png",
      "smart-data-console-2.png",
      "smart-data-console-3.png",
      "smart-data-console-4.png",
      "smart-data-console-5.png",
      "smart-data-console-6.png",
      "smart-data-console-7.png",
      "smart-data-console-8.png",
      "smart-data-console-9.png",
      "smart-data-console-10.png",
      "smart-data-console-11.png",
      "smart-data-console-12.png",
      "smart-data-console-13.png",
      "smart-data-console-14.png",
      "smart-data-console-15.png",
      "smart-data-console-16.png",
      "smart-data-console-17.png",
      "smart-data-console-18.png",
    ]),
  },
  {
    slug: "creator-tools-suite",
    images: makeImages("creator-tools-suite", [
      "creator-tools-suite-2.png",
      "creator-tools-suite-3.png",
      "creator-tools-suite-4.png",
      "creator-tools-suite-5.png",
      "creator-tools-suite-6.png",
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
      "h5-campaign-design-1.png",
      "h5-campaign-design-2.png",
      "h5-campaign-design-3.png",
      "h5-campaign-design-4.png",
      "h5-campaign-design-5.png",
    ]),
  },
  {
    slug: "aigc-output-design",
    images: makeImages("aigc-output-design", [
      "aigc-output-design-1.png",
      "aigc-output-design-2.png",
      "aigc-output-design-3.png",
    ]),
  },
];

export const projectDetailManifestBySlug = Object.fromEntries(
  projectDetailManifest.map((item) => [item.slug, item])
);

