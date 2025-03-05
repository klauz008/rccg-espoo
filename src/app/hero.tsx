"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10 pb-10">
      <Image
        width={1200}
        height={1200}
        src="/image/pastor2.jpeg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center animate-pulse"
      />

      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card
            className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Welcome to RCCG Covenant Parish, Espoo
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 mt-6 !text-gray-900"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              "🙏 A place to belong, a family in Christ. Worship with us, grow
              in faith, and walk in the love of Christ. Come as you are—find
              hope, grace, and purpose. Together, we shine His light to the
              world."
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button
                color="gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                View meeting days
              </Button>
              <Button
                color="gray"
                variant="outlined"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Upcoming events
              </Button>
            </div>
            {/* <div className="py-8 grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/image/sword.svg"
                alt="sword"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/image/cross.svg"
                alt="cross"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/image/crown.svg"
                alt="crown"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-google.svg"
                alt="google"
              />
            </div> */}
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
