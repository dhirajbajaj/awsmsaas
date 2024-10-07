import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "awsmsaas",
  description:
    "Kickstart your SaaS journey with SaaS Starter! Leverage the power of Next.js 14, Prisma, Neon, and other top-tier tools to rapidly build your next big idea.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://codecanyon.net/user/dbkooper",
    codecanyon: "https://codecanyon.net/user/dbkooper",
    github: "https://github.com/dhirajbajaj/next-saas-stripe",
  },
  mailSupport: "support@saas-starter.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];
