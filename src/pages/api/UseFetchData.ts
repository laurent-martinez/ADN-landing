import axios from 'axios';
import useSWR from 'swr';

export interface Data {
  sale: any;
  id: number;
  date: string;
  code: number;
  designation: string;
  estimationMin: number;
  estimationMax: number;
  images: null;
}
export default function useFetchData() {
  const fetcher = (url : string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR('/api/highlight/batch', fetcher);
  // const dataLimited = data?.slice(0, 10);
  const newData = data?.map((item : Data) => {
    const newItem = {
      images: item.images,
      code: item.sale.code,
      minEstimation: item.estimationMin,
      maxEstimation: item.estimationMax,
      designation: item.designation,
      date: item.sale.date,
      id: item.id,
    };
    return newItem;
  });
  console.log(data);
  return {
    data: newData,
    error,
    loading: isLoading,
  };
}
