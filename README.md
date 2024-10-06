<a href="https://next-saas-stripe-starter.vercel.app">
  <img alt="SaaS Starter" src="public/_static/og.jpg">
  <h1 align="center">NextJS SaaS Stripe Starter</h1>
</a>

<p align="center">
  NEXTJS SaaS Starter !
</p>

<p align="center">
  <a href="https://twitter.com/miickasmt">
    <img src="https://img.shields.io/twitter/follow/miickasmt?style=flat&label=miickasmt&logo=twitter&color=0bf&logoColor=fff" alt="Mickasmt Twitter follower count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
</p>
<br/>

## Introduction

Empower your next project with the stack of Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui, and Stripe.
<br/>
All seamlessly integrated with the SaaS Starter to accelerate your development and saas journey.

## Installation

Clone & create this repo locally with the following command:

```bash
npx create-next-app my-saas-project --example "https://github.com/mickasmt/next-saas-stripe-starter"
```

Or, deploy with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmickasmt%2Fnext-saas-stripe-starter)

### Steps

Editor Preference: We prefer VSCODE editor, but you are free to use whatever you like. 

1. Install dependencies using pnpm:


```sh
pnpm install
```

If pnpm isnt installed, use
```sh
npm install -g pnpm
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

Open .env.local in your code editor, to  

2.1  Generating Auth.js secret 

Guide: [https://authjs.dev/getting-started/installation?framework=Next.js](https://authjs.dev/getting-started/installation?framework=Next.js)

Run the following command, it will automatically generate Auth secret in .env.local

```sh
npx auth secret
```

Oauth Guide: [https://authjs.dev/getting-started/authentication/oauth](https://authjs.dev/getting-started/authentication/oauth)


2.2 Configure Google Oauth ID & Secret

a. Register OAuth App in Google's dashboard to get client id & secret
Guide: [https://support.google.com/cloud/answer/6158849?hl=en](https://support.google.com/cloud/answer/6158849?hl=en)

```sh
callback url: [origin]/api/auth/callback/google
```

2.3 Configure Github Oauth ID & Secret

Register OAuth App from Github developer settings to get oauth client id & secret
Guide: [https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

```sh
callback url: [origin]/api/auth/callback/github
```






3. Start the development server:

```sh
pnpm run dev
```

## Roadmap
- [ ] Add resend for success subscriptions


### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js
- [React Email](https://react.email/) – Versatile email framework for efficient and flexible email development

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Resend](https://resend.com/) – A powerful email framework for streamlined email development
- [Neon](https://neon.tech/) – Serverless Postgres with autoscaling, branching, bottomless storage and generous free tier.

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Shadcn/ui](https://ui.shadcn.com/) – Re-usable components built using Radix UI and Tailwind CSS
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) – Generate dynamic Open Graph images at the edge

### Hooks and Utilities

- `useIntersectionObserver` – React hook to observe when an element enters or leaves the viewport
- `useLocalStorage` – Persist data in the browser's local storage
- `useScroll` – React hook to observe scroll position ([example](https://github.com/mickasmt/precedent/blob/main/components/layout/navbar.tsx#L12))
- `nFormatter` – Format numbers with suffixes like `1.2k` or `1.2M`
- `capitalize` – Capitalize the first letter of a string
- `truncate` – Truncate a string to a specified length
- [`use-debounce`](https://www.npmjs.com/package/use-debounce) – Debounce a function call / state update

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous

- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way