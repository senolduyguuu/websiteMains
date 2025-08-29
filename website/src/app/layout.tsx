import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DeploymentHero from "@/components/deployment-hero";
import QueryProvider from "@/components/QueryProvider";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Virenet",
  description: "Virenet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-RC248FK21N`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RC248FK21N');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-foreground`}>
        <QueryProvider>
          <Header />
          <ThemeProvider>{children}</ThemeProvider>
        
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
