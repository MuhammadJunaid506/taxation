// components/CustomBanner.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { image1, image2, image3 } from '@/assets/images';


const CustomBanner = ({ images }) => {
    console.log(images)
    const bannerImages = [
        image1, image2, image3
      ];
  return (
    <div className="w-full h-64 md:h-96">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* You can add overlay text or elements here */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomBanner;
