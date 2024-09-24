// import { useEffect, useState } from "react"
// import { baseService } from "@/Services/base.service"
// import { Category } from "@/Models/Category"
// import { URL_CATEGORY } from "@/constants/service.constant"

// export const useCategories = () => {

//   const [category, setProducts] = useState<Category[]>([])

//   useEffect(() => {
//     baseService(URL_CATEGORY).list<Category>()
//       .then(category => {
//         setProducts(category)
//       })
//   }, [])

  
//   return {
//     category
//   }
// }
