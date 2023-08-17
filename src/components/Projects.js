import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BlockChain website",
      description: "React + JS + Rest api",
      imgUrl: "https://img.freepik.com/free-vector/bitcoin-blockchain-digital-coin-crypto-currency-concept-background_1017-30307.jpg?w=826&t=st=1660833219~exp=1660833819~hmac=4793ea135ee93b3d9e673efb4d0911ffc4aae5b98f1d76f8b4a055ebd78ad64f",
      link:"https://kamalsinghkhanna.github.io/blockchain-web-app/"
    },
    {
      title: "Gym website",
      description: "React + JS + React-Boostrap+ email js",
      imgUrl: "https://img.freepik.com/premium-photo/muscular-tattooed-bearded-male-exercising_136403-9395.jpg",
      link:"https://kamalsinghkhanna.github.io/Gym-Website/"
    },
    {
      title: "Health care website",
      description: "React + pure css ",
      imgUrl:"https://img.freepik.com/free-photo/hand-medical-glove-pointing-virtual-screen-medical-technology_53876-104200.jpg?w=740&t=st=1660834598~exp=1660835198~hmac=2f38c1308dfe37a4f94b4bb866ae2b1998cfb8a96fd6ee338182fc6460f4e8d8",
      link:"https://kamalsinghkhanna.github.io/beautiful-web/"

    },
    {
      title: "Todo list app",
      description: "React",
      imgUrl: "https://img.freepik.com/free-vector/people-making-list-illustration_53876-43029.jpg?w=740&t=st=1660833558~exp=1660834158~hmac=284d93b4492b1eeb4b7311393db34359ccaeabeb86b988bb5494e88afba19c24",
      link:"https://zesty-kringle-93657d.netlify.app/"
    },
    {
      title: "Text Utils app",
      description: "React",
      imgUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/221/528/datas/original.png",
      link:"https://regal-bavarois-2eb9ff.netlify.app/"
    },
    {
      title: "chingari app",
      description: "React + firebase",
      imgUrl: "https://img.freepik.com/free-vector/tiktok-app-interface-template-set_23-2148526919.jpg?w=740&t=st=1660463591~exp=1660464191~hmac=3e589b998c934da4d688113d2037cd8eeae3751f7d640e16d1fb5f1c54153ef5",
      link:"https://github.com/KamalSinghKhanna/Fun-video-app/"
    },
    {
      title: "Tic tac toe",
      description: "Html, CSS , Java Script",
      imgUrl:"https://is4-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/c5/98/1a/c5981a9e-0cb0-2612-1e12-d4f69bbae695/04a0a6ec-18ce-402d-a301-1e1462841631_1.jpg/750x750bb.jpeg",
      link:"https://kamalsinghkhanna.github.io/Tic-tac-toe/"
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I like to apply my skills and knowledge to make something, it makes me more inclined to learn, and these are  some of my projects.
                <br/>
                <a className="text-decoration-none" href="https://github.com/KamalSinghKhanna" target="_blank" rel="noopener noreferrer">checkout my GitHub profile</a>
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            if(index<6){
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )}
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            if(index>5){
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )}
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="back-images" src={colorSharp2}></img>
    </section>
  )
}
