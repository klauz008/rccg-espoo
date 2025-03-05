// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OurChurch from "./out-impressive-stats";
import CoursesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import Testimonial from "./testimonial";
import Events from "./events";
import { MembersFeedback } from "./members-feedback";
import TrustedCompany from "./trusted-companies";
import ABOUTUS from "./about-us";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurChurch />
      <CoursesCategories />
      {/* <ExploreCourses /> */}
      <Testimonial />
      <ABOUTUS />
      {/* <Events /> */}
      <MembersFeedback />
      {/* <TrustedCompany /> */}
      <Footer />
    </>
  );
}
