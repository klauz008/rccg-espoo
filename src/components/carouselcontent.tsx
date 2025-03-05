import { Carousel, Typography } from "@material-tailwind/react";

interface CarouselProps {
  message: string;
}

export function CarouselWithContent({ message }: CarouselProps) {
  return (
    <Carousel
      autoplay
      loop
      autoplayDelay={10000}
      className="rounded-xl"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="relative h-full w-full">
        <img
          src="/image/leadership.jpeg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-3/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 leading-7 text-base md:text-lg lg:text-xl text-gray-400"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {message}
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/image/leaders.jpeg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-3/4 ">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 leading-7 text-base md:text-lg lg:text-xl text-gray-400"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {message}
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
