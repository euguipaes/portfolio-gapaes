import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
          <button id="visitProject"><a href={link} target="_blank">Acesse o projeto</a></button>
          </div>
        </div>
      </div>
    </Col>
  )
}
