'use client'

import { Check } from 'lucide-react'
import { useState, memo } from 'react'
import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";


type PlanType = 'Starter' | 'Pro' | 'Enterprise'

interface Feature {
  name: string
  starter: boolean
  pro: boolean
  enterprise: boolean
}

const TableCheckmark = memo(function TableCheckmark() {
  return (
    <div className="border bg-[#1e1e1e] w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center">
      <Check className="h-4 w-4 md:h-5 md:w-5 mx-auto text-tx-primary" />
    </div>
  )
})

export function MobilePricing() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('Starter')
  const [isAnnual, setIsAnnual] = useState(false)

  const monthlyPrice = 99.9
  const annualDiscount = 0.9 // 10% discount
  const annualPriceTotal = monthlyPrice * 12 * annualDiscount
  const annualPricePerMonth = annualPriceTotal / 12

  const plans: PlanType[] = ['Starter', 'Pro', 'Enterprise']
  const featuresTable: Feature[] = [
    { name: "3 App", starter: true, pro: true, enterprise: true },
    { name: "Unlimited deployment", starter: true, pro: true, enterprise: true },
    { name: "1 DB", starter: true, pro: true, enterprise: true },
    { name: "1 Team Member", starter: true, pro: true, enterprise: true },
    { name: "730 minute build time", starter: true, pro: true, enterprise: true },
    { name: "Analytics & Monitoring", starter: true, pro: true, enterprise: true },
    { name: "Unlimited app", starter: false, pro: true, enterprise: true },
    { name: "Unlimited DB", starter: false, pro: true, enterprise: true },
    { name: "Unlimited build time", starter: false, pro: true, enterprise: true },
    { name: "10 team members", starter: false, pro: true, enterprise: true },
    { name: "Advanced observability", starter: false, pro: true, enterprise: true },
    { name: "Organization Management", starter: false, pro: false, enterprise: true },
    { name: "Regions", starter: false, pro: false, enterprise: true },
    { name: "Rollback as needed", starter: false, pro: false, enterprise: true },
    { name: "99.99% uptime SLA", starter: false, pro: false, enterprise: true },
    { name: "Team-Role Access Control", starter: false, pro: false, enterprise: true },
    { name: "24/7 support with SLA", starter: false, pro: false, enterprise: true },
  ];
  const features = {
    Starter: [
      '3 App',
      'unlimitad deployment',
      '1 db',
      '1 team member',
      '730 minute build time',
      'analytics & monitoring',
    ],
    Pro: [
      'unlimited app',
      'unlimited db',
      'Sunlimited build time',
      '10 team member',
      'advance observability',
    ],
    Enterprise: [
      'Organization Management',
      'Regions',
      'Rollback as needed',
      '99.99% uptime SLA',
      'Team-Role Access Control',
      '24+7 support with SLA',
    ]
  }

  const descriptions = {
    Starter: 'Perfect for individual developers and small projects',
    Pro: 'Ideal for growing teams and scaling applications',
    Enterprise: 'Enterprise-grade flexibility with customized resources and support'
  }

  const prices = {
    Starter: 'Free',
    Pro: isAnnual 
      ? `$${annualPricePerMonth.toFixed(2)}/mo (billed annually)`
      : `$${monthlyPrice.toFixed(2)}/month`,
    Enterprise: 'Contact us'
  }

  const buttons = {
    Starter: 'Create Account',
    Pro: 'Get Started',
    Enterprise: 'Contact us →'
  }

  const backgrounds = {
    Starter: 'bg-grey-600',
    Pro: 'bg-[#323232]',
    Enterprise: 'bg-grey-600'
  }

  return (
    <div className="flex flex-col w-full text-white min-h-screen md:hidden px-4 py-6 overflow-y-auto">
      {/* Add Plan Toggle before Plan Selector */}
      <div className="mx-auto mb-12 flex max-w-fit items-center gap-4 rounded-[10px] bg-[#2b2a2a] p-1 relative z-10">
        <Button
            onClick={() => setIsAnnual(false)}
            variant="ghost"
            className={`rounded-sm h-9 px-3 sm:px-6 font-medium text-xs sm:text-sm text-tx-primary hover:text-tx-primary
              ${
                !isAnnual
                  ? "bg-[#6e6e6e] hover:bg-[#6e6e6e]"
                  : "hover:bg-[#3b3a3a]"
              }`}
          >
            Monthly Plan
          </Button>
          <Button
            onClick={() => setIsAnnual(true)}
            variant="ghost"
            className={`flex h-9 items-center font-medium gap-1 sm:gap-2 px-3 sm:px-6 text-xs sm:text-sm text-app-import-text hover:text-app-import-text
              ${
                isAnnual
                  ? "bg-[#6e6e6e] hover:bg-[#6e6e6e]"
                  : "hover:bg-[#3b3a3a]"
              }`}
          >
            Annual Plan
            <span className="rounded bg-[#0D512D] rounded-full px-2 py-0.5 text-[10px] sm:text-xs text-green-300">
              -10% OFF
            </span>
          </Button>
        </div>

      {/* Plan Selector */}
      <div className="flex border-b border-zinc-800 sticky top-0 z-10">
        {plans.map(plan => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={cn(
              'flex-1 py-4 text-sm font-medium transition-colors cursor-pointer touch-manipulation',
              selectedPlan === plan 
                ? 'text-white border-b-2 border-white' 
                : 'text-zinc-500'
            )}
          >
            {plan}
          </button>
        ))}
      </div>

      {/* Selected Plan Card */}
      <div className="mt-6 pb-6">
        <Card className={cn("relative border rounded-3xl overflow-hidden", 
          selectedPlan === 'Pro' ? 'bg-[#242323]' : 'bg-[#181818]'
        )}>
          {selectedPlan === 'Pro' && (
            <div className="absolute top-0 right-4 translate-y-2 rounded-full bg-zinc-800/80 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white">
              Most Popular
            </div>
          )}
          <CardHeader className={cn(
            "rounded-t-3xl m-1 p-6 flex flex-col justify-between min-h-[250px]",
            backgrounds[selectedPlan]
          )}>
            <div>
              <CardTitle className="text-xl text-white">{selectedPlan}</CardTitle>
              <CardDescription className={cn(
                "text-zinc-400 border-b border-dashed pb-4 text-sm",
                selectedPlan === 'Pro' 
                  ? 'border-[hsla(0,0%,100%,0.08)]' 
                  : 'border-[hsla(0,0%,100%,0.08)]'
              )}>
                {descriptions[selectedPlan]}
              </CardDescription>
              <div className="mt-4 text-4xl font-bold text-white">{prices[selectedPlan]}</div>
            </div>
            <Button
              variant="default"
              className="w-full mt-4 bg-zinc-800 text-white hover:bg-zinc-700 text-sm"
            >
              {buttons[selectedPlan]}
            </Button>
          </CardHeader>

          <CardContent className="overflow-x-auto touch-pan-x">
            <ul className="mt-8 space-y-4">
              {features[selectedPlan].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-zinc-400"
                >
                  <Check className="h-5 w-5 text-white shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
           
          </CardContent>
        </Card>

        {/* Replace the table with mobile-friendly feature list */}
        <div className="mt-8 space-y-3">
          <h3 className="text-lg font-semibold mb-4">All Features</h3>
          {featuresTable.map((feature, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-[#181818] border-b border-zinc-800"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-300">{feature.name}</span>
                {(() => {
                  switch(selectedPlan) {
                    case 'Starter':
                      return feature.starter && <TableCheckmark />
                    case 'Pro':
                      return feature.pro && <TableCheckmark />
                    case 'Enterprise':
                      return feature.enterprise && <TableCheckmark />
                    default:
                      return null
                  }
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 