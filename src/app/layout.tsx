import type { Metadata } from "next";
import "./globals.css";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import AsideNav from "@/components/aside-navbar/AsideNav";
import PageContent from "@/components/page-content/PageContent";
import Footer from "@/components/footer/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "ElderBreaks",
  description: "ElderBreaks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <PageWrapper>
          <AsideNav/>
          <PageContent>
              {children}
          </PageContent>
      </PageWrapper>
      <Footer/>
      </body>
    </html>
  );
}
