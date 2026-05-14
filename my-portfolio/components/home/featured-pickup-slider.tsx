"use client";

import Image from "next/image";
import Link from "next/link";
import { Splide, SplideSlide, type Options } from "@splidejs/react-splide";
import { featuredPickupSlides } from "@/data/featured-pickup";
import styles from "./featured-pickup-slider.module.css";
import "@splidejs/splide/css";

const CAPTION_SVG_1 =
  "https://buncomo.jp/wp-content/themes/buncomo/assets/images/top/fv/txt__pickup-caption-1.svg?rev=20250827103659";
const CAPTION_SVG_2 =
  "https://buncomo.jp/wp-content/themes/buncomo/assets/images/top/fv/txt__pickup-caption-2.svg?rev=20250827103659";

export function FeaturedPickupSlider() {
  const options: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    focus: 0,
    speed: 790,
    interval: 5150,
    autoplay: true,
    pauseOnHover: true,
    resetProgress: true,
    gap: "3.75rem",
    pagination: true,
    arrows: true,
  };

  return (
    <div className={`${styles.pickup} top-fv__pickup`}>
      <div className={`${styles.inner} inner`}>
        <div className={styles.caption}>
          <span className={`${styles.emoji} emoji`}>📚</span>
          <div className="image-1">
            <Image
              src={CAPTION_SVG_1}
              width={202}
              height={17}
              alt="WEB MAGAZINE"
              unoptimized
              className={styles.captionImg}
            />
          </div>
          <div className="image-2">
            <Image
              src={CAPTION_SVG_2}
              width={75}
              height={14}
              alt="PICK UP"
              unoptimized
              className={styles.captionImg}
            />
          </div>
        </div>

        <Splide
          id="fv-pickup-slider"
          className={`${styles.splideWrap} splide slider`}
          options={options}
          hasTrack
          role="group"
          aria-label="WEB MAGAZINE PICK UP"
        >
          {featuredPickupSlides.map((slide, i) => (
            <SplideSlide
              key={slide.slug}
              className="splide__slide"
            >
              <Link
                href={slide.href}
                className={`c-magazine-pickup-item ${styles.cardLink}`}
                id={i === 0 ? "fv-pickup-slider-slide01" : `fv-pickup-slider-slide0${i + 1}`}
              >
                <div className="c-magazine-pickup-item__thumbnail">
                  <div className={styles.thumbnail}>
                    <Image
                      src={slide.image}
                      alt=""
                      width={640}
                      height={360}
                      unoptimized
                      className="h-full w-full object-cover"
                      sizes="(min-width: 1024px) 640px, 100vw"
                    />
                  </div>
                </div>
                <div className={`c-magazine-pickup-item__detail ${styles.detail}`}>
                  <div className="date">
                    <span className={`day ${styles.day}`}>{slide.day}</span>
                    <span className={`year ${styles.year}`}>{slide.year}</span>
                    <span className={`day-name ${styles.dayName}`}>{slide.dayName}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={`category ${styles.category} c-underline`}>
                      <span className="category__text c-underline__target">
                        {slide.categoryLabel}
                      </span>
                    </span>
                    <span className={`author-name ${styles.author} c-underline`}>
                      <span className="c-underline__target">{slide.author}</span>
                    </span>
                  </div>
                  <div className={`tags ${styles.tags}`}>
                    {slide.tags.map((t) => (
                      <span key={t} className="tags__text c-underline">
                        <span className="c-underline__target">{t}</span>
                      </span>
                    ))}
                  </div>
                  <div className={`title ${styles.titleBlock}`}>
                    <span className="title__inner">
                      <span className="c-underline__target left-to-right">{slide.title}</span>
                    </span>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>

      </div>
    </div>
  );
}
