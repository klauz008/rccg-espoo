"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { CarouselWithContent } from "@/components/carouselcontent";

export function OurChurch() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center pt-40">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-2 text-lg md:text-4xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Welcome to our church
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            We are so glad you’ve visited our church website! Whether you’re a
            long-time member or a first-time guest, we welcome you with open
            arms and hearts.
          </Typography>
        </div>
        <div className="">
          <CarouselWithContent
            message={
              "At RCCG Covenant Parish, we are a family united by faith, and our mission is to grow in God. Share His truth, and serve our community with compassion.We believe that church is not just a building—it’s a place where lives are transformed, relationships are built, and God’s presence is experienced. It’s our prayer that as you explore our site, you will find inspiration, encouragement, and opportunities to connect with us.We would love for you to join us for worship and get to know the amazing people who make up this wonderful congregation."
            }
          />
        </div>
      </div>
    </section>
  );
}
export default OurChurch;
