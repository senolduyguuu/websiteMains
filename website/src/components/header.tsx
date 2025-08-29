import Link from "next/link";
import { Button } from "./ui/button";
import { MobileSidebar } from "./mobile-sidebar";
import { Logo } from "./ui/logo";
import { NotificationBanner } from "./notification-banner";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ffffff14] bg-foreground pt-2">
      <NotificationBanner />

      <div className="mx-4 lg:mx-[144px] lg:border-x border-[#ffffff14] py-7">
        <div className="flex h-14 items-center justify-between w-full max-w-[1400px] mx-auto px-0 lg:px-5">
          {/* Mobile Layout: Show sidebar on left, centered logo, hide right content */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <MobileSidebar />
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center"
            >
              <Logo />
              <span className="text-lg md:text-xl text-tx-primary font-bold">
                Virenet
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden gap-4 lg:gap-6 md:flex absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/changelogs"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              Changelogs
            </Link>
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="/#features"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              Features
            </Link>

            {/* Harici bağlantı için <a> etiketi kullanıyoruz */}
            {/* <a
              href="https://virenet.productlane.com/roadmap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              Roadmap
            </a> */}

            <a
              href="https://docs.virenet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              Docs
            </a>
            <Link
              href="/deploy"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              Deploy
            </Link>
            <Link
              href="/pricing"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Buttons - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="https://console.virenet.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="text-sm text-white font-medium transition-colors"
              >
                Log in
              </Button>
            </a>

            <a
              href="http://cal.com/receperdogan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gradient" className="text-sm font-medium">
                Get a demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
