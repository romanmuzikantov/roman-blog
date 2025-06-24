import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Roman Muzikantov",
  EMAIL: "roman.muzikantov@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A developer blog sharing hands-on experience, insights, and progress on an upcoming indie game. Follow along for development tips, personal lessons, and behind-the-scenes updates.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/romanmuzikantov"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/roman-muzikantov-436394196/",
  }
];
