import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.ico";

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
              <a href="https://www.linkedin.com/in/guilherme-paes-7b5591133/" target="_blank"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://github.com/euguipaes" target="_blank"><img src={navIcon2} alt="Github" /></a>
              <a href="https://api.whatsapp.com/send?phone=5511975966009" target="_blank"><img src={navIcon3} alt="WhatsApp" /></a>
            </div>
            <p>Copyright 2023. Todos os direitos reservados. | Guilherme Paes.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

