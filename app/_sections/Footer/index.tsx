"use client";

import { useTheme } from "@/app/_contexts/ThemeContext";
import {
  IconBrandGithub,
  IconMailFilled,
  IconBrain,
  IconBrandTwitter,
  IconHeart,
  IconBrandLinkedin
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Footer links
  const resourceLinks = [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/hyper-research",
      icon: IconBrandGithub,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/hyperresearch",
      icon: IconBrandTwitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/hyper-research",
      icon: IconBrandLinkedin,
    },
    {
      name: "Email",
      href: "mailto:contact@hyperresearch.ai",
      icon: IconMailFilled,
    },
  ];

  return (
    <footer className={`border-t ${isDark ? 'border-zinc-800' : 'border-zinc-200'} py-12 mt-auto`}>
      <div className="w-full px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand section with logo and description */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className={`p-2 rounded-md ${isDark ? 'bg-blue-900' : 'bg-blue-100'}`}>
                <IconBrain
                  size={20}
                  className={isDark ? 'text-blue-300' : 'text-blue-700'}
                  stroke={2}
                />
              </div>
              <div className="font-bold text-xl">Hyper Research</div>
            </div>
            <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              AI-powered research assistant that retrieves, analyzes, and synthesizes web data to deliver actionable insights.
            </p>
          </div>

          {/* Resources section */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company section */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links section */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((socialLink) => {
                const SocialIcon = socialLink.icon;
                return (
                  <Link
                    key={socialLink.name}
                    href={socialLink.href}
                    className={`p-2 rounded-md transition-colors flex items-center gap-2 ${isDark
                      ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                      : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                      }`}
                    title={socialLink.name}
                    aria-label={`Visit our ${socialLink.name} page`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon size={18} stroke={1.5} />
                    <span className="text-sm hidden sm:inline">{socialLink.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className={`pt-8 border-t ${isDark ? 'border-zinc-800' : 'border-zinc-200'} flex flex-col sm:flex-row justify-between items-center gap-4`}>
          <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            © {new Date().getFullYear()} Hyper Research. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className={`flex items-center text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Built with
              <IconHeart
                size={16}
                className={`mx-1 ${isDark ? 'text-red-400' : 'text-red-500'}`}
                fill="currentColor"
                stroke={1.5}
              />
              and advanced AI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
