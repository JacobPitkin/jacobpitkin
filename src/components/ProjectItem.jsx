function ProjectItem({ name, shortDescription, tech, images }) {
  return (
    <div className="pt-8">
      <div>{name}</div>
      <div className="text-start">{shortDescription}</div>
    </div>
  )
}

export default ProjectItem;