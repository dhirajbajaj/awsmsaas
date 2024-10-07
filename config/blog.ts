export const BLOG_CATEGORIES: {
  title: string;
  slug: "news" | "education";
  description: string;
}[] = [
  {
    title: "News",
    slug: "news",
    description: "Updates and announcements from Next SaaS Starter.",
  },
  {
    title: "Education",
    slug: "education",
    description: "Educational content about SaaS management.",
  },
];

export const BLOG_AUTHORS = {
  author: {
    name: "author_name",
    image: "/_static/avatars/author.jpeg",
    twitter: "profile",
  }
};
