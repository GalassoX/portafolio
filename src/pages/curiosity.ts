import type { APIRoute } from 'astro';
import randomCuriosities from '@data/random_curiosities.json'

export const GET: APIRoute = () => {
  const randomCuriosity = randomCuriosities[Math.floor(Math.random() * randomCuriosities.length)];

  const response = {
    text: randomCuriosity
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json', }
    }
  );
}
