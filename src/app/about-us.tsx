"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

function ABOUTUS() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card
          color="transparent"
          shadow={false}
          className=""
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardBody
            className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="col-span-2 w-full">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                About Us
              </Typography>
              <Typography
                className="mb-1 w-full font-normal !text-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                The Covenant Parish is a parish belonging to The Redeemed
                Christian Church of God (RCCG), which is part of a global
                network of thousands of parishes. RCCG was established in
                Nigeria in 1952, starting as a small home group known as the
                Glory of God fellowship in Lagos, West Africa. The name later
                changed to The Redeemed Christian Church of God following a
                vision from the founder, Pa Akindayomi, despite his inability to
                read or write. With just nine members initially, the fellowship
                grew rapidly due to reports of miraculous occurrences. Pastor
                E.A. Adeboye succeeded Pa Akindayomi in 1980 and now serves as
                the General Overseer worldwide. Since 1981, RCCG has experienced
                significant growth with over 2000 parishes in Nigeria alone and
                a strong presence in various African countries such as Cote
                D'Ivoire, Ghana, and South Africa. Additionally, RCCG has
                expanded into Europe with established churches in countries like
                the United Kingdom, Spain, and France.
              </Typography>
              <Typography
                className="mb-1 w-full font-normal !text-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                The RCCG Covenant Parish was founded on May 10, 2010, with its
                first service held at Cindy's restaurant with around 20
                attendees. Over time, RCCG-HOD has seen a steady increase in
                membership necessitating several relocations before settling at
                the Riviera Plaza and Conference Centre NE in Calgary
                temporarily. The church is currently finalizing its new
                auditorium building project and plans to move into it by May
                2024 for further growth and expansion under God's guidance.
              </Typography>

              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  variant="circular"
                  src="/image/bible.svg"
                  alt="avatar"
                  size="md"
                  className="rounded-xl"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-0.5"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    2 Timothy 3:16 (NKJV)
                  </Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-0.5"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    John 14:26 (NKJV)
                  </Typography>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={568}
                height={568}
                src="/image/daddy.jpeg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ABOUTUS;
