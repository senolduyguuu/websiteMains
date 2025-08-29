import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const features = [
  // CORE PLATFORM
  {
    name: "Compute Allocation",
    description: "Defines CPU & RAM for your services per tier.",
    details:
      "Starter: 4 GB RAM / 2 vCPU per service\nPro: Unlimited vCPU & Memory\nEnterprise: Custom / Dedicated vCPU & Memory",
    starter: true,
    pro: true,
    enterprise: true,
    category: "CORE PLATFORM",
  },
  {
    name: "Projects/Apps",
    description: "Organize your deployments into logical groups.",
    details: "Starter: Up to 3 Services\nPro: Unlimited\nEnterprise: Unlimited",
    starter: true,
    pro: true,
    enterprise: true,
    category: "CORE PLATFORM",
  },
  {
    name: "Git Integration",
    description: "Connect your repositories for seamless code deployment.",
    // details: "Support for GitHub, GitLab, Bitbucket",
    starter: true,
    pro: true,
    enterprise: true,
    category: "CORE PLATFORM",
  },
  {
    name: "Automated CI/CD (Build & Deploy on Push)",
    description: "Automatically build and deploy upon code changes.",
    // details: "Starter: Basic pipeline\nPro: Advanced pipeline\nEnterprise: Custom pipeline options",
    starter: true,
    pro: true,
    enterprise: true,
    category: "CORE PLATFORM",
  },
  {
    name: "Buildpack & Dockerfile Support",
    description: "Flexible build options for various application types.",
    starter: true,
    pro: true,
    enterprise: true,
    category: "CORE PLATFORM",
  },
  {
    name: "CLI / API Access",
    description: "Manage your platform programmatically or via terminal.",
    details:
      "\nPro: (with higher rate limits)\nEnterprise: (with premium rate limits/dedicated endpoints)",
    starter: true,
    pro: true,
    enterprise: true,
    category: "CORE PLATFORM",
  },
  {
    name: "Environments",
    description: "Isolate different stages of your application lifecycle.",
    details:
      "Starter: 1 Preview / 1 Production\nPro: Multiple Preview / Production\nEnterprise: Custom, isolated environments",
    starter: true,
    pro: true,
    enterprise: true,
    category: "CORE PLATFORM",
  },
  {
    name: "Team Members",
    description: "Collaborate with your team on the platform.",
    details:
      "Starter: 3 seats\nPro: Unlimited team seats\nEnterprise: Unlimited (with advanced org structures)",
    starter: true,
    pro: true,
    enterprise: true,
    category: "CORE PLATFORM",
  },
  {
    name: "Role-Based Access Control",
    description: "Control user permissions for secure access.",
    details:
      "Starter: -\nPro: Basic RBAC\nEnterprise: Advanced RBAC (Custom roles, granular permissions)",
    starter: false,
    pro: true,
    enterprise: true,
    category: "CORE PLATFORM",
  },
  // DEPLOYMENT & HOSTING
  {
    name: "Supported Workloads",
    description: "Run diverse applications, from APIs to databases.",
    details:
      "Starter: Inference, APIs, Web Apps, Workers, Databases\nPro: All Starter workloads + more complex applications\nEnterprise: All Pro workloads + mission-critical systems",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Serverless Functions",
    description: "Execute code on-demand without managing servers.",
    details:
      "Starter: Included (e.g., 50k invokes/mo, basic memory/duration)\nPro: Included (e.g., 1M invokes/mo, higher limits)\nEnterprise:  Custom (high volume, extended execution)",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Background Workers / Cron Jobs",
    description: "Run scheduled tasks or long-running processes.",
    details:
      "Starter: Up to 3 (shared compute)\nPro: Unlimited (scalable workers)\nEnterprise: Unlimited (priority queuing, dedicated workers optional)",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Managed Databases",
    description: "Effortlessly provision and manage your databases.",
    details:
      "Starter:  1x Postgres (basic tier, limited storage/connections)\nPro: Unlimited (various types like Postgres, MySQL, Redis with standard tiers, backups)\nEnterprise: Unlimited (HA configurations, read replicas, forks, custom types)",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Horizontal Scaling",
    description: "Adjust instance count to meet demand dynamically.",
    starter: false,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Autoscaling",
    description: "Automatically scale resources based on traffic/load.",
    starter: false,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Scale-to-Zero",
    description: "Reduce costs by scaling idle services to zero.",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Zero Downtime Deploys",
    description: "Update applications without interrupting users.",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Custom Domains",
    description: "Use your own branded domain names for services.",
    details: "Starter: -\nPro: Up to 10 per app\nEnterprise: Unlimited",
    starter: false,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Automatic HTTPS/TLS",
    description: "Secure your applications with free SSL/TLS certs.",
    details:
      "Starter: \nPro: \nEnterprise: with support for custom certs, managed certs)",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Global Edge Network / CDN",
    description: "Deliver content faster with a worldwide network.",
    details:
      "Starter: Basic\nPro: Standard\nEnterprise:  Premium (more PoPs, WAF at Edge)",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Included Bandwidth (per month, outbound)",
    description: "Data transfer allocation for your applications.",
    details: "Starter: 50 GB\nPro: 1 TB\nEnterprise: Custom / High Volume",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "Included Storage",
    description: "Persistent storage for your project files.",
    details: "Starter: 1 GB\nPro: 50 GB\nEnterprise: Custom / High Volume",
    starter: true,
    pro: true,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  {
    name: "On-prem and Bare-metal Cluster Deployment",
    description: "Deploy on your own infrastructure for full control.",
    starter: false,
    pro: false,
    enterprise: true,
    category: "DEPLOYMENT & HOSTING",
  },
  // BUILD & PERFORMANCE
  {
    name: "Build Minutes",
    description: "Time allocated for compiling your applications.",
    details:
      "Starter: Unlimited\nPro: Unlimited (higher concurrency)\nEnterprise: Unlimited (with highest concurrency/dedicated builders)",
    starter: true,
    pro: true,
    enterprise: true,
    category: "BUILD & PERFORMANCE",
  },
  {
    name: "Concurrent Builds",
    description: "Number of builds that can run simultaneously.",
    details: "Starter: 1\nPro: 5\nEnterprise: Custom",
    starter: true,
    pro: true,
    enterprise: true,
    category: "BUILD & PERFORMANCE",
  },
  {
    name: "Build Caching",
    description: "Speed up build times by reusing dependencies.",
    starter: true,
    pro: true,
    enterprise: true,
    category: "BUILD & PERFORMANCE",
  },
  {
    name: "Performance Monitoring (APM)",
    description: "Track and optimize your application performance.",
    details:
      "Starter: Basic metrics\nPro: Integrated APM\nEnterprise: Advanced APM",
    starter: true,
    pro: true,
    enterprise: true,
    category: "BUILD & PERFORMANCE",
  },
  // OBSERVABILITY & LOGGING
  {
    name: "Real-time Log Tailing",
    description: "View live application and system logs instantly.",
    starter: true,
    pro: true,
    enterprise: true,
    category: "OBSERVABILITY & LOGGING",
  },
  {
    name: "Log History",
    description: "Access historical logs for troubleshooting and analysis.",
    details: "Starter: 7-day\nPro: 90-day\nEnterprise: Custom",
    starter: true,
    pro: true,
    enterprise: true,
    category: "OBSERVABILITY & LOGGING",
  },
  {
    name: "Metrics History",
    description: "Store and analyze performance metrics over time.",
    details: "Starter: 7-day\nPro: 90-day\nEnterprise: Custom",
    starter: true,
    pro: true,
    enterprise: true,
    category: "OBSERVABILITY & LOGGING",
  },
  {
    name: "Alerting",
    description: "Get notified of critical events and issues.",
    details: "Starter: Basic\nPro: Advanced\nEnterprise: Comprehensive",
    starter: true,
    pro: true,
    enterprise: true,
    category: "OBSERVABILITY & LOGGING",
  },
  {
    name: "Audit Trail",
    description: "Track significant actions and changes on the platform.",
    details: "Starter: \nPro: Basic\nEnterprise: ",
    starter: false,
    pro: true,
    enterprise: true,
    category: "OBSERVABILITY & LOGGING",
  },
  // SECURITY & COMPLIANCE
  {
    name: "DDoS Protection",
    description: "Safeguard your applications from denial-of-service attacks.",
    details:
      "Starter: Basic (Platform-level)\nPro: Standard (Application-level)\nEnterprise: Advanced",
    starter: true,
    pro: true,
    enterprise: true,
    category: "SECURITY & COMPLIANCE",
  },
  {
    name: "Secrets Management",
    description: "Securely store and manage sensitive credentials.",
    details:
      "Starter: \nPro: (Encrypted, versioned secrets)\nEnterprise: (Integration with external vaults, stricter access controls)",
    starter: false,
    pro: true,
    enterprise: true,
    category: "SECURITY & COMPLIANCE",
  },
  {
    name: "Managed Network Rulesets / Firewall",
    description: "Control inbound and outbound network traffic.",
    details:
      "Starter: Basic\nPro: Configurable IP allow/deny lists\nEnterprise: ",
    starter: true,
    pro: true,
    enterprise: true,
    category: "SECURITY & COMPLIANCE",
  },
  // SUPPORT & SLA
  {
    name: "Support Channels",
    description: "Access help through various communication methods.",
    details:
      "Starter: Community Forum & Documentation\nPro: Slack & Email Support\nEnterprise: Dedicated Support",
    pro: true,
    enterprise: true,
    category: "SUPPORT & SLA",
  },
  {
    name: "Response Time SLA (for support tickets)",
    description: "Guaranteed response times for your support requests.",
    details:
      "Starter: Best Effort\nPro: < 8 Business Hours\nEnterprise: Custom",
    starter: true,
    pro: true,
    enterprise: true,
    category: "SUPPORT & SLA",
  },
  {
      name: "Uptime SLA (for platform services)",
      description: "Service availability guarantee for your applications.",
      details: "Starter: 99.95%\nPro: 99.95%\nEnterprise: 99.97%",
      starter: true,
     pro: true,
      enterprise: true,
       category: "SUPPORT & SLA"
  },
  {
      name: "Onboarding Assistance",
       description: "Get help setting up and using the platform.",
      details: "Starter: Self-service guides\nPro: Guided onboarding call\nEnterprise: Dedicated onboarding specialist, migration support",
       starter: true,
       pro: true,
      enterprise: true,
       category: "SUPPORT & SLA"
  },
];

export default function PricingTable() {
  return (
    <section className="mx-0 md:mx-36 border-y border-x border-1 border-[#ffffff14]">
      <div className="px-6 py-6 md:py-10 text-white">
        <div>
          <div className="flex flex-col lg:flex-row items-start justify-between mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 lg:mb-0">
              All Features
            </h2>
            <div className="grid grid-cols-3 w-full lg:w-auto gap-0">
              <Card className="bg-gradient-to-b from-[#ffffff04] to-[#99999902] w-[253.33px] h-[104px] border rounded-r-none">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg md:text-xl">Starter</CardTitle>
                  <CardDescription className="text-zinc-400 text-sm leading-tight">
                    Perfect for individual developers and small projects
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-to-b from-[#ffffff04] to-[#99999902] w-[253.33px] h-[104px] border border-l-0 rounded-none">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg md:text-xl">Pro</CardTitle>
                  <CardDescription className="text-zinc-400 text-sm leading-tight">
                    Ideal for growing teams and scaling applications
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-to-b from-[#ffffff04] to-[#99999902] w-[253.33px] h-[104px] border border-l-0 rounded-l-none">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg md:text-xl">
                    Enterprise
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-sm leading-tight">
                    Enterprise-grade flexibility and customized resources
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 divide-y divide-zinc-800">
            {features.map((feature, index) => (
              <div key={index} className="pt-3 pb-3">
                <div className="grid grid-cols-[1fr_760px] gap-4">
                  <div>
                    <h3 className="text-base font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-0">
                    <div className="flex flex-col items-center">
                      {feature.starter && (
                        <>
                          <div className="w-8 h-8 rounded-full border bg-[#1D1D1D] flex items-center justify-center mb-2">
                            <Check className="h-5 w-5 text-white" />
                          </div>
                          {feature.details &&
                            feature.details.split("\n")[0] && (
                              <p className="text-xs text-zinc-400 text-center">
                                {feature.details
                                  .split("\n")[0]
                                  .replace(/^Starter: /, "")}
                              </p>
                            )}
                        </>
                      )}
                    </div>
                    <div className="flex flex-col items-center">
                      {feature.pro && (
                        <>
                          <div className="w-8 h-8 border rounded-full bg-[#1D1D1D] flex items-center justify-center mb-2">
                            <Check className="h-5 w-5 text-white" />
                          </div>
                          {feature.details &&
                            feature.details.split("\n")[1] && (
                              <p className="text-xs text-zinc-400 text-center">
                                {feature.details
                                  .split("\n")[1]
                                  .replace(/^Pro: /, "")}
                              </p>
                            )}
                        </>
                      )}
                    </div>
                    <div className="flex flex-col items-center">
                      {feature.enterprise && (
                        <>
                          <div className="w-8 h-8 border rounded-full bg-[#1D1D1D] flex items-center justify-center mb-2">
                            <Check className="h-5 w-5 text-white" />
                          </div>
                          {feature.details &&
                            feature.details.split("\n")[2] && (
                              <p className="text-xs text-zinc-400 text-center">
                                {feature.details
                                  .split("\n")[2]
                                  .replace(/^Enterprise: /, "")}
                              </p>
                            )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
