import { TFeatureCardType } from "@/types";
import React from "react";

interface IProps {
  iconType: TFeatureCardType;
  title: string;
  description: string;
}

function FeatureCard({ iconType, title, description }: IProps) {
  const imageRoute =
    iconType === "card"
      ? "/images/card-icon.png"
      : iconType === "coin"
      ? "/images/coin-icon.png"
      : "/images/purse-icon.png";
  return (
    <div className="flex justify-center flex-col items-center">
      <img src={imageRoute} alt="feature icon" />
      <p className="mt-[2rem] mb-[0.63rem] font-[600] text-normal text-white text-center">
        {title}
      </p>
      <p className="text-grey text-center">{description}</p>
    </div>
  );
}

export default FeatureCard;
