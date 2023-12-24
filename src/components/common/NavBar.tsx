import React from "react";
import MainButton from "./MainButton";

function NavBar() {
  return (
    <header className="flex justify-between">
      <p className="text-white font-[600] text-[1.5rem]">Wallet</p>
      <div className="hidden md:flex gap-[1.86rem] items-center ">
        <p className="text-white text-[1.125]">Sign up</p>
        <MainButton
          text="Log in"
          classes="w-[10.9375rem] text-[#333] text-[1.125rem] rounded-normal"
          size="normal"
        />
      </div>
    </header>
  );
}

export default NavBar;
