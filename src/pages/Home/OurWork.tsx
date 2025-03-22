import { Box, Container, Text } from "@chakra-ui/react";
import { workImages } from "@plumbing/assets/work-images";
import Fancybox from "@plumbing/components/Fancybox";
import LazyLoadImage from "@plumbing/components/Image/LazyLoadImage";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakPoints = {
  0: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1130: {
    slidesPerView: 4,
  },
};

type WorkImage = {
  image: string;
};

const ourWork: WorkImage[] = Object.keys(workImages).map((key) => ({
  image: workImages[key],
}));

const OurWork = () => {
  return (
    <Container id="our-work" maxW={"1440px"} py={"80px"}>
      <Text color={"#626262"} textAlign={"center"} textStyle={"caption"}>
        Our Work
      </Text>
      <Text
        textAlign={"center"}
        color={"primary.500"}
        mb={"10px"}
        textStyle={"heading"}
      >
        Let's check our recent projects
      </Text>
      <Box mt={"20px"}>
        <Fancybox
          options={{
            Carousel: {
              infinite: true,
            },
            dragToClose: true,
          }}
        >
          <Swiper
            slidesPerView={4}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // centerInsufficientSlides={true}
            loop
            speed={1500}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 1,
              depth: 100,
              modifier: 1,
              scale: 1,
            }}
            breakpoints={breakPoints}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {ourWork.map((work, index) => (
              <SwiperSlide className="swiper-slide-our-work" key={index}>
                <a data-fancybox="gallery" href={work.image}>
                  <LazyLoadImage
                    src={work.image}
                    alt={"Our Work"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    h={"full"}
                    aspectRatio={"auto"}
                    minH={{ base: "300px", sm: "450px", lg: "500px" }}
                    maxH={{ base: "300px", sm: "450px", lg: "500px" }}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fancybox>
      </Box>
    </Container>
  );
};

export default OurWork;
