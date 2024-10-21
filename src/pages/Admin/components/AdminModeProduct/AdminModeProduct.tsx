import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { AdminMode } from "@/Models/Admin"
import { ActionsAdmin } from "../../pages/Products/ActionsAdmin"
import { SubCategory } from "@/Models/SubCategory"
import { Actions, InputFields } from "@/Models/InputFields"
import { AdminOptions } from "../AdminOptions/AdminOptions"
import { TypeActions } from "@/Models/TypeActions"
import { GENERAL_ERROR_CREATE_MESSAGE, GENERAL_ERROR_DELETE_MESSAGE, GENERAL_ERROR_UPDATE_MESSAGE, GET_ERROR_MESSAGE, GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"
import { Product } from "@/Models/Product"
import { useProductStore } from "@/libs/store/zustand/useProductStore"
import { Category } from "@/Models/Category"
import { FILTER_SIZE } from "@/helpers/GetSizes"
import { PreviewProductUsers } from "@@/PreviewProductsUser/PreviewProductsUser"
import { ListColor } from "@@/Lists/ListColor/ListColor"
import { ListSize } from "@@/Lists/ListSize/ListSize"

interface Props {
  mode: AdminMode
  product: Product
  productsSubById: Product[]
  category:Category
  subCategory: SubCategory
  inputProductAdminFields: InputFields[]
  productActions: Actions
  colors: string[]
  color: string
  changeProductByColor: (s:string)=>void 
  sizes: string[]
  size: string
  changeProductBySize: (s:string)=>void 
  handleChangeMode: (mode:any)=>void
  handleDeleteProduct: () => void
  handleUpdateProduct: (product:Product)=> void
}
export const AdminModeProduct = ({
  mode, 
  productsSubById, 
  product, 
  subCategory, 
  category, 
  inputProductAdminFields, 
  productActions, 
  colors ,
  color,
  changeProductByColor,
  sizes,
  size,
  changeProductBySize,
  handleChangeMode,
  handleDeleteProduct,
  handleUpdateProduct
}:Props) => {
  const createProduct = useProductStore(state => state.createProduct)
  const updateProduct = useProductStore(state => state.updateProduct)
  const deleteProductById = useProductStore(state => state.deleteProductById)

  const handleOptionsProducts = (type: TypeActions) => {
    if(type === ADMIN_MODE.delete){
      deleteProductById(product?.id)
        .then(res=>{
          // productsSubById.length && addProperties(productsSubById[0], productsSubById)
          handleDeleteProduct()
          GET_SUCCESS_MESSAGE("Producto eliminado correctamente")
        })
        .catch(err=>{
          GET_ERROR_MESSAGE(GENERAL_ERROR_DELETE_MESSAGE)
        })
      return 
    }
    handleChangeMode({product: { mode: type }})
  }

  const handleActionProduct = (productData:FormData, isCancel:boolean, urlImages: any[])=>{
    if(isCancel){
      handleChangeMode({product: { mode: "view" }})

      return 
    }

    productData.append('subCategoryId', subCategory.id)
    productData.append('categoryId', category.id)
    productData.append('typeStamping', "typeStamping")

    if(mode.product.mode === "add"){
      createProduct(productData)
        .then(product=>{
          // setProduct(product)
          handleUpdateProduct(product)
          GET_SUCCESS_MESSAGE("Producto agregado correctamente")
        }).catch(error=>{
          GET_ERROR_MESSAGE(GENERAL_ERROR_CREATE_MESSAGE)
        })
    }

    if(mode.product.mode === "edit"){
      updateProduct(product.id, productData)
        .then(product=>{
          // setProduct(product)
          GET_SUCCESS_MESSAGE("Producto actualizado correctamente")
        }).catch(error=>{
          GET_ERROR_MESSAGE(GENERAL_ERROR_UPDATE_MESSAGE)

        })
    }
    handleChangeMode({product: { mode: "view" }})

  }

  return (
    <>
      {(mode.product.mode === "add" || mode.product.mode === "edit") && (
        <ActionsAdmin 
          getProductData={handleActionProduct} 
          initialValues={{...product, size: FILTER_SIZE(productsSubById), currentSize: product.size }}
          mode={mode.product.mode}
          inputAdminFields={inputProductAdminFields}
          actions={productActions}
        />
      )}
        
      {(productsSubById.length && product?.id && mode.product.mode === "view") && (
        <section className="products">
          <article className="cardProducts">
            <div className="preview">
              <PreviewProductUsers
                images={product.urlImage as any}
                currentImage={product.urlImage[0].url}
              />
            </div>
            <section className="info">
              <>
                <header>
                  <h3>
                    {product.name}
                  </h3>
                  <small>COP<span>{product.price}</span></small>
                </header>
                <p className="content">
                  {product.description}
                </p>
                <section className="colors">
                  <header>
                    <h4>Color</h4>
                  </header>
                  <ListColor
                    colors={colors}
                    currentColor={color}
                    changeProductByColor={changeProductByColor}
                  />
                </section>

                <section className="sizes">
                  <header>
                    <h4>Size</h4>
                  </header>
                  <ListSize
                    sizes={sizes}
                    currentSize={size}
                    changeProductBySize={changeProductBySize}
                  />
                  <p className="content">Guia de tallas</p>
                </section>
                <p className="content">cantidad: {product.quantity}</p>
              </>
            </section>
          </article>
          <section className="actionsProducts">
            <button className="tertiary" onClick={()=>handleOptionsProducts("delete")}>Eliminar</button>
            <button className="secondary" onClick={()=>handleOptionsProducts("edit")}>Editar</button>
            <button onClick={()=>handleOptionsProducts("add")}>Añadir</button>
          </section>
        </section>
      )}

      {(!productsSubById.length && mode.product.mode === "view" && subCategory?.id && product?.id) && (
        <section className="subCategory">
          <div>
            <h3>Crear Producto</h3>
            <p>no hay productos crea uno</p>
          </div>
          <AdminOptions
            typeEvent={handleOptionsProducts}
          />
        </section>
      )}
    </>
  )
}
