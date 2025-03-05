"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  PuzzlePieceIcon,
  HeartIcon,
  UsersIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";
import Image from "next/image";

const CATEGORIES = [
  {
    img: "/image/generalworship.jpeg",
    icon: HeartIcon,
    title: "Vibrant Worship Services",
    desc: "Participate in uplifting services that inspire and foster fellowship in your spiritual journey.",
  },
  {
    img: "/image/fellowship.jpeg",
    icon: UsersIcon,
    title: "Welcoming Fellowship",
    desc: "Connect with fellow believers and build lasting friendships as you grow together.",
  },
  {
    img: "/image/community.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Community Ministries",
    desc: "Get involved in diverse ministries that provide opportunities for service and support.",
  },
  {
    img: "/image/handcross.avif",
    icon: BookOpenIcon,
    title: "Engaging Sermons",
    desc: "Access impactful sermons that deepen your understanding and enhance your faith.",
  },
  // {
  //   img: "/image/blogs/blog-13.png",
  //   icon: ,
  //   title: "Engaging Sermons",
  //   desc: "Access impactful sermons that deepen your understanding and enhance your faith.",
  // },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="my-3"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Empower Your Spiritual Journey Engage with Your Faith Join Our
          Community
        </Typography>
        <Typography
          variant="lead"
          className="!text-gray-500 lg:w-6/12"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          A diverse range of departments designed to equip you with the skills
          needed to flourish in the ever-evolving world of Christ.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody
            className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500 group hover:rotate-y-180"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {/* Front Side (Image) */}
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <Image
                width={1000}
                height={1000}
                src="/image/preaching.jpeg"
                alt=""
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            {/* Back Side (Text and Button) */}
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-900/75 rounded-xl backface-hidden transform rotate-y-180">
              <Typography
                color="white"
                className="text-sm font-bold opacity-50"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Hello,
              </Typography>
              <Typography
                variant="h4"
                className="mt-9"
                color="white"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
               Welcome to church
              </Typography>
              <Typography
                color="white"
                className="mt-4 mb-14 font-normal opacity-50"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Worshipping with us will be a great joy
              </Typography>
            </div>
          </CardBody>
        </Card>

        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;
