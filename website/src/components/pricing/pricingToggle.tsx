"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MobilePricing } from "./mobilePricing";
import { useState } from "react";

export default function PricingToggle() {
  const [isAnnual, setIsAnnual] = useState(false);
  const monthlyPrice = 29.00;
  const annualPricePerMonth = 19.00;

  return (
    <section className="w-full">
      {/* Mobile view */}
      <div className="block md:hidden">
        <MobilePricing />
      </div>
      {/* Desktop view */}
      <div className="hidden md:block mx-36 border-x border-1 border-[#ffffff14] px-16 lg:px-26 py-4">
        {/* Plan Toggle */}
        <div className="mx-auto mb-12 flex max-w-fit items-center gap-2 rounded-[10px] bg-[#2b2a2a] p-1 relative z-10 backdrop-blur-[22.3px] shadow-[0_4px_16px_rgba(0,0,0,0.3)] border border-[#ffffff08]">
          <Button
            onClick={() => setIsAnnual(false)}
            variant="ghost"
            className={`rounded-[8px] h-10 px-6 font-medium text-base
              ${
                !isAnnual
                  ? "bg-[#6e6e6e] hover:bg-[#6e6e6e] text-white"
                  : "text-zinc-400 hover:bg-[#6e6e6e]"
              }`}
          >
            Monthly Plan
          </Button>
          <Button
            onClick={() => setIsAnnual(true)}
            variant="ghost"
            className={`flex h-10 items-center font-medium gap-2 px-6 text-base rounded-[8px]
              ${
                isAnnual
                  ? "bg-[#6e6e6e] hover:bg-[#6e6e6e] text-white"
                  : "text-[#BABABA] hover:bg-[#6e6e6e]"
              }`}
          >
            Annual Plan
            <span className="rounded-full bg-[#0D512D] px-4 py-1 text-sm font-medium text-green-400">
              -35% OFF
            </span>
          </Button>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Starter Plan */}
          <Card className="relative border bg-[#171717] rounded-3xl rounded-3xl
">
            <CardHeader className="bg-[#1e1e1d] rounded-t-2xl m-1 p-4 sm:p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[250px]">
              <div>
                <CardTitle className="text-lg sm:text-xl text-white">
                  Starter
                </CardTitle>
                <CardDescription className="text-zinc-400 border-b border-dashed border-[hsla(0,0%,100%,0.08)] pb-4 text-sm sm:text-base">
                  Perfect for individual developers and small projects
                </CardDescription>
                <div className="mt-4 text-2xl sm:text-4xl font-bold text-white">
                  Free
                </div>
              </div>
              <Button
                className="w-full sm:w-auto rounded-lg h-[48px] md:h-[44px] transition-all duration-300 ease-out
                  bg-[rgba(255,255,255,0.02)]
                  hover:bg-[rgba(255,255,255,0.04)]
                  shadow-[inset_0px_-4px_24.4px_rgba(206,206,206,0.11),inset_0px_-3px_10.6px_1px_rgba(199,199,199,0.03)]"
                variant="gradient"
                size="lg"
                onClick={() => window.open('https://console.virenet.com/auth/sign-up', '_blank')}
              >
                Create Account
              </Button>
            </CardHeader>

            <CardContent>
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {[
                  '4 GB Ram / 2 vCPU per service',
                  '3x Service, 1x Postgres',
                  'Run Inference, APIs, Web Apps, Workers, and Databases',
                  '7-day log history',
                  'Zero Downtime Deploys',
                  'Unlimited Build Minutes',
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-zinc-400"
                  >
                    <Check className="h-5 w-5 text-zinc-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-0 bg-[#242323] rounded-3xl 
            bg-[linear-gradient(135deg,#F49D70_0%,#F49D70_0%,#242323_15%)] p-[0.5px]">
            <div className="bg-[#242323] rounded-3xl h-full border">
              <span className="absolute border border-[hsla(0,0%,100%,0.08)] top-4 right-6 rounded-full 
                bg-[rgba(255,255,255,0.14)] backdrop-blur-[2.65px] 
                px-2 sm:px-3 py-1 text-xs sm:text-sm text-white">
                Most Popular
              </span>
              <CardHeader className="bg-[rgba(255,255,255,0.04)] rounded-t-3xl m-1 p-4 sm:p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[250px] border border-[#FFFFFF14] ">
                <div>
                  <CardTitle className="text-lg sm:text-xl text-white">
                    Pro
                  </CardTitle>
                  <CardDescription className="text-tx-primary border-b border-[hsla(0,0%,100%,0.08)] border-dashed pb-4 text-sm sm:text-base">
                    Ideal for growing teams and scaling applications
                  </CardDescription>
                  <div className="mt-4 flex items-end gap-2">
                    {isAnnual ? (
                      <>
                        <span className="text-xl sm:text-3xl font-bold text-white">$19.00</span>
                        <span className="text-sm font-normal text-zinc-400">/month</span>
                        <span className="text-sm font-normal text-zinc-400">+ add'l usage</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xl sm:text-3xl font-bold text-white">$29.00</span>
                        <span className="text-sm font-normal text-zinc-400">/month</span>
                        <span className="text-sm font-normal text-zinc-400">+ add'l usage</span>
                      </>
                    )}
                  </div>
                </div>
                <Button
                  variant="default"
                  className="w-full sm:w-auto rounded-lg h-[48px] md:h-[44px] transition-all duration-300 ease-out bg-[#DB5F39] hover:bg-[#DB5F39]/90 border border-[rgba(233,233,233,0.08)] shadow-[inset_-2px_3px_8px_1px_rgba(255,255,255,0.24)]"
                  onClick={() => window.open('https://console.virenet.com/auth/sign-up', '_blank')}
                >
                  Start a free trial
                </Button>
              </CardHeader>
              <CardContent className="mt-6 sm:mt-8">
                <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  {[
                    'Unlimited vCPU & Memory',
                    'Unlimited Services, Jobs and Databases',
                    'Scale-to-Zero and Autoscaling',
                    'Unlimited team seats included',
                    'Observability & 90-day log history',
                    'Everything in Starter',
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-zinc-400"
                    >
                      <Check className="h-5 w-5 text-zinc-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative border bg-[#181818] rounded-3xl md:col-span-2 lg:col-span-1">
            <CardHeader className="bg-grey-600 rounded-t-3xl m-1 p-4 sm:p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[250px]">
              <div>
                <CardTitle className="text-lg sm:text-xl text-white">
                  Enterprise
                </CardTitle>
                <CardDescription className="text-zinc-400 border-b border-dashed border-[hsla(0,0%,100%,0.08)] pb-4 text-sm sm:text-base">
                  Enterprise-grade flexibility with customized resources and
                  support
                </CardDescription>
                <div className="mt-4 text-2xl sm:text-4xl font-bold text-white">
                  Contact us
                </div>
              </div>
              <Button
                className="w-full sm:w-auto rounded-lg h-[48px] md:h-[44px] transition-all duration-300 ease-out
                  bg-[rgba(255,255,255,0.02)]
                  hover:bg-[rgba(255,255,255,0.04)]
                  shadow-[inset_0px_-4px_24.4px_rgba(206,206,206,0.11),inset_0px_-3px_10.6px_1px_rgba(199,199,199,0.03)]"
                variant="gradient"
                size="lg"
                onClick={() => window.open('mailto:hello@virenet.com', '_blank')}
              >
                Contact us →
              </Button>
            </CardHeader>
            <CardContent className="mt-6 sm:mt-8">
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {[
                  'On-prem and bare-metal clusters',
                  'Custom SLA',
                  'SSO, RBAC, and Audit trail',
                  'Managed Network Rulesets',
                  'Advanced Support',
                  'Everything in Pro',
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-zinc-400"
                  >
                    <Check className="h-5 w-5 text-zinc-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
