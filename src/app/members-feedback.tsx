"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";

const FEEDBACKS = [
  {
    feedback:
      "Being part of RCCG has enriched my life in ways I never imagined. The support and community have profoundly impacted my spiritual growth and connection with God.",
    client: "Gift Afolabi",
    title: "Mrs",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "I went from knowing nothing about web development to landing my dream job as a frontend developer.",
    client: "Emannuel Afolabi",
    title: "Mr",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "The courses are structured well, and the projects helped me build a strong portfolio.",
    client: "Sarah Thompson",
    title: "Mrs",
    img: "/image/avatar2.jpg",
  },
];

export function MembersFeedback() {
  return (
    <section className="px-8 py-18">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-2"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            What Our Members Are Sharing
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Transforming lives through faith and community at the place of Bethel!
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// export default MembersFeedback;
