// import { useEffect, useState } from "react"
// import { Product } from "@/Models/Product"
// import { URL_PRODUCTS } from "@/constants/service.constant"
// import { baseService } from "@/Services/base.service"


// interface PropsUseProducts {
//   products: Product[]
//   createProduct: (object: any) => Promise<any>
// }

// export const useProducts = (): PropsUseProducts => {

//   const [products, setProducts] = useState<Product[]>([])

//   const createProduct = (product:any) => {
//     return baseService(URL_PRODUCTS).createFile<any>(product)
//   }

//   useEffect(() => {
//     baseService(URL_PRODUCTS).list<Product>()
//       .then(products => {
//         setProducts(products)
//       })
//   }, [])

  
//   return {
//     products,
//     createProduct
//   }
// }
