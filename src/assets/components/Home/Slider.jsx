import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";




const Slider = () => {
const { t, i18n } = useTranslation();

const slides = [
  {
    image: '/images/Slider 1.jpeg',
    title: `${t('DonTitle')}`,
    description: `${t('DonDesc')}`,
    link: '/Donation',
    buttonText: `${t('DonBtn')}`
  },
  {
    image: '/images/Slider 2.jpeg',
    title: `${t('NewsTitle')}`,
    description: `${t('NewsDesc')}`,
    link: '/News',
    buttonText:`${t('NewsBtn')}`
  },
  {
    image: '/images/Slider 3.jpeg',
    title: `${t('AdhesionTitle')}`,
    description: `${t('AdhesionDesc')}`,
    link: '/Adhesion',
    buttonText: `${t('AdhesionBtn')}`
  }
];

  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-75 flex flex-col items-center justify-center p-4 text-white text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2 uppercase">{slide.title}</h2>
              <p className="text-xl md:text-2xl lg:text-3xl mt-4">{slide.description}</p>
              <Link to={slide.link}>
                <button className="px-6 py-3 bg-blue-500 dark:bg-teal-600 dark:hover:bg-teal-700 hover:bg-blue-700 font-extrabold rounded-lg text-white transition duration-200 ease-in-out mt-8">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
