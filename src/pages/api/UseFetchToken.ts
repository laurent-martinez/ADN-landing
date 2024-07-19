import axios from 'axios';

async function UseFetchToken(username: string, password: string, maxRetries = 3): Promise<string> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await axios.post('https://fakeurl.fr/api/blabla', 
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const { token } = response.data;
      console.log('Token:', token);
      // Côté serveur, nous ne pouvons pas utiliser localStorage
      // Vous devrez gérer le stockage du token différemment, peut-être dans une base de données ou un cache serveur

      return token;
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed: ${error}`);
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }

  throw lastError ?? new Error('Unknown error occurred while fetching token');
}

async function GetToken() {
  // eslint-disable-next-line max-len
  const username = process.env.NEXT_PUBLIC_API_USERNAME as string;
  const password = process.env.NEXT_PUBLIC_API_PASSWORD as string;
  if (!username || !password) {
    throw new Error('API credentials are not set in environment variables');
  }
  
  const token = await UseFetchToken(username, password);
  return token;
}

export default GetToken;
