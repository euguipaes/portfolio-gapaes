import skills1 from "../assets/img/skills1.png";
import skills2 from "../assets/img/skills2.png";
import skills3 from "../assets/img/skills3.png";
import skills4 from "../assets/img/skills4.png";
import skills5 from "../assets/img/skills5.png";
import skills6 from "../assets/img/skills6.png";
import skills7 from "../assets/img/skills7.png";
import skills8 from "../assets/img/skills8.png";
import skills9 from "../assets/img/skills9.png";
import skills10 from "../assets/img/skills10.png";
import skills11 from "../assets/img/skills11.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.png";
import arrow2 from "../assets/img/arrow2.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Essas são algumas das minhas habilidades, mas estou sempre buscando aprender novas tecnologias.<br>
                        </br> Se tem uma oportunidade para mim e precisa que eu aprenda algo novo, entre em contato comigo.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skills1} alt="Image" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={skills2} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={skills10} alt="Image" />
                                <h5>SASS</h5>
                            </div>
                            <div className="item">
                                <img src={skills7} alt="Image" />
                                <h5>Bulma</h5>
                            </div>
                            <div className="item">
                                <img src={skills3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={skills4} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={skills8} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={skills9} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={skills5} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={skills6} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={skills11} alt="Image" />
                                <h5>Git/Github</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
