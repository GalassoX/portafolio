import { Suspense } from 'react';
import { getRepositorieLanguages } from '@root/data/github';
import { IUserRepo } from '@root/data/interfaces/UserRepo';
import colorsGh from '@root/data/json/colors.json';
import styles from './ProjectCard.module.css';

const generateProgressBar = async (repo: IUserRepo) => {
  const languages = await getRepositorieLanguages(repo.name);

  const sum = Object.values(languages).reduce(
    (pV, cV) => pV + cV,
    0
  );

  const percents = Object.entries(languages).map(([lang, lines]) => {
    return {
      lang: lang,
      percent: (lines / sum) * 100
    }
  });
  let colors: { color: string, language: string, percent: number }[] = [];
  let items: JSX.Element[] = [];
  percents.forEach((v, i) => {
    const color = (colorsGh as unknown as { [key: string]: { color: string; url: string; } })[v.lang];
    items.push(<span key={i} style={{ backgroundColor: color.color, width: `${v.percent}%` }}></span>);
    colors.push({ color: color.color, language: v.lang, percent: v.percent });
  });
  return {
    component: (<span className={styles.progress_code}>{items.map(i => i)}</span>),
    languages: colors
  }
}

export default async function ProjectCard({ project }: { project: IUserRepo }) {

  const { component: progressBar, languages } = await generateProgressBar(project);

  return (
    <Suspense fallback={<p>Cargando ...</p>}>
      <a href={project.html_url} target="_blank" rel="noopener noreferrer" className='bg-port-blueground-100 p-4 rounded-md transition-transform hover:scale-110 hover:drop-shadow'>
        <h3 className='text-xl underline text-port-font'>{project.name}</h3>
        <p className='my-4'>{project.description}</p>
        <p className='font-bold'>Lenguajes:</p>
        {progressBar}
        <div className={styles.langs_list}>
          {languages.map(l => (
            <div key={l.language} className='flex gap-1 items-center text-sm'>
              <span className={styles.langs_circle_color} style={{ backgroundColor: l.color }}></span>
              <p>{l.language} <span className='text-port-font'>({l.percent.toFixed(2)}%)</span></p>
            </div>
          ))}
        </div>
      </a>
    </Suspense>
  )
}