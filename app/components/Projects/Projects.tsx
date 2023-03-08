import { IUserRepo } from "@root/data/interfaces/UserRepo";
import ProjectCard from "./ProjectCard";
import styles from './Projects.module.css';

export default async function Projects() {
  const response = await fetch('http://localhost:3000/api/github/repos', { cache: 'no-store' });
  const data = await response.json() as IUserRepo[];

  const projects = data.filter(d => d.topics.includes('project'));
  return (
    <div className={styles.main}>
      <h2>Projects</h2>
      <div className={styles.listgrid}>
        {/* @ts-ignore Server Component */}
        {projects.map(project => <ProjectCard project={project} key={project.full_name} />)}
      </div>
    </div>
  )
}
