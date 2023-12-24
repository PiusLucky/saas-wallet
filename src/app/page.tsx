import NavBar from "@/components/common/NavBar";
import FeatureSection from "@/components/sections/FeatureSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import LetsTalkSection from "@/components/sections/LetsTalkSection";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WalletOverviewSection from "@/components/sections/WalletOverviewSection";

export default function Home() {
  return (
    <main className="bg-background px-4 md:px-[3.44rem]">
      <section className="pt-[1.56rem]">
        <NavBar />
      </section>
      <div className="md:mx-12 ">
        <HeroSection />
        <LogoGroupSection />
        <WalletOverviewSection />
        <FeatureSection />
        <TestimonialSection />
        <LetsTalkSection />
      </div>
      <FooterSection />
    </main>
  );
}
