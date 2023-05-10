import { API_URL } from "@root/data/api";
import { getRepositories } from "@root/data/github";
import { IUserRepo } from "@root/data/interfaces/UserRepo";
import { Suspense } from "react";
import ProjectCard from "./ProjectCard";
import styles from './Projects.module.css';

export default async function Projects() {
  const data = await getRepositories();

  const projects = data.filter(d => d.topics?.includes('project'));
  return (
    <Suspense fallback={<p>Cargando ...</p>}>
      <div className={styles.main} id='projects' >
        <h2>Proyectos</h2>
        <div className={styles.listgrid}>
          {/* @ts-ignore Async Server Component */}
          {projects.map(project => <ProjectCard project={project} key={project.full_name} />)}
        </div>
      </div>
    </Suspense>
  )
}
