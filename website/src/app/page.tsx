import Header from "@/components/header";
import Hero from "@/components/hero";
import FeatureShowcase from "@/components/feature-showcase";
import Partners from "@/components/partners";
import Metrics from "@/components/metrics";
import Features from "@/components/features";
import Frameworks from "@/components/frameworks";
import CoreFeatures from "@/components/core-features";
import Testimonials from "@/components/testimonials";
import Blogs from "@/components/blogs";
import DeploymentHero from "@/components/deployment-hero";
import Footer from "@/components/footer";
import Integrations from "@/components/Integrations";
import BlogHero from "@/components/blog/blogDetailHero";
import BlogHomePageLayout from "@/components/blog/blogHomePageLayout";

export default function Home() {
  return (
    <div className="min-h-screen bg-foreground">
      <Hero />
      <FeatureShowcase />
      <Partners />
      <Metrics />
      <Features />
      <Frameworks />
      <CoreFeatures />
      <Integrations/>
      <Testimonials /> 
      <BlogHomePageLayout/>
      <DeploymentHero />
    </div>
  );
}
