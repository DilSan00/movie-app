import HeroSection from "@/components/HeroSection/HeroSection";
import Categories from "@/components/Categories/Categories";
import Devices from "@/components/Devices/Devices";
import FAQs from "@/components/FAQs/FAQs";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <div style={{ display: "grid", gap: "120px" }}>
      <HeroSection />
      <Categories />
      <Devices />
      <FAQs />
      <Pricing />
    </div>
  );
}
