import { useEffect, useState } from "react"
import { baseService } from "@/Services/base.service"

export const useBaseCRUD = <T>(url:string): {elements: T[]} => {

  const [elements, setElements] = useState<T[]>([])

  useEffect(() => {
    baseService(url).list<T>()
      .then(elements => {
        setElements(elements)
      })
  }, [])

  
  return {
    elements
  }
}
