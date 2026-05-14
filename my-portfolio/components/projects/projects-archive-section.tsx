"use client";
import Link from "next/link";

const imgMockup21 = "/images/home/projects/project-01-cover.png";
const imgMockupRibbon3 = "/images/home/projects/project-02-cover.png";
const imgMockup2 = "/images/home/projects/project-03-cover.png";
const imgIPhone15Pro = "/images/home/projects/project-04-cover.png";
const imgContainer1 = "/images/home/projects/project-05-cover.png";
const imgAI011 = "/images/home/projects/project-06-cover.png";
const imgSingleStoreKing = "/images/home/projects/project-07-cover.png";
const imgMockup19 = "/images/home/projects/project-08-cover.png";
const imgMockupRibbon12 = "/images/home/projects/project-09-cover.png";
const imgViPage00011 = "/images/home/projects/project-08-cover.png";
const img441 = "/images/home/projects/project-09-cover.png";
const imgAigc011 = "/images/home/projects/project-aigc-cover-v2.png";
const imgEllipse1 = "/home/list-marker-dot.png";

const tags = [
  "#用户研究与用户画像",
  "#线框图和流程图",
  "#设计系统",
  "#可用性测试",
  "#高保真原型制作",
  "#品牌与视觉设计",
  "#AI Enhanced Design",
];

type CardData = {
  slug: string;
  date: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
};

const cards: CardData[] = [
  {
    slug: "enterprise-saas-dashboard",
    date: "2025.11—2026.03",
    tag: "酒店管理系统",
    title: "LOCALSBNB",
    desc: "#专为海外短租/民宿/度假租赁打造的AI驱动一站式物业管理 SaaS，以多渠道统一管理、全流程自动化、AI 收益优化为核心，帮助房东通过统-管理Airbnb、Booking.com、Trip.com、Vrbo、Agoda等平台。",
    img: imgMockupRibbon3,
  },
  {
    slug: "marketing-campaign-crm",
    date: "2025.12—2026.03",
    tag: "酒店管理系统",
    title: "路客云PMS",
    desc: "#一款为超过30万房东约100万的民宿、酒店、公寓、露营地和文旅项目进行赋能，提供智能化、自动化、个性化配置的PMS平台。以数据驱动、营销赋能帮助商家实现降本增效。",
    img: imgMockup21,
  },
  {
    slug: "mobile-travel-app",
    date: "2025.11—2026.03",
    tag: "中老年旅游小程序",
    title: "常相聚",
    desc: "#路客公司旗下的一款专注于服务退休人群的旅游社平台‌， 主要通过线上线下结合（OMO）的模式提供聚会、农家乐、订酒店等服务。‌‌",
    img: imgMockup2,
  },
  {
    slug: "finance-mobile-banking",
    date: "2025.10",
    tag: "日语学习软件",
    title: "简单日语",
    desc: "#一款适合已经学习了50音，有一定基础的日语系学生或者日语爱好者使用，提供一种更简单的方式来阅读文章和训练听力的日语学习APP。",
    img: imgIPhone15Pro,
  },
  {
    slug: "ops-admin-platform",
    date: "2025.08",
    tag: "AI资讯",
    title: "AI新智界",
    desc: "#AI 新智界专注于 AIGC、数字版权、元宇宙以及区块链等新技术领域的报道。AI 新智界联合多家同行共同发起成立中国 AIGC 产业联盟，致力于推动 AIGC 技术的应用，赋能千行百业。",
    img: imgContainer1,
  },
  {
    slug: "brand-growth-system",
    date: "2024.03",
    tag: "健康助手",
    title: "AI问诊",
    desc: "#AI智慧问诊APP利用大规模生成AI模型技术，服务每个人的AI健康助手，拟人化AI医生问诊和问答、有症状自查/药物查询/报告解读等。",
    img: imgAI011,
  },
  {
    slug: "membership-service-platform",
    date: "2024.03",
    tag: "购药小程序",
    title: "单店王",
    desc: "#单店王是一款基于O2O的医疗健康商城产品，为你打造专属品牌药店。打通生态协同平台，深度会员服务，便捷药品配送。",
    img: imgSingleStoreKing,
  },
  {
    slug: "smart-data-console",
    date: "2023.05",
    tag: "saas",
    title: "动销邦SCRM",
    desc: "#一款致基于企微对客户实现精细化营销，助力商家经营可持续增长，提高销售额和复购率。",
    img: imgMockup19,
  },
  {
    slug: "creator-tools-suite",
    date: "2022.08",
    tag: "家居官网",
    title: "劳德芬",
    desc: "#劳德芬官网是一个智能全屋定制的自适应官网，包含品牌介绍、全屋定制分类和工装设计灵感等。",
    img: imgMockupRibbon12,
  },
  {
    slug: "leading-group-vi-design",
    date: "2023.05",
    tag: "品牌与视觉设计",
    title: "领航集团VI",
    desc: "#一款为超过30万房东约100万的民宿、酒店、公寓、露营地和文旅项目进行赋能，提供智能化、自动化、个性化配置。",
    img: imgViPage00011,
  },
  {
    slug: "h5-campaign-design",
    date: "2020.06",
    tag: "运营设计",
    title: "H5活动设计",
    desc: "#一款为超过30万房东约100万的民宿、酒店、公寓、露营地和文旅项目进行赋能，提供智能化、自动化、个性化配置。",
    img: img441,
  },
  {
    slug: "aigc-output-design",
    date: "2025.12",
    tag: "AI提效方法",
    title: "AIGC助力产出",
    desc: "#将有版权的图片通过AI工具重构描述并重新生成，节省画面构思、找图和生图时间，提高描述词精准度。",
    img: imgAigc011,
  },
];

function ProjectArchiveCard({ card }: { card: CardData }) {
  return (
    <article className="group relative w-[413.405px]">
      <p className="absolute left-[8px] top-[12px] origin-top-left rotate-90 whitespace-nowrap text-[14px] leading-[14.867px] text-[#787672]">
        {card.date}
      </p>
      <div className="relative ml-[31.85px] h-[215.969px] w-[381.555px] overflow-hidden rounded-[20px]">
        <img
          src={card.img}
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
          <p className="text-[12.743px] font-bold tracking-[0.8495px]">{card.tag}</p>
        </div>
        <div className="absolute left-[42.24px] top-[63.91px] w-[284px]">
          <div className="inline-block">
            <h3 className="text-[20px] font-bold tracking-[2px]">{card.title}</h3>
            <span className="mt-[2px] block h-px w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
          </div>
        </div>
        <p className="absolute left-[41.57px] top-[105px] w-[286px] text-[12.743px] leading-[16.991px] tracking-[1.2743px] text-[#999691]">
          {card.desc}
        </p>
      </div>
    </article>
  );
}

function MobileArchiveCard({ card }: { card: CardData }) {
  return (
    <Link href={`/projects/${card.slug}`} className="block rounded-[18px] border border-black bg-[#f1ece5] p-3">
      <img src={card.img} alt="" loading="eager" decoding="async" className="h-[220px] w-full rounded-[14px] object-cover" />
      <div className="mt-3 flex items-center justify-between gap-2 text-xs text-neutral-600">
        <span>{card.date}</span>
        <span className="font-bold text-neutral-900">{card.tag}</span>
      </div>
      <h3 className="mt-2 text-[30px] font-bold leading-[1.1] tracking-[1px]">{card.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-neutral-700">{card.desc}</p>
    </Link>
  );
}

export function ProjectsArchiveSection() {
  const marquee = [...tags, ...tags, ...tags, ...tags];

  return (
    <section className="relative border-y border-black bg-[#f8f6f3]">
      <div className="relative hidden h-[2220px] w-full xl:block">
        <aside className="absolute left-0 top-0 z-40 h-[2219px] w-[96px] border-r border-black bg-white">
          <div className="flex h-full w-full items-start justify-center pt-[67px]">
            <p className="rotate-90 whitespace-nowrap text-[20px] font-bold tracking-[2px]">📁 设计项目</p>
          </div>
        </aside>

        <div className="absolute inset-x-0 top-0 z-30 h-[67.891px] overflow-hidden border-b border-[#d9d9d9]">
          <div className="nr2-marquee flex w-max items-center gap-[52px] pl-[106px] pt-[19px]">
            {marquee.map((item, idx) => (
              <span key={`${item}-${idx}`} className="whitespace-nowrap text-[24px] tracking-[2px]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 ml-[96px] h-[2220px] w-[calc(100%-96px)] bg-[#f8f6f3]">
          <div className="relative mx-auto h-[2220px] w-full max-w-[1569px]">
          <div className="absolute left-[100.67px] top-[172px] flex gap-[64px]">
            {cards.slice(0, 3).map((card) => (
              <Link key={`${card.slug}-${card.title}-${card.date}`} href={`/projects/${card.slug}`}>
                <ProjectArchiveCard card={card} />
              </Link>
            ))}
          </div>

          <div className="absolute left-[100.67px] top-[697px] flex gap-[64px]">
            {cards.slice(3, 6).map((card) => (
              <Link key={`${card.slug}-${card.title}-${card.date}`} href={`/projects/${card.slug}`}>
                <ProjectArchiveCard card={card} />
              </Link>
            ))}
          </div>

          <div className="absolute left-[100.67px] top-[1222.05px] flex gap-[64px]">
            {cards.slice(6, 9).map((card) => (
              <Link key={`${card.slug}-${card.title}-${card.date}`} href={`/projects/${card.slug}`}>
                <ProjectArchiveCard card={card} />
              </Link>
            ))}
          </div>

          <div className="absolute left-[100.67px] top-[1757.05px] flex gap-[64px]">
            {cards.slice(9, 12).map((card) => (
              <Link key={`${card.slug}-${card.title}-${card.date}`} href={`/projects/${card.slug}`}>
                <ProjectArchiveCard card={card} />
              </Link>
            ))}
          </div>

          <div className="absolute left-[100.67px] top-[636px] h-0 w-[1367.664px] border-b border-dashed border-black" />
          <div className="absolute left-[100.67px] top-[1161.05px] h-0 w-[1367.664px] border-b border-dashed border-black" />
          <div className="absolute left-[100.67px] top-[1696.05px] h-0 w-[1367.664px] border-b border-dashed border-black" />
          </div>
        </div>
      </div>

      <div className="py-8 xl:hidden">
        <div className="border-y border-black px-4 py-6">
          <div className="border-b border-dashed border-black pb-3">
            <p className="text-2xl font-bold tracking-[1px]">📁 设计项目</p>
          </div>

          <div className="mt-4 -mx-4 overflow-x-auto border-b border-[#d9d9d9] px-4 pb-3">
            <div className="flex w-max items-center gap-5">
              {tags.map((item) => (
                <span key={`mobile-project-tag-${item}`} className="whitespace-nowrap text-sm tracking-[1px]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {cards.map((card) => (
              <MobileArchiveCard key={`mobile-project-${card.slug}-${card.title}`} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

