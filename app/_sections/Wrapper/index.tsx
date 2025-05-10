"use client";

import { ReactNode } from "react";
import Header from "@/app/_sections/Header";
import Footer from "@/app/_sections/Footer";
import { useTheme } from "@/app/_contexts/ThemeContext";

type LayoutWrapperProps = {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
  withPadding?: boolean;
  maxWidth?: string;
};

export default function LayoutWrapper({
  children,
  showHeader = true,
  showFooter = true,
  className = "",
  withPadding = true,
  maxWidth = "max-w-7xl",
}: LayoutWrapperProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      {showHeader && <Header />}

      <main
        className={`flex-grow w-full ${maxWidth} mx-auto ${withPadding ? "px-4 sm:px-6 py-8" : ""
          } ${className}`}
      >
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  );
}

// // For a page without a footer:
// export default function AuthPage() {
//   return (
//     <LayoutWrapper showFooter={false}>
//       <div>Login form...</div>
//     </LayoutWrapper>
//   );
// }

// // For a full-width page:
// export default function DashboardPage() {
//   return (
//     <LayoutWrapper withPadding={false} maxWidth="w-full">
//       <div>Dashboard content...</div>
//     </LayoutWrapper>
//   );
// }
