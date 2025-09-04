import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Local image imports (if you put them in /public, use /filename.png as src)
const partnerLogos = [
  { name: "Allstate", url: "/allstate.png" },
  { name: "Nationwide", url: "/nationwide.png" },
  { name: "Travelers", url: "/travelers.png" },
  { name: "Safeco", url: "/safeco.png" },
  { name: "Progressive", url: "/progressive.png" },
  { name: "Kemper", url: "/kemper.png" },
  { name: "Stillwater", url: "/stillwater.png" },
  { name: "BTIS", url: "/btis.png" },
  { name: "MetLife", url: "/metlife.png" },
  { name: "Bristol West", url: "/bristolwest.png" },
  { name: "Encompass", url: "/encompass.png" },
  { name: "National General", url: "/nationalgeneral.png" },
];

const Partners = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-bold mb-8">Your next big idea starts here</h3>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            className="py-6"
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {partnerLogos.map((partner, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-4 rounded-full flex justify-center items-center">
                  <img
                    src={partner.url}
                    alt={partner.name}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;