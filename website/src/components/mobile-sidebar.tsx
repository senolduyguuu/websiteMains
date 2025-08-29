import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Logo } from "./ui/logo";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] [&>button]:hidden">
        <SheetHeader className="flex flex-row items-center justify-between border-b pb-4 mb-4">
          <Link href="/" className="flex items-center">
            <Logo />
            <span className="text-lg md:text-xl font-bold">Virenet</span>
          </Link>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetTrigger>
        </SheetHeader>
        <nav className="flex flex-col divide-y divide-border">
          <div className="py-3">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
          </div>
          <div className="py-3">
            <Link
              href="/overview"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Overview
            </Link>
          </div>
          <div className="py-3">
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Features
            </Link>
          </div>
          <div className="py-3">
            <Link
              href="/use-cases"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Use Cases
            </Link>
          </div>
          <div className="py-3">
            <Link
              href="/specifications"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Specifications
            </Link>
          </div>
          <div className="py-3">
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Pricing
            </Link>
          </div>
          <div className="py-3">
            <Link
              href="/customer-stories"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Customer Stories
            </Link>
          </div>
        </nav>
        <div className="mt-6 flex items-center justify-center gap-2">
          <a href="https://console.virenet.com/auth/login" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="w-full text-sm font-medium text-tx-primary">
              Log in
            </Button>
          </a>
          <a href="http://cal.com/receperdogan" target="_blank" rel="noopener noreferrer">
            <Button variant="gradient" className="w-full text-sm font-medium">
              Get a demo
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
