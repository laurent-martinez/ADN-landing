import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import GetToken from './UseFetchToken';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = await GetToken();
    const { url } = req.query;

    if (typeof url !== 'string') {
      throw new Error('URL parameter is missing or invalid');
    }

    const response = await axios.get(`https://fakeurl.fr/api/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in proxy API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}