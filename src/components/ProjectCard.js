import { Col } from "react-bootstrap";

export const ProjectCard = ({link, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
       <a target="blank" href={link}>
      <div className="proj-imgbx">
        <img alt="project-images" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
