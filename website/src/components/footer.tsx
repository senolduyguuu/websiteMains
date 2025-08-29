'use client'

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Logo } from "./ui/logo";
import { Instagram, Twitter, Linkedin, Facebook, Check } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !agreedToTerms) {
      setError('Please enter a valid email and agree to terms');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 204) {
        setIsSubscribed(true);
        setEmail('');
      } else if (response.status === 400) {
        setError('Invalid email address or already subscribed');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <footer className="pb-8 sm:pb-14 px-20 sm:px-6 bg-foreground">
      <div className="container py-6 px-4 sm:px-8 space-y-8 sm:space-y-12 bg-background mx-auto rounded-3xl">
        {/* First Row: Logo and Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between pb-8  border-b border-border">
          <div className="flex items-center gap-2 ">
            <Logo />
            <span className="text-xl font-semibold text-tx-primary">
              Virenet
            </span>
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-[#1FC16B]/10 text-emerald-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            All Systems Operational
          </span>
        </div>

        {/* Second Row: Navigation and Newsletter */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 flex-1 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm text-muted-foreground uppercase">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#features"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/changelogs"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Changelog
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="https://docs.virenet.com/"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Docs
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/pricing"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-muted-foreground uppercase">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://docs.virenet.com/docs" 
                    target="_blank"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                   Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.virenet.com/docs/integrations"
                    target="_blank"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                   Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-muted-foreground uppercase">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="http://cal.com/receperdogan"
                    target="_blank"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Meet Our Team
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hello@virenet.com"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Partnerships
                  </a>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/virenet/jobs/"
                    target="_blank"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-muted-foreground uppercase">
                Socials
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://x.com/virenetcom"
                    target="_blank"
                    className="text-tx-primary hover:text-orange-500 text-sm inline-flex items-center gap-2"
                  >
                    <Twitter size={18} />X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/virenet/"
                    target="_blank"
                    className="text-tx-primary hover:text-orange-500 text-sm inline-flex items-center gap-2"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-muted-foreground uppercase">
                Others
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hello@virenet.com"
                    className="text-tx-primary hover:text-orange-500 text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:w-72 space-y-4 lg:border-l lg:pl-8 border-border">
            <h3 className="text-sm text-muted-foreground uppercase">
              Get News, Updates.
            </h3>
            <div className="space-y-3">
              {!isSubscribed ? (
                <>
                  <Input 
                    type="email" 
                    placeholder="virenet@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <Button 
                    className="w-full bg-orange-500 hover:bg-orange-600"
                    onClick={handleSubscribe}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe now'}
                  </Button>
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded border-gray-300"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                    />
                    <label htmlFor="terms">
                      I agree with{" "}
                      <Link
                        href="/terms"
                        className="underline hover:text-orange-500"
                      >
                        Terms & Conditions
                      </Link>
                    </label>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2 text-green-600">
                  <Check size={20} />
                  <span className="text-sm">Successfully subscribed!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Third Row: Copyright, Links and Help */}
        <div className="flex flex-col sm:flex-row  items-center gap-4 pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground order-2 sm:order-1">
            ©2024 Virenet, All rights reserved.
          </div>
          <Link href="http://cal.com/receperdogan" target="_blank">
            <Button className="border-1 border sm:order-2 bg-background/5 text-base hover:bg-background/10">
              Any help?
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
