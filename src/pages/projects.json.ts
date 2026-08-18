import type { APIRoute } from 'astro';
import projects from '@data/projects.json'

export const GET: APIRoute = () => {
  const response = projects.filter(project => project.display);

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
