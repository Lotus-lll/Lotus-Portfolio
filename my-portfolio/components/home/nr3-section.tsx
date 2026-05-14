"use client";

import { motion } from "framer-motion";
import { useDesktopScale } from "@/components/home/use-desktop-scale";

const img11 = "/home/nr3-experience-1-logo.png";
const imgLogo8X81 = "/home/nr3-experience-2-logo.png";
const imgImage144 = "/home/nr3-experience-3-logo.png";
const imgImage1 = "/home/nr3-bottom-deco-fig1.png"; // 用户图1：书籍与猫插画，工作经历区左下角
/** 原 Figma nr2「131:2」中间图，叠在工作经历区上方，不参与文档流 */
const imgExperienceOverlap = "/home/nr2-footer-deco-center.png";

type ExperienceItem = {
  icon: string;
  date: string;
  company: string;
  role: string;
  summary: string[];
};

const experiences: ExperienceItem[] = [
  {
    icon: img11,
    date: "2025.04-至今",
    company: "北京路客互联网科技有限公司",
    role: "UI/UX",
    summary: [
      "• 路客云PMS全平台重构(PC/App/小程序)：通过“三层信息过滤模型”重塑房态看板，核心路径缩短53%；建立颜色业务映射表，视觉降噪使误操作率降低 86%；跨端协同效率提升 2.5 倍。",
      "• 海外版PMS系统(从0-1)：采用“单页应用”策略集成预订、房态及账单流程，消除跳转导致的认知中断；设计触发提醒交互，实现任务自动化，大幅释放人工成本；打造实时库存看板规避超售风险；构建弹性布局完美适配英/日/泰多语言环境。",
      "• 适老化小程官网设计：主导“常相聚”小程序 “3 步极简下单” 逻辑，解决高龄用户交互障碍；负责官网与品牌小程序视觉升级，优化转化节点，利用 AIGC 技术实现视觉资产的高频产出。",
    ],
  },
  {
    icon: imgLogo8X81,
    date: "2022.03-2025.03",
    company: "广州小明网络科技有限公司",
    role: "UI/UX",
    summary: [
      "• 企业级SCRM系统建设：从0-1独立完成企业级SCRM系统B/C端全链路设计，精准把握企业与终端用户需求，完成从概念构思到视觉呈现的全流程设计，输出600+界面及400+bug文档，设计交付准时率100%。",
      "• 购药小程序升级：负责 saas 医药小程序的优化迭代及改版项目，通过深入的用户调研与数据分析，精准定位问题，对小程序界面进行全面升级，显著提升用户体验。",
      "• 助力医保电子支付设计：在支付宝电子医保合作活动设计中，承担关键的UI设计任务，同时主导运营上、线下拉新活动设计。通过「4步极简支付流程」设计，实现3日新增活跃用户1819人，占整体新增57%。",
    ],
  },
  {
    icon: imgImage144,
    date: "2019.03-2022.01",
    company: "广州酷顶网络科技有限公司",
    role: "UI/UX",
    summary: [
      "• 多元项目设计主导：全面负责广汽汇理运营活动 H5、马上探店小程序、智慧校园班牌界面、人脸识别测温界面、后台管理系统等多类型项目设计。",
      "• 全流程参与产品设计：深度参与产品从需求梳理到落地的全流程工作，积极协助梳理信息框架，对app、pc、后台、公众号、H5等不同终端与载体进行设计。",
      "• 高效推进项目进程：负责梳理产品逻辑，制定详细设计计划，有效推动设计进程，严格把控交付时间。深入研究目标用户需求、交互体验诉求与设计需求，建立后台管理系统组件库，统一业务线设计标准，开发还原度提升至95%。",
    ],
  },
];

type ExperienceRowProps = ExperienceItem & {
  /** 首条 logo 资源在框内更「满」，略缩以与下方条目观感一致 */
  logoContainTight?: boolean;
};

function ExperienceRow({ icon, date, company, role, summary, logoContainTight }: ExperienceRowProps) {
  const logoClass = logoContainTight
    ? "max-h-[38px] max-w-[82px] object-contain"
    : "max-h-[63px] max-w-[118px] object-contain";

  return (
    <article className="relative h-[353px] w-[1066.094px] border-t border-black pt-[29.73px] transition-colors duration-300 hover:bg-[#F8F6F4]">
      <div className="absolute left-[21.23px] top-[29.73px] h-[73.265625px] w-[129.546875px] overflow-hidden rounded-[10px] bg-[#eee]">
        <div className="flex h-full w-full items-center justify-center p-[4px]">
          <img src={icon} alt="" className={logoClass} />
        </div>
      </div>

      <div className="ml-[201.75px]">
        <div className="flex h-[16.992px] items-center gap-8 text-[14px] font-bold leading-[16.991px]">
          <span>{date}</span>
          <span>{company}</span>
          <span>{role}</span>
        </div>
        <div className="mt-[16px] w-[844px] text-[16.991px] leading-[32px] tracking-[2px] text-black">
          {summary.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Nr3Section() {
  const { desktopScale } = useDesktopScale();

  return (
    <section id="nr3" className="relative border-t border-black bg-white">
      <div
        className="desktop-scale-shell relative mx-auto w-full max-w-[1665px]"
        style={{ "--desktop-base-height": "1241px", height: `${1241 * desktopScale}px` } as any}
      >
        <div className="desktop-scale-canvas relative h-[1241px] w-[1665px]" style={{ transform: `scale(${desktopScale})` }}>
        <img
          src={imgExperienceOverlap}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-[347.875px] top-[-208px] z-30 h-[247.953125px] w-[368.4765625px] max-w-none object-cover"
        />
        <div className="absolute left-0 top-[106px] z-10 h-[1135px] w-[1665px]">
          <div className="absolute left-[95.57px] top-[0.19px] flex h-[38.164px] w-[298.391px] items-center border-b border-dashed border-black bg-white pb-[12.681px]">
            <p className="text-[20px] font-bold leading-[20.176px] tracking-[2px]">💼 工作经历</p>
          </div>

          <div className="absolute left-[503px] top-0 flex w-[1066px] flex-col gap-0">
            {experiences.map((item, index) => (
              <motion.div
                key={`${item.date}-${item.company}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.12 }}
              >
                <ExperienceRow {...item} logoContainTight={index === 0} />
              </motion.div>
            ))}
          </div>
        </div>

        <img
          src={imgImage1}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute left-[85.57px] top-[999.48px] h-[150.258px] w-[386.531px] object-contain"
        />
        </div>
      </div>
    </section>
  );
}

