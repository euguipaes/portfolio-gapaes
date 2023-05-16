import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.JPG";
import TrackVisibility from 'react-on-screen';
import cv from "../assets/cv.pdf";
<script src="https://kit.fontawesome.com/0b64daf7ff.js" crossorigin="anonymous"></script>

export const Contact = () => {
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Entre em contato comigo!</h2>
                <h3>Terei prazer em te atender.</h3><br></br>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <h4><i class="fa-brands fa-whatsapp"></i> (11) 97596-6009</h4>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <h4><i class="fa-regular fa-envelope"></i> contatogapaes@gmail.com</h4>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <br/>
                      <h4><i class="fa-solid fa-house"></i> São Paulo, São Paulo - Brasil</h4>
                    </Col>
                    <Col size={12} className="px-1">
                    <div className="contact-button">
                      <button><a href={cv} target="_blank">DOWNLOAD CV</a></button>
                    </div>
                    </Col>
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
