import { useEffect } from "react"

interface Props<T> {
    data: T[]
    fetchData: () => void
    loading: boolean
}

export const useData = <T>({data, fetchData, loading}:Props<T>): Omit<Props<T>, 'fetchData'> => {

    useEffect(()=>{
        fetchData()
    },[])

  return {
    data, 
    loading
  }
}
