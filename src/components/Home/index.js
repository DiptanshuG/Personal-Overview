import React from "react";
import coverImage from "../../assets/cover/Diptanshu's img.jpeg";
import { MdOutlineWavingHand } from "react-icons/md";
import { GoFlame } from "react-icons/go";

function Home() {
  return (
    <section className="my-5">
      <h1 id="about" className="intro">
        About&nbsp;Me
      </h1>
      <div className="container center">
        <img
          src={coverImage}
          className="avatar isRounded"
          style={{ width: "50%" }}
          alt="Avatar"
        />
        <p className="hello">
          {" "}
          Hello! <MdOutlineWavingHand />{" "}
        </p>
      </div>

      <p>
        <p>
          {" "}
          I'm Diptanshu, tech enthusiast and aspiring Full-Stack Developer.
          Thanks for checking out my new, improved portfolio made with React
          18.2.0. For the last year, I've been learning web development via{" "}
          {/* <a href="https://bootcamp.charlotte.edu/coding/">UNC-Charlotte</a> and
          endless open-source education on the internet, such as{" "} */}
          <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>. In my free
          time, you can find me sketching, and playing with my dogs.
        </p>

        <div className="cardTitle">
          <GoFlame /> Causes I'm passionate about:
        </div>

        <br />
        <a href="https://www.bmc.com/blogs/continuous-innovation/">
          Continuous innovation
        </a>
      </p>
    </section>
  );
}

export default Home;
