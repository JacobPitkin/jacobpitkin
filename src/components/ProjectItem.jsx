import Carousel from './Carousel';

function ProjectItem({ name, shortDescription, tech, images }) {
  return (
    <div className="mt-8 border border-slate-900 rounded-xl">
      <Carousel
        name={name}
        images={images} 
      />
      <div className="text-xl font-bold">{name}</div>
      <div className="text-start p-4">{shortDescription}</div>
      <div className="flex flex-row">
        {tech.map((tech) => (
          <div className="border border-slate-900 rounded-lg ml-2 mb-2">
            <p className="p-1">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectItem;