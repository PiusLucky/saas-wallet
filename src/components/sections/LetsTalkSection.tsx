import React from "react";
import MainLayoutCard from "../cards/MainLayoutCard";

function Header() {
  return (
    <div>
      Questions?
      <br /> Let&apos;s talk
    </div>
  );
}

function LetsTalkSection() {
  return (
    <MainLayoutCard
      title={Header}
      description="Contact us through our 24/7 live chat. We're always happy to help!"
      rightSideImageUrl="/images/wallet.gif"
    />
  );
}

export default LetsTalkSection;
