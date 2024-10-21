import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { AdminMode } from "@/Models/Admin"
import { ActionsAdmin } from "../../pages/Products/ActionsAdmin"
import { Actions, InputFields } from "@/Models/InputFields"
import { AdminOptions } from "../AdminOptions/AdminOptions"
import { TypeActions } from "@/Models/TypeActions"
import { GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"
import { Category } from "@/Models/Category"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { CategoryList } from "@@/Lists/CategoryList/CategoryList"

interface Props {
  mode: AdminMode
  category: Category
  categories: Category[]
  categoryInputAdminFields: InputFields[]
  categoryActions: Actions
  getSubCategoryAndProduct: (category: Category)=> void
  handleChangeMode: (mode:any)=>void
  handleDeleteCategory: () => void
  handleUpdateCategory: (category:Category)=> void
}
export const AdminModeCategory = ({
  mode, 
  category, 
  categories, 
  categoryInputAdminFields, 
  categoryActions, 
  getSubCategoryAndProduct, 
  handleChangeMode,
  handleDeleteCategory,
  handleUpdateCategory
}:Props) => {
  const createCategory = useCategoryStore(state => state.createCategory)
  const deleteCategoryById = useCategoryStore(state => state.deleteCategoryById)
  const updateCategory = useCategoryStore(state => state.updateCategory)

  const handleCategoryOptions = (type: TypeActions): void => {
    if(type === ADMIN_MODE.delete){
      deleteCategoryById(category?.id)
        .then(res=>{
          // categories.length && getSubCategoryAndProduct(categories[0])
          categories.length && handleDeleteCategory()
          GET_SUCCESS_MESSAGE("Categoria eliminada correctamente")
        })
        .catch(err=>{
          console.log(err)
        })
      return 
    }
    handleChangeMode({category: { mode: type }})
  }

  const handleActionCategory = (values: FormData, isCancel:boolean, urlImages: any[]) =>{
    if(isCancel){
      handleChangeMode({category: { mode: "view" }})

      return 
    }
    const categoryForm = Object.fromEntries(values.entries());
    
    if(mode.category.mode === "add"){
      createCategory(categoryForm)
        .then(category=>{
          GET_SUCCESS_MESSAGE("SubCategoria agregada correctamente")
          console.log(category)
        }).catch(error=>{
          console.log(error)
        })
    }

    if(mode.category.mode === "edit"){
      updateCategory(category.id, categoryForm)
        .then(category=>{
          GET_SUCCESS_MESSAGE("SubCategoria actualizada correctamente")
          handleUpdateCategory(category)
        })
        .catch(err=>{
          console.log(err)
        })
    }
    handleChangeMode({category: { mode: "view" }})

  }
  
  return (
    <>
      {(mode.category.mode === "add" || mode.category.mode === "edit") && (
        <ActionsAdmin 
          getProductData={handleActionCategory}
          initialValues={category}
          mode={mode.category.mode} 
          inputAdminFields={categoryInputAdminFields}
          actions={categoryActions}
        />
      )}

      {mode.category.mode === "view" && (
        <>
          {categories.length && (
            <CategoryList
              currentCategory={category}
              categories={categories}
              getCurrentCategoryId={getSubCategoryAndProduct}
              typeEvent={handleCategoryOptions}
            />
          )}
        </>
      )}

      {(mode.sub.mode === "view" && !category?.id && categories.length) && (
        <section className="subCategory">
          <div>
            <h3>Crear Categoria</h3>
            <p>no hay categoria crea una</p>
          </div>
          <AdminOptions
            typeEvent={handleCategoryOptions}
          />
        </section>
      )}
    </>
  )
}
