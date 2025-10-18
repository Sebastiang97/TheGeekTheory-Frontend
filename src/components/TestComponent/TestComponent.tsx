import { useNavigate } from "react-router-dom"
import { BackIcon } from "@@/icons/BackIcon"
import { FilterIcon } from "@@/icons/FilterIcon"
import { useEffect, useState } from "react"
import { GeneralProductCard } from "@@/Cards/GeneralProductCard/GeneralProductCard"
import { FilterComponent } from "@@/Sheets/FilterComponent/FilterComponent"
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore"

import "./TestComponent.css"
import { AdminOptions } from "@/pages/Admin/components/AdminOptions/AdminOptions"

export const TestComponent = () => {
  const navigate = useNavigate()
  
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const getGPSubCategoryId = useGeneralProductStore(state=> state.getGPSubCategoryId)
  const generalProducts = useGeneralProductStore(state=> state.generalProducts)
  // const loading = useGeneralProductStore(state=> state.loading)

  useEffect(()=>{
    getGPSubCategoryId("72d90b73-beac-4940-9129-ba887751fa08")
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
                <>
                  <GeneralProductCard
                    key={id}
                    id={id}
                    title={title}
                    subtitle={description}
                    price={price}
                    colorImageSizes={colorImageSizes}
                  />
                  <AdminOptions 
                    typeEvent={()=>navigate("/generalProduct/"+id)} 
                  />
                  
                </>
              ))
            ) : (
              <>
                no hayt
              </>
            )
          }
          {/* <GeneralProductCard 
            title="T-shirt weird"
            subtitle="weird design t-shirt"
            price="49.000"
            url="https://studybreaks.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-11-at-1.02.36-AM-e1649664212572.png"
          /> */}
          
          {/* <article>
            <div className="containerImage">
              <img src="https://studybreaks.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-11-at-1.02.36-AM-e1649664212572.png" alt="" />
            </div>
            <div className="containerCard">
              <div className="title">T-shirt weird</div>
              <div className="subtitle">weird design t-shirt</div>
              <div className="price">$49.000</div>
              <div className="containerSizeColor">
                <div className="containerSize">
                  S,M,L,XL
                </div>
                <div className="containerColor">
                  <div 
                    className="color"
                    style={{
                      backgroundColor: '#FE5C00',
                      outline: true ? "2px solid #FE5C00" : "null"
                    }} 
                  ></div>
                  <div 
                    className="color"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: true ? "1px solid #000" : "null",
                      outline: false ? "2px solid #FE5C00" : "null"
                      
                    }} 
                  ></div>
                    <div 
                    className="color"
                    style={{
                      backgroundColor: '#247C07',
                      outline: false ? "2px solid #FE5C00" : "null"
                    }} 
                  ></div>
                    <div 
                    className="color"
                    style={{
                      backgroundColor: '#247C07',
                      outline: false ? "2px solid #FE5C00" : "null"
                    }} 
                  ></div>
                </div>
              </div>
              <div className="containerButtons">
                <button>Escoge la tuya</button>
              </div>
            </div>
            

          </article> */}
          
        </section>
        
      </section>
      <FilterComponent 
        isOpenFilter={isOpenFilter} 
        setIsOpenFilter={setIsOpenFilter}
      />
      
    </>
  )
}
