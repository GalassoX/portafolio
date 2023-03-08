export const API_URL = process.env.VERCEL
    ? `https://${process.env.VERCEL_URL}/api`
    : 'http://localhost:3000/api';