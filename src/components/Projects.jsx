import ProjectItem from './ProjectItem';

import projects from '../data/projects';

function Projects() {
  return (
    <div className="pt-20 max-w-lg">
      <h1 className="font-bold text-2xl underline">Projects</h1>
      {projects.map((project) => (
        <ProjectItem
          name={project.name}
          shortDescription={project.shortDescription}
          tech={project.tech}
          images={project.images}
        />
      ))}
    </div>
  )
}

export default Projects;
