import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/icons8-gmail-logo(1).svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={10} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kamal-khanna-0547291b6/" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/_kamalkhanna" target="blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/KamalSinghKhanna" target="blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="mailto:kamalsinghkhanna2706@gmail.com" target="blank"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>No Copyright Issue. <a className="text-decoration-none" href="https://github.com/judygab/web-dev-projects">credits</a> </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
