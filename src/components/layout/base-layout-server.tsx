import React from "react";
import { Footer } from "../footer";
import Header from "../header";
import AnnouncementBar from "../announcement-bar";

interface BaseLayoutProps {
  showHeader?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
  title?: string;
}

export default function BaseLayoutServer({
  children,
  showHeader = true,
  showFooter = true,
  // title = "EDUMENTUM",
}: BaseLayoutProps) {
  return (
    <React.Fragment>
      <div className="min-h-screen w-full bg-background">
        {/* Announcement Bar */}
        <AnnouncementBar />

        {/* Header */}
        {showHeader && <Header />}

        <div>
            {children}
        </div>

        {/* Footer */}
        {showFooter && <Footer />}
      </div>
    </React.Fragment>
  );
}
