import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { AdminMode } from "@/Models/Admin"
import { ActionsAdmin } from "../../pages/Products/ActionsAdmin"
import { SubCategory } from "@/Models/SubCategory"
import { Actions, InputFields } from "@/Models/InputFields"
import { AdminOptions } from "../AdminOptions/AdminOptions"
import { TypeActions } from "@/Models/TypeActions"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"
import { Category } from "@/Models/Category"

interface Props {
  mode: AdminMode
  category: Category
  categories: Category[]
  subCategory: SubCategory
  subInputAdminFields: InputFields[]
  subActions: Actions
  handleChangeMode: (mode:any)=>void
  handleDeleteSub: () => void
  handleUpdateSub: (sub:SubCategory)=> void
}
export const AdminModeSubCategory = ({
  mode, 
  category, 
  categories, 
  subCategory, 
  subInputAdminFields, 
  subActions, 
  handleChangeMode,
  handleDeleteSub,
  handleUpdateSub
}:Props) => {
    const createSubCategory = useSubCategoryStore(state => state.createSubCategory)
    const updateSubCategory = useSubCategoryStore(state => state.updateSubCategory)
    const deleteSubById = useSubCategoryStore(state => state.deleteSubById)

    const handleActionSub = (subData:FormData, isCancel:boolean, urlImages: any[])=>{
        if(isCancel){
          handleChangeMode({sub: { mode: "view" }})
          return 
        }
        
        subData.append('categoryId', category.id)
        if(mode.sub.mode === "add"){
          createSubCategory(subData )
            .then(_=>{
              GET_SUCCESS_MESSAGE("SubCategory agregada correctamente")
              handleChangeMode({sub: { mode: "view" }})
            }).catch(error=>{
              console.log(error)
            })
        }
    
        if(mode.sub.mode === ADMIN_MODE.edit){
          updateSubCategory(subCategory.id, subData)
            .then(subCategory=>{
              handleUpdateSub(subCategory)
              GET_SUCCESS_MESSAGE("SubCategory actualizada correctamente")
            })
            .catch(err=>{
              console.log(err)
            })
        }
        handleChangeMode({sub: { mode: "view" }})

    }

    const handleSubCategoryOptions = (type: TypeActions) =>{
        if(type === ADMIN_MODE.delete){
          deleteSubById(subCategory?.id)
            .then(res=>{
              handleDeleteSub()
              GET_SUCCESS_MESSAGE("SubCategoria eliminada correctamente")
            })
            .catch(err=>{
              console.log(err)
            })
          return 
        }
        handleChangeMode({sub: { mode: type}})

    }

  return (
    <>
        {(mode.sub.mode === "add" || mode.sub.mode === "edit") &&  (
          <ActionsAdmin 
            getProductData={handleActionSub}
            initialValues={subCategory}
            mode={mode.sub.mode} 
            inputAdminFields={subInputAdminFields}
            actions={subActions}
          />
        )}
        {mode.sub.mode === "view" && (
          <>
            {subCategory?.id && (
              <section className="subCategory">
                <div>
                  <h3>{subCategory.name}</h3>
                  <p>{subCategory.code}</p>
                </div>
                <AdminOptions
                  typeEvent={handleSubCategoryOptions}
                />
              </section>
            )}
          </>
        )}

        {(mode.sub.mode === "view" && !subCategory?.id && categories.length) && (
          <section className="subCategory">
            <div>
              <h3>Crear SubCategoria</h3>
              <p>no hay subcategorias crea una</p>
            </div>
            <AdminOptions
              typeEvent={handleSubCategoryOptions}
            />
          </section>
        )}
    </>
  )
}
