import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [text, setText] = useState("I am a frontend developer");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{text.substring(0, index)}</h1>
            <p>
              I am a frontend developer based on Nainital India.I have soild
              knowledge of html & css, JavaScript and React and other frontend
              libraries.
            </p>
            <p>
              I am looking for frontend roles, I want to work on some cool real
              world projects, and I am eager to learn new things, I believe that
              working in a team can get things done effectively and faster, as a
              fresher my main focus is on building a strong skill set and apply
              those skills to help people to create better technology.
            </p>
            <a
              href="https://drive.google.com/file/d/1A7FYlx8cbDdExd15csfGG-G4W64VLgG9/view"
              target="_blank"
              className="text-decoration-none"
              rel="noopener noreferrer"
            >
              <button>
                View my Resume
                <ArrowRightCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
