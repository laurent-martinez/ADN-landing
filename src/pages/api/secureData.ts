import type { NextApiRequest, NextApiResponse } from 'next'
import GetToken from './UseFetchToken';
async function fetchToken() {
    try {
      const existingToken = localStorage.getItem('apiToken');
      const tokenDate = localStorage.getItem('apiTokenDate');
      const today = new Date().toISOString().split('T')[0];
  
      if (existingToken && tokenDate === today) {
        console.log('Token récupéré du localStorage');
        return existingToken;
      }
  
      const token = await GetToken(); // 'GetToken' s'occupera également de stocker le nouveau token dans le localStorage
      console.log('Nouveau token récupéré et stocké');
      localStorage.setItem('apiTokenDate', today); // Stocker la date du token
      return token;
    } catch (error) {
      console.error(`Erreur lors de la récupération du token: ${error}`);
      throw error;
    }
  }

// pages/api/secureData.ts

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page, itemsPerPage } = req.query;
  const token = await fetchToken();
  try {
    // Ajoutez des logs pour déboguer
    console.log('Fetching data with params:', { page, itemsPerPage });
    console.log('API URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
    console.log('Token available:', !!token);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/aunction?page=${page}&itemsPerPage=${itemsPerPage}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // Log l'erreur complète
    console.error('Detailed error:', error);
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
}