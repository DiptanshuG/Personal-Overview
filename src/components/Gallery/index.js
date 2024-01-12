import React from "react";
import CustomerOnlineOrderApp from "../../assets/content/Heebee-customer-app.gif";
import admin from "../../assets/content/admin.gif";
import uniqart from "../../assets/content/uniqart.gif";
import pos from "../../assets/content/pos.gif";
import portfolio from "../../assets/content/portfolio.gif";
import kitchenIq from "../../assets/content/kitchenIq.gif";
import todo from "../../assets/content/todo.gif";
import kitchen from "../../assets/content/kitchen.gif";
import imperialAssets from "../../assets/content/ImperialAssets.gif";
import rentyourdress from "../../assets/content/rentyourdress.gif";
import dukkaandarSeller from "../../assets/content/DukkaandarSeller.gif";
import dexOrdi from "../../assets/content/DexOrdi.gif";

const projects = [
  {
    title: "Customer-Online-Order",
    technologies: "React.js, Tailwind, Node.js, postgre'sql",
    image: CustomerOnlineOrderApp,
    link: "https://heebee-customer-new.vercel.app/",
  },
  {
    title: "Admin-Dashboard for management CRUD-Operation",
    technologies: "React JS, Node.js, Bootstrap",
    image: admin,
    link: "https://admin.heebee.in/",
  },
  {
    title: "A platform for buy and sell NFT's (Non-fungible token)",
    technologies: "ReactJS, Bootstrap",
    image: uniqart,
    link: "https://demo.uniqart.io/",
  },
  {
    title: "E-commerce Pos System",
    technologies: "Express.js, PostgreSQL, ReactJs, Tailwind",
    image: pos,
    link: "https://heebee-pos.vercel.app",
  },
  {
    title: "Portfolio Services",
    technologies: "Html, CSS, JS, GSAP",
    image: portfolio,
    link: "https://info-weld.vercel.app/",
  },
  {
    title: "Static Template",
    technologies: "Html, CSS, JS, PHP, MYSQL",
    image: kitchenIq,
    link: "https://kitcheniq.quadbtech.com/",
  },
  {
    title: "Todo App",
    technologies:
      "React, Typescript, Localstorage, context State management, Dummy Login",
    image: todo,
    link: "https://to-do-app-diptanshug.vercel.app/",
  },
  {
    title: "kitchen Management of Restaurant",
    technologies: "React, React bootstrap",
    image: kitchen,
    link: "https://to-do-app-diptanshug.vercel.app/",
  },
  {
    title:
      "Imperial Assets (building selling platforms based on blockchain bids type system)",
    technologies: "Next JS, Tailwind D3",
    image: imperialAssets,
    link: "https://imperial-frontend.atican.dev/",
  },
  {
    title: "Dress rental website static frontend theme",
    technologies: "React, react-bootstrap",
    image: rentyourdress,
    link: "https://rent-your-dress.vercel.app/",
  },
  {
    title:
      "Dukkandaar seller module project (similar to meesho seller supplier )",
    technologies: "React, react-bootstrap , typescript ",
    image: dukkaandarSeller,
    link: "https://seller.quadbtech.com/",
  },
  {
    title: "Dexordi Project based on blockchain technology (in progress )",
    technologies: "Next JS, Tailwind",
    image: dexOrdi,
    link: "https://dexordi-frontend.atican.dev/",
  },
];

function ProjectCard({ title, technologies, image, link }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <p className="subtitle">{technologies}</p>
      <img alt={`${title} demo`} src={image} />
      <a href={link}>Visit</a>
    </div>
  );
}

function Gallery() {
  return (
    <section className="my-5">
      <h1 id="gallery" className="intro">
        {" "}
        Live Projects{" "}
      </h1>
      <section className="flex-row">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </section>
  );
}

export default Gallery;
