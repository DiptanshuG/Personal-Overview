import React from "react";
import CustomerOnlineOrderApp from "../../assets/content/Heebee-customer-app.gif";
import admin from "../../assets/content/admin.gif";
import uniqart from "../../assets/content/uniqart.gif";
import pos from "../../assets/content/pos.gif";
import portfolio from "../../assets/content/portfolio.gif";
import kitchen from "../../assets/content/kitchen.gif";
import { BiLandscape } from "react-icons/bi";
import { DiGitBranch } from "react-icons/di";

function Gallery() {
  return (
    <section className="my-5">
      {/* <h1 id="gallery" className="intro">
        <BiLandscape /> Gallery{" "}
      </h1> */}
      <h1 id="gallery" className="intro">
        {" "}
        Live Projects{" "}
      </h1>

      <section className="flex-row">
        <div className="card">
          <div className="cardTitle">Customer-Online-Order</div>
          <p className="subtitle">React.js, Tailwind,Nodejs, postgre'sql,</p>
          <img alt="customer demo" src={CustomerOnlineOrderApp} />

          <a href="https://heebee-customer-new.vercel.app/">Visit </a>
        </div>

        <div className="card">
          <div className="cardTitle">
            Admin-Dashboard for management CRUD-Operation
          </div>
          <p className="subtitle">React JS, Node.js,Bootstrap</p>
          <img alt="admin demo" src={admin} />
          <a href="https://admin.heebee.in/">Visit</a>
        </div>

        <div className="card">
          <div className="cardTitle">
            A platform for buy and sell NFT's (Non-fungible token)
          </div>
          <p className="subtitle">ReactJS, Bootstrap</p>
          <img alt="uniqart demo" src={uniqart} />
          <a href="https://demo.uniqart.io/">Visit</a>
        </div>

        <div className="card">
          <div className="cardTitle">E-commerce Pos System</div>
          <p className="subtitle">Express.js,postgresql, ReactJs,Tailwind</p>
          <img alt="Pos demo" src={pos} />
          <a href="https://heebee-pos.vercel.app">Visit </a>
        </div>
        <div className="card">
          <div className="cardTitle">Portfolio Services</div>
          <p className="subtitle">Html, CSS, JS, GSAP</p>
          <img alt="Portfolio demo" src={portfolio} />
          <a href=" https://info-weld.vercel.app/">Visit </a>
        </div>
        <div className="card">
          <div className="cardTitle">Ongoing Project</div>
          <p className="subtitle">ReactJS</p>
          <img alt="kitchen demo" src={kitchen} />
        </div>

        <div className="card">
          <h5>Yay! You have seen it all.</h5>
          <h4>Update soon...</h4>
        </div>
      </section>
    </section>
  );
}

export default Gallery;
