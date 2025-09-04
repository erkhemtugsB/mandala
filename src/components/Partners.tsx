import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Local image imports (if you put them in /public, use /filename.png as src)
const partnerLogos = [
  { name: "Allstate", url: "https://www.allstate.com/resources/Allstate/images/lp/allstateagent/allstate-logo.png" },
  { name: "Nationwide", url: "https://www.annuity.org/wp-content/uploads/logo-nationwide.png" },
  { name: "Travelers", url: "https://thecibgroup.com/wp-content/uploads/2017/06/Travelers-Insurance-Logo-e1503062993451.png" },
  { name: "Safeco", url: "https://www.answerfinancial.com/ContentResponsive/Assets/images/partners/partners-page/safeco.png" },
  { name: "Progressive", url: "https://www.jordanharbinger.com/wp-content/uploads/2021/08/progressive-insurance-350x250.png" },
  { name: "Kemper", url: "https://www.milestonepnc.com/wp-content/uploads/2017/03/Kemper-Auto-Logo-1024x535.jpg" },
  { name: "Stillwater", url: "https://nsure.com/wp-content/uploads/2021/05/stillwater-e1622817887178.png" },
  { name: "BTIS", url: "https://cdn-res.keymedia.com/cms/images/us/003/0271_637527486766083818.png" },
  { name: "MetLife", url: "https://oc-ins.com/wp-content/uploads/metlife_eng_logo_rgb.png" },
  { name: "Bristol West", url: "https://cdn.cookielaw.org/logos/6f9548c9-3a87-4370-a23c-df4855d9b84c/018ef86c-ab32-75e2-9f03-74433091e063/0f308698-a8de-4609-a8b3-0bdacaec0388/BristolWest.png" },
  { name: "Encompass", url: "https://www.nerdwallet.com/cdn-cgi/image/quality=85/cdn/insurance/logos/encompass.png" },
  { name: "National General", url: "https://cdn.thezebra.com/zfront/media/production/carrier-logos/National_General.png" },
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