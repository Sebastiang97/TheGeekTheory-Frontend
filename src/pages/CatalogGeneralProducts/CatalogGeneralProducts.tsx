import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BackIcon } from "@@/icons/BackIcon"
import { FilterIcon } from "@@/icons/FilterIcon"
import { GeneralProductCard } from "@@/Cards/GeneralProductCard/GeneralProductCard"
import { FilterComponent } from "@@/Sheets/FilterComponent/FilterComponent"
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore"
import { AdminOptions } from "@/pages/Admin/components/AdminOptions/AdminOptions"

import "./CatalogGeneralProducts.css"
import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { TypeActions } from "@/Models/TypeActions"

export const CatalogGeneralProducts = () => {

  const navigate = useNavigate()
  
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const getGPSubCategoryId = useGeneralProductStore(state=> state.getGPSubCategoryId)
  const generalProducts = useGeneralProductStore(state=> state.generalProducts)
  // const loading = useGeneralProductStore(state=> state.loading)

  const navigateOptions = (type: TypeActions, id:string): void => {
    if (type === ADMIN_MODE.add) {
      navigate("/generalProduct/create/categroyId/c5062dbc-0fb1-41dc-8297-b9b003dc1d7a/subcategoryId/71a360b5-36d2-4047-b553-a33b6290df98")
    }
    
    if (type === ADMIN_MODE.view) {
      navigate("/generalProduct/"+id)
    }
  }

  useEffect(()=>{
    getGPSubCategoryId("71a360b5-36d2-4047-b553-a33b6290df98")
      .then(res=>{
      })
  }, [])
  
  return (
    <>
      <section className="container flex justify-between gap-5">
        <BackIcon  onClick={() => navigate(-1)}/>
        <div className=" ">
            
          <button
            className={"secondary mx-3"}
            onClick={() => {}}
            >
            mujeres
          </button>
          <button
            className={"secondary"}
            onClick={() => {}}
            >
            hombres
          </button>
              
        </div>
        <FilterIcon onClick={()=> {
            console.log({isOpenFilter})
            setIsOpenFilter(!isOpenFilter)}
          }
        />
      </section>
      
      <section className="container flex justify-between gap-5">
        <section className="generalProducts">
          {
            generalProducts.length ? (
              generalProducts.map(({id, title, description, price, colorImageSizes}) =>(
                <section key={id}>
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
        
      </section>
      <FilterComponent 
        isOpenFilter={isOpenFilter} 
        setIsOpenFilter={setIsOpenFilter}
      />
      
    </>
  )
}
