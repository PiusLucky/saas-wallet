import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function TestimonialSection() {
  const totalStars = [1, 2, 3, 4, 5];
  return (
    <section className="bg-primary px-8 md:px-[5rem] py-[5.19rem] rounded-large mt-16">
      <div>
        <p className="font-[600] text-[1.5rem]">
          &apos;&apos;Wallet is a great product! All of my most important
          information is there - credit cards, transit cards, boarding passes,
          tickets, and more. And I don&apos;t need to worry because it&apos;s all in
          one place! thanks!&apos;&apos;
        </p>
      </div>
      <div className="flex gap-4 items-center gap-[1.25rem] mt-[3.13rem]">
        <Avatar className="rounded-full w-[5rem] h-[5rem]">
          <AvatarImage src={"/images/boy.png"} alt="testimonial user avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-[#2B2B2B] opacity-[0.4] pb-1">Johnny Owens</p>
          <div className="flex gap-5">
            {totalStars.map((star) => (
              <img src="/images/star-icon.svg" alt="star icon" key={star} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
