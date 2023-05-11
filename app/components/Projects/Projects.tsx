import { getRepositories } from "@root/data/github";
import { Suspense } from "react";
import LoadingProjects from "./LoadingProjects";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const data = await getRepositories();

  const projects = data.filter(d => d.topics && d.topics.includes('project'));

  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-2xl p-1 w-min border-b-2 border-port-font">Proyectos</h2>
      </div>
      <Suspense fallback={<LoadingProjects />}>
        <div className='' id='projects'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4'>
            {/* @ts-ignore Async Server Component */}
            {projects.map(project => <ProjectCard project={project} key={project.full_name} />)}
          </div>
        </div >
      </Suspense>
    </>
  )
}