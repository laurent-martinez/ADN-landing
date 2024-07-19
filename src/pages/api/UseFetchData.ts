import axios from 'axios';
import { useState, useEffect } from 'react';
import GetToken from './UseFetchToken';

const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 secondes

async function fetchWithRetry(url: string, token: string, retries = 0): Promise<any> {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 503 && retries < MAX_RETRIES) {
      console.log(`Tentative ${retries + 1} échouée, nouvelle tentative dans ${RETRY_DELAY / 1000} secondes...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return fetchWithRetry(url, token, retries + 1);
    }
    throw error;
  }
}

export default function useFetchData() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await GetToken(); // Assurez-vous que cette fonction existe et fonctionne correctement
        const result = await fetchWithRetry('https://fakeurl.fr/api', token);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, error, loading };
}
