import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BackIcon } from "@@/icons/BackIcon"
import { GeneralProductCard } from "@@/Cards/GeneralProductCard/GeneralProductCard"
import { FilterComponent } from "@@/Sheets/FilterComponent/FilterComponent"
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore"
import { AdminOptions } from "@/pages/Admin/components/AdminOptions/AdminOptions"

import "./CatalogGeneralProducts.css"
import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { TypeActions } from "@/Models/TypeActions"
import { LIMIT } from "@/constants/Paginate"
import { Pagination } from "@/Models/Pagination"
import { GeneralProduct } from "@/Models/GeneralProduct"
import { Loading } from "@@/Loading/Loading"
import { CategoryList } from "@@/Lists/CategoryList/CategoryList"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { Category } from "@/Models/Category"
import { ModalComponent } from "@@/modals/ModalComponent/ModalComponent"
import { useModalStore } from "@/libs/store/zustand/useModalStore"

export const CatalogGeneralProducts = () => {
  const [generalProduct, setGeneralProduct] = useState<Pagination<GeneralProduct[]>>()
  // const [categoryId, setCategoryId] = useState("")
  // const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  

  const listCategories = useCategoryStore(state=> state.list)
  const categories = useCategoryStore(state=> state.categories)

  const getGPSubCategoryId = useGeneralProductStore(state=> state.getGPSubCategoryId)
  const generalProducts = useGeneralProductStore(state=> state.generalProducts)
  const deleteGeneralProductById = useGeneralProductStore(state=> state.deleteGeneralProductById)
  
  // const loading = useGeneralProductStore(state=> state.loading)
  const getFilter = useGeneralProductStore(state => state.getFilter)
  const loading = useGeneralProductStore(state => state.loading)
  const toggle = useModalStore(state=> state.toggle)
  const setInfo = useModalStore(state=> state.setInfo)
  const info = useModalStore(state=> state.info)
  
  
  const navigateOptions = (type: TypeActions, id:string): void => {
    if (type === ADMIN_MODE.add) {
      navigate("/generalProduct/create/categroyId/1d0be84d-b0e0-4e5c-8b48-10686f748473/subcategoryId/d998e9d8-ce57-4f69-9bdd-f4766626d1fb")
    }
    
    if (type === ADMIN_MODE.view) {
      navigate("/generalProduct/"+id)
    }

    if (type === ADMIN_MODE.delete) {
      toggle()
      setInfo(id)
    }
  }

  const handlerfilter = (query:any) => {
    if(Object.values(query).length){
      getFilter({
        subCategoryId: query.subCategoryId ? query.subCategoryId : "",
        cursor: "",
        direction: "next",
        limit: LIMIT,
        orderBy: query.orderBy ? query.orderBy : "",
        tags : query.tags?.length ? query.tags : []
      })
      .then(generalProduct=>{
        console.log({generalProduct})
        setGeneralProduct(generalProduct)
      })
    }
  }

  const getCurrentCategoryId = (category: Category)=>{
    console.log({category})
  }
  
  const deleteGeneralProduct = (id:string)=>{
    deleteGeneralProductById(id)
      .then(res=>{
        console.log(res)
      })

  }

  useEffect(()=>{
    listCategories()
      
    getGPSubCategoryId("d998e9d8-ce57-4f69-9bdd-f4766626d1fb")
      .then(res=>{
      })

    getFilter({
      subCategoryId: "",
      cursor: "",
      direction: "next",
      limit: LIMIT,
      orderBy: "desc",
      tags : [""]
    })
      .then(generalProduct=>{
        console.log({generalProduct})
        setGeneralProduct(generalProduct)
      })
   

  }, [])
  
  return (
    <>
      <Loading isLoading={loading} />
      <section className="container flex justify-between gap-5">
        <BackIcon  onClick={() => navigate(-1)}/>
        <CategoryList 
          categories={categories} 
          currentCategory={categories[0]} 
          getCurrentCategoryId={getCurrentCategoryId} 
          typeEvent={()=>{}}
        />
      </section>
      <section className="container flex justify-between gap-5">
        <section className="filterSidebar">
          <FilterComponent 
            getFilters={handlerfilter}
          />
        </section>
        <section className="generalProducts">
          {
            generalProduct?.content.length ? (
              generalProduct.content.map(({id, title, description, price, colorImageSizes}) =>(
                <section className="cardContainer" key={id}>
                  <GeneralProductCard
                    id={id}
                    title={title}
                    subtitle={description}
                    price={price}
                    colorImageSizes={colorImageSizes}
                  />
                  <AdminOptions 
                    typeEvent={(type)=>navigateOptions(
                      type, 
                      id
                    )} 
                  />
                </section>
              ))
            ) : (
              <>
                no hayt
              </>
            )
          }
         
        </section>
        {/* <Pagination handlePagination={handlePaginate} /> */}
      </section>
        <ModalComponent 
          title="¿Estas seguro de eliminar?"
          description="esta eliminacion es irreversible"
          trigger={<></>}
          content={<></>}
          confirmAction={()=> deleteGeneralProduct(info)}
          cancelAction={()=> {}}
        />
    </>
  )
}
