import galaxyImage from "assets/images/galaxy.svg";

export const VIEWS = [
  "general info",
  "skills",
  "history",
  "github",
  "blog",
  "interests",
];

export const GENERAL_INFO = {
  image: { src: galaxyImage, alt: "agujero negro" },
  data: [
    { type: "text", title: "location", text: "bogotá, Colombia" },
    {
      type: "link",
      title: "web",
      text: "diegocastillo.com",
      href: "https://diegocastillo.com",
    },
    { type: "text", title: "birthdate", text: "May 25 1992" },
    {
      type: "link",
      title: "twitter",
      text: "@diegocastillogz",
      href: "https://twitter.com/diegocastillogz",
    },
    {
      type: "link",
      title: "github",
      text: "diegocastillogz",
      href: "https://github.com/diegocastillogz",
    },
    {
      type: "email",
      title: "email",
      text: "diegorlando5@gmail.com",
      mailto: "diegorlando5@gmail.com",
    },
    { type: "text", title: "languages", text: "english and spanish" },
    {
      type: "link",
      title: "linkedin",
      text: "diego-castillo",
      href: "https://www.linkedin.com/in/diego-castillo-17b2aa1bb/",
    },
  ],
};
