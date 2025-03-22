import { Flex } from "@chakra-ui/react";
import { PipeIcon } from "@plumbing/assets/icons/Pipe";
import AreasWeServe from "./AreasWeServe";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import OurOffers from "./OurOffers";
import OurServices from "./OurServices";
import OurWork from "./OurWork";
import RequestAppointment from "./RequestAppointment";
import WhyChooseUs from "./WhyChooseUs";
import WorkWithUs from "./WorkWithUs";

const Home = () => {
  return (
    <Flex flexDir={"column"}>
      <Hero />
      <WorkWithUs />
      <WhyChooseUs />
      <OurServices />
      <ContactUs />
      <OurWork />
      <OurOffers />
      <RequestAppointment />
      <AreasWeServe />
      <PipeIcon w={"full"} />
    </Flex>
  );
};

export default Home;
