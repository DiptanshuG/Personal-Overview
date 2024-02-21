import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import github from "../../assets/cover/github.jpeg";
import linkedin from "../../assets/cover/linkedin.jpeg";
import { FaMobileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiDownload } from "react-icons/fi";
import { IoMdShare } from "react-icons/io";
import "../../assets/styles/Footer.css";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/diptanshu-bhawsar-503b201aa/",
  github: "https://github.com/diptanshug",
  email: "mailto:diptanshubhawsar50@gmail.com",
  phone: "tel:758.297.4834",
  // resume: "https://flowcv.com/resume/tqh16tr3cm",
};

function SocialCard({ icon, title, link, image }) {
  return (
    <Col md={2} xs={12} className="mb-4">
      <Card>
        <Card.Header className="cardTitle">
          {icon} {title}
        </Card.Header>
        <a href={link} target="_blank" rel="noreferrer">
          {image && (
            <Card.Img src={image} alt={`${title} profile screenshot`} />
          )}
        </a>
      </Card>
    </Col>
  );
}

function Footer() {
  return (
    <section className="my-5">
      <h1 id="footer" className="intro">
        <IoMdShare /> Socials & More
      </h1>

      <Row className="flex-column center">
        <SocialCard
          icon={<FaLinkedin />}
          title="LinkedIn"
          link={socialLinks.linkedin}
          image={linkedin}
        />

        <SocialCard
          icon={<FaGithub />}
          title="GitHub"
          link={socialLinks.github}
          image={github}
        />
      </Row>
    </section>
  );
}

export default Footer;
