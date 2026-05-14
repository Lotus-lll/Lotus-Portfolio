"use client";

import { useDesktopScale } from "@/components/home/use-desktop-scale";

const imgQr = "/home/nr4-wechat-qr.png";
/** Figma 107:12911「Image」——微信二维码卡片右上角装饰 */
const imgTopDecor = "/home/nr4-wechat-top-figma-12911.png";
const imgEmail = "/home/nr4-email-illustration.png";

export function Nr4Section() {
  const { desktopScale } = useDesktopScale();

  return (
    <section id="nr4" className="relative bg-[#f8f6f3]">
      <div
        className="desktop-scale-shell relative mx-auto w-full max-w-[1665px]"
        style={{ "--desktop-base-height": "890px", height: `${890 * desktopScale}px` } as any}
      >
        <div className="desktop-scale-canvas relative h-[890px] w-[1665px]" style={{ transform: `scale(${desktopScale})` }}>
        <article className="absolute left-[96px] top-[120px] h-[650px] w-[700px] rounded-[30px] border border-black bg-white">
          <div className="absolute left-0 top-0 flex h-[53.094px] w-[254.82px] items-center gap-[20.172px] whitespace-nowrap rounded-br-[30px] rounded-tl-[30px] bg-black pl-[42.469px] pr-[71.148px]">
            <span className="text-[25.486px] leading-[25.486px]">☎️</span>
            <span className="text-[20px] font-bold leading-[20.176px] tracking-[2px] text-white">联系方式</span>
          </div>

          <div className="absolute left-[100px] top-[110px] w-[498px] text-center text-[26px] font-bold leading-[42.477px] tracking-[1.784px]">
            <p>TEL：153-6065-2781</p>
            <p className="mt-[22px] uppercase">email：2604301863@qq.com</p>
          </div>

          <div className="absolute left-[90px] top-[268px] w-[520px] border-b border-dashed border-black" />
          <img src={imgEmail} alt="" className="absolute left-[217px] top-[328px] h-[237px] w-[264px]" />
        </article>

        <article className="absolute left-[870px] top-[120px] h-[650px] w-[700px] rounded-[30px] border border-black bg-white">
          <div className="absolute left-0 top-0 flex h-[53.094px] w-[266.664px] items-center gap-[20.172px] whitespace-nowrap rounded-br-[30px] rounded-tl-[30px] bg-black pl-[42.469px] pr-[71.148px]">
            <span className="text-[25.486px] leading-[25.486px]">🌐</span>
            <span className="text-[20px] font-bold leading-[20.176px] tracking-[2px] text-white">微信二维码</span>
          </div>

          <div className="absolute left-[199px] top-[120px] h-[300px] w-[300px] rounded-[20px] border border-black bg-white p-[9.38px]">
            <img src={imgQr} alt="" className="h-[281.25px] w-[281.25px] object-cover" />
          </div>

          <div className="absolute left-[98.91px] top-[480px] flex h-[84.945px] w-[498.141px] items-center justify-center rounded-[100px] border border-black bg-white text-[25.486px] font-bold leading-[42.477px] tracking-[1.784px]">
            WeChat：llllian_n
          </div>
        </article>

        <img
          src={imgTopDecor}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute left-[1251.27px] top-[39.23px] h-[170.43px] w-[297.328px] object-cover"
        />
        </div>
      </div>
    </section>
  );
}

