import React from "react";
import FeatureCard from "../cards/FeatureCard";
import { TFeatureCardType } from "@/types";

function FeatureSection() {
  const fetaures = [
    {
      iconType: "card",
      title: "Customizable card",
      description:
        "Custom your own card for your exact incomes and expenses needs.",
    },
    {
      iconType: "coin",
      title: "No payment fee",
      description:
        "Transfer your payment all over the world with no payment fee.",
    },
    {
      iconType: "wallet",
      title: "All in one place",
      description:
        "The right place to keep your credit and debit cards, boarding passes & more.  ",
    },
  ];
  return (
    <div className="flex gap-large flex-col md:flex-row">
      {fetaures.map((feature) => (
        <div key={feature.iconType}>
          <FeatureCard
            iconType={feature.iconType as TFeatureCardType}
            title={feature.title}
            description={feature.description}
          />
        </div>
      ))}
    </div>
  );
}

export default FeatureSection;
