import { Carousel } from "react-responsive-carousel";

function ProjectItem({ name, shortDescription, tech, images }) {
  return (
    <div className="pt-8">
      <Carousel className="flex-row">
        {images.map((image) => (
          <div>
            <img src={image} />
            <p className="legend">{image}</p>
          </div>
        ))}
      </Carousel>
      <div>{name}</div>
      <div className="text-start">{shortDescription}</div>
    </div>
  )
}

export default ProjectItem;