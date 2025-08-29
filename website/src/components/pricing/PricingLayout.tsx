import Features from "../features";
import Metrics from "../metrics";
import Partners from "../partners";
import FAQSection from "./FAQSection";
import PricingMetrics from "./pricingMetrics";
import PricingTable from "./PricingTable";
import PricingToggle from "./pricingToggle";
import PricingHero from "./pricinHero";
import { MobilePricing } from "./mobilePricing";
import DeploymentHero from "../deployment-hero";
const PricingLayout = () => {
  return (
    <div className="bg-foreground">
      <PricingHero />
      <PricingToggle />
       <Partners />
      <PricingMetrics />
      <div className="hidden md:block">
        <PricingTable />
      </div>
      <FAQSection /> 
      <DeploymentHero />

    </div>
  );
};
export default PricingLayout;
