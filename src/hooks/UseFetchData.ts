// src/hooks/UseFetchData.ts
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useFetchData(page: number = 1, itemsPerPage: number = 10) {
  const { data, error, isLoading } = useSWR(
    `/api/proxy/fakestuff?page=${page}&itemsPerPage=${itemsPerPage}`,
    fetcher
  )

  return {
    data,
    error,
    loading: isLoading,
  }
}