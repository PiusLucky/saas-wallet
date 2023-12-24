"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import MainButton from "../common/MainButton";

function FooterSection() {
  return (
    <section className="w-full pb-[3.13rem]">
      <div className="w-full bg-grey h-[0.1rem]  mt-[6rem] mb-[3rem]"></div>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col">
          <p className="text-white font-[600] text-[1.5rem]">Wallet</p>
          <div className="gap-[1.88rem] text-white font-[600] text-[1.125rem]  hidden md:flex md:mt-8">
            <p>© Wallet 2022</p>
            <p>Privacy policy</p>
            <p>Cookies policy</p>
            <p>Terms of use</p>
          </div>
          <p className="text-white  text-normal mb-[0.94rem]  flex md:hidden">
            Updates right to your Inbox
          </p>
        </div>
        <div>
          <p className="text-white  text-normal mb-[0.94rem] hidden md:flex">
            Updates right to your Inbox
          </p>
          <div className="flex gap-[1.56rem] flex-col md:flex-row">
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-[#333] h-[3.125rem] rounded-normal border-none flex-grow text-white"
            />
            <div className="w-full">
              <MainButton
                text="Send"
                variant="primary"
                classes="text-[#333] text-[1.125rem] rounded-normal block md:hidden"
                size="normal"
                width="full_width"
              />{" "}
              <MainButton
                text="Send"
                variant="primary"
                classes="w-[10.9375rem] text-[#333] text-[1.125rem] rounded-normal hidden md:block"
                size="normal"
              />
            </div>
          </div>
          <div className="gap-[1.88rem] text-white font-[600] text-[1.125rem] mt-[2.5rem]  flex flex-col md:hidden">
            <p>Privacy policy</p>
            <p>Cookies policy</p>
            <p>Terms of use</p>

            <p>© Wallet 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
