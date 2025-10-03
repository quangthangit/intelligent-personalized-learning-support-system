import React from "react";
import { AppSideBar } from "../sidebar/app-sidebar";

interface BaseLayoutProps {
  showHeader?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
  title?: string;
}

export default function BaseLayout({
  children,
  // title = "EDUMENTUM",
}: BaseLayoutProps) {
  return (
    <React.Fragment>
      <div className="flex min-h-screen w-full">
        <AppSideBar />
        <main className="flex-1">{children}</main>
      </div>
    </React.Fragment>
  );
}
