import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/guilherme-paes-7b5591133/"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://github.com/euguipaes"><img src={navIcon2} alt="Github" /></a>
            </div>
            <p>Copyright 2023. Todos os direitos reservados. | Guilherme Paes.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

