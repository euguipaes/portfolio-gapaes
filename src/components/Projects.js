import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Mario Jump",
      description: "Ajude Mario a pular os obstáculos apertando a tecla 'espaço' em seu teclado. Jogo desenvolvido em CSS e JavaScript.",
      imgUrl: projImg1,
      link: 'https://euguipaes.github.io/mario-jump/'
    },
    {
      title: "Número Secreto",
      description: "Diga algum número e tente adivinhar o número secreto. Jogo desenvolvido em JavaScript com reconhecimento de voz.",
      imgUrl: projImg2,
      link: 'https://euguipaes.github.io/JogoNumeroSecreto/'
    },
    {
      title: "Calculadora de Gorjetas",
      description: "Aplicativo que calcula a gorjeta baseado no valor da conta e o total de pessoas a ser dividido. Desenvolvido em JavaScript",
      imgUrl: projImg3,
      link: 'https://euguipaes.github.io/CalculadoraDeGorjetas/'
    },
    {
      title: "Robotron 2000",
      description: "Crie o seu robô. Desenvolvido em JavaScript.",
      imgUrl: projImg4,
      link: 'https://euguipaes.github.io/robotron-2000/'
    },
    {
      title: "Paes MIDI",
      description: "Teste de sons. Desenvolvido em JavaScript",
      imgUrl: projImg5,
      link: 'https://euguipaes.github.io/PaesMIDI/'
    },
    {
      title: "Mochila de Viagem",
      description: "Adicione e remova itens de sua mochila de viagem para não esquecer de nada. Desenvolvido em JavaScript.",
      imgUrl: projImg6,
      link: 'https://euguipaes.github.io/MochilaDeViagem/'
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Alguns dos meus projetos já desenvolvidos. Estarei atualizando essa seção conforme for desenvolvendo mais projetos.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
