// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "./banner.css";
// import required modules
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

const Banner = () => {
  const arry = [
    {
      title: "car steering",
      description: `A steering system is composed of several components that work together to translate the driver's inputs into motion. The main parts include the steering wheel, which sends information to the rack and pinion gear assembly, tie-rod ends, ball joints, and a few other pieces.`,
      id: "1",
      images:
        "https://i.postimg.cc/G2dB464y/image-removebg-preview-1-prev-ui.png",
      banner:
        "https://i.postimg.cc/hjmL04fX/arseny-togulev-x-TXIAVRI3r-A-unsplash.jpg",
    },
    {
      title: "car suspension",
      description: `A car suspension system is a set of components that connect a vehicle's wheels to the rest of the car. Its sole purpose is keeping the car stable by absorbing all external forces exerted on the wheels due to undulations on the road, potholes, speed breakers, or other obstacles.`,
      id: "2",
      images: "https://i.postimg.cc/QCfG0Hkj/image-prev-ui.png",
      banner:
        "https://i.postimg.cc/Yqp7LM2R/kenny-eliason-ZSz1m4-JPDq-U-unsplash.jpg",
    },
    {
      title: "car oil filter",
      description: `The oil filter is also the most critical component of the lubrication system of the engine, which drains the oil from waste agents and impurities. These filters clean the oil to the vehicle engine. The most common oil filters in today's vehicles are a basic design. They are made in cylindrical steel body shape`,
      id: "3",
      images: "https://i.postimg.cc/wxGwcXD7/image-prev-ui-1.png",
      banner:
        "https://i.postimg.cc/Jz0WKxkB/florian-olivo-Y3e-Ghg-Fu7ns-unsplash.jpg",
    },
  ];
  return (
    <div className="h-[620px] min-h-[calc(100vh-60px)]">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={true}
        modules={[Navigation, EffectFade, Autoplay]}
        className="mySwiper"
      >
        {arry.map(({ title, images, id, description, banner }) => (
          <SwiperSlide key={id} className=" overflow-hidden">
            <div className="h-full w-full object-cover relative backdrop-blur-xl">
              <img
                src={banner}
                alt=""
                className="h-full w-full object-cover backdrop-blur-xl"
              />
              <div className="absolute max-w-[1290px] mx-auto  top-0 right-0 left-0 bottom-0 w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <div className=" text-gray-50 px-2 flex flex-col gap-2 justify-center items-center lg:items-start ">
                  <h1 className="text-4xl lg:text-5xl   font-semibold capitalize ">
                    {title}
                  </h1>
                  <p className=" leading-5 text-justify max-w-[700px]">
                    {description}
                  </p>
                  <button className=" capitalize  bg-rose-400 border-0 text-lg py-2 px-4 hover:bg-rose-500 transition-colors duration-500 rounded-md">
                    visit Details &rarr;
                  </button>
                </div>
                <img
                  className="!h-96 !w-auto drop-shadow-2xl "
                  src={images}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
