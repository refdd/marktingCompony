import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import partnerImage1 from "../public/assets/partner1.png";
import partnerImage2 from "../public/assets/partner2.png";
import partnerImage3 from "../public/assets/partner3.png";
import partnerImage4 from "../public/assets/partner4.png";
import partnerImage5 from "../public/assets/partner5.png";
import partnerImage6 from "../public/assets/partner5.png";
import partnerImage7 from "../public/assets/partner6.png";

function Partners() {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="container mx-auto px-4  py-10 md:py-20">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <Image
                src={partnerImage1}
                width={298}
                height={120}
                alt="partners"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                src={partnerImage2}
                width={298}
                height={120}
                alt="partners"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                src={partnerImage3}
                width={298}
                height={120}
                alt="partners"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                src={partnerImage4}
                width={298}
                height={120}
                alt="partners"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                src={partnerImage5}
                width={298}
                height={120}
                alt="partners"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                src={partnerImage6}
                width={298}
                height={120}
                alt="partners"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                src={partnerImage7}
                width={298}
                height={120}
                alt="partners"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                src={partnerImage1}
                width={298}
                height={120}
                alt="partners"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                src={partnerImage3}
                width={298}
                height={120}
                alt="partners"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;
