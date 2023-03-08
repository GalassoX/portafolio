import { API_URL } from '@root/data/api';
import { IUserRepo } from '@root/data/interfaces/UserRepo';
import colorsGh from '@root/data/json/colors.json';
import styles from './ProjectCard.module.css';

const generateProgressBar = async (repo: IUserRepo) => {
  const response = await fetch(`${API_URL}/github/repo/${repo.name}/languages`);
  const languages = await response.json() as { [key: string]: number };

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

  const { component, languages } = await generateProgressBar(project);

  return (
    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
      <div className={styles.body}>
        <h3>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        {component}
        <div className={styles.langs_list}>
          {languages.map(l => (
            <div key={l.language} className={styles.langs_list_item}>
              <span className={styles.langs_circle_color} style={{ backgroundColor: l.color }}></span>
              <p>{l.language} - {l.percent.toFixed(2)}%</p>
            </div>
          ))}
        </div>
      </div>
    </a>
  )
}