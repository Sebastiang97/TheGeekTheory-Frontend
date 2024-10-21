import "./product.css"
import { GET_COLORS } from "@/helpers/GetColors"
import { FILTER_SIZE, GET_SIZES } from "@/helpers/GetSizes"
import { useProductStore } from "@/libs/store/zustand/useProductStore"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { Product } from "@/Models/Product"
import { SubCategory } from "@/Models/SubCategory"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Category } from "@/Models/Category"
import { AdminMode } from "@/Models/Admin"
import { inputProductAdminFields, productActions } from "./actions.constant"
import { subActions, subInputAdminFields } from "../SubCategories/actions.constant"
import { categoryActions, categoryInputAdminFields } from "../Categories/actions.constant"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { Loading } from "@@/Loading/Loading"
import { AdminModeSubCategory } from "../../components/AdminModeSubCategory/AdminModeSubCategory"
import { AdminModeProduct } from "../../components/AdminModeProduct/AdminModeProduct"
import { AdminModeCategory } from "../../components/AdminModeCategory/AdminModeCategory"
// import { TypeActions } from "@/Models/TypeActions"
// import { ADMIN_MODE } from "@/constants/AdminMode.constants"
// import { useNavigate } from "react-router-dom"
// import { CategoryList } from "@@/Lists/CategoryList/CategoryList"
// import { ActionsAdmin } from "./ActionsAdmin"
// import { getMessageToast } from "@/libs/toast/toast"
// import { ListColor } from "@@/Lists/ListColor/ListColor"
// import { ListSize } from "@@/Lists/ListSize/ListSize"
// import { PreviewProductUsers } from "@@/PreviewProductsUser/PreviewProductsUser"
// import { AdminOptions } from "../../components/AdminOptions/AdminOptions"
// import { GENERAL_ERROR_CREATE_MESSAGE, GENERAL_ERROR_DELETE_MESSAGE, GENERAL_ERROR_UPDATE_MESSAGE, GET_ERROR_MESSAGE, GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"

export const Admin = () => {
  const [mode, setMode] = useState<AdminMode>({
    product: { mode: "view" },
    category: { mode: "view" },
    sub: { mode: "view" }
  })

  const { t } = useTranslation(["translation"])
  // const navigate = useNavigate()
  
  const categories = useCategoryStore(state => state.categories)
  const categoryLoading = useCategoryStore(state => state.loading)
  const listCategories = useCategoryStore(state => state.list)
  // const createCategory = useCategoryStore(state => state.createCategory)
  // const deleteCategoryById = useCategoryStore(state => state.deleteCategoryById)
  // const updateCategory = useCategoryStore(state => state.updateCategory)

  // const list = useProductStore(state => state.list)
  const productsSubById = useProductStore(state => state.productsSubById)
  const getProductsBySubId = useProductStore(state => state.getProductsBySubId)
  const productLoading = useProductStore(state => state.loading)
  // const createProduct = useProductStore(state => state.createProduct)
  // const updateProduct = useProductStore(state => state.updateProduct)
  // const deleteProductById = useProductStore(state => state.deleteProductById)
  
  // const createSubCategory = useSubCategoryStore(state => state.createSubCategory)
  // const deleteSubById = useSubCategoryStore(state => state.deleteSubById)
  // const updateSubCategory = useSubCategoryStore(state => state.updateSubCategory)
  const subLoading = useSubCategoryStore(state => state.loading)
  const getSubByCategoryId = useSubCategoryStore(state => state.getSubByCategoryId)

  const [product, setProduct] = useState<Product>({} as Product)
  const [subCategory, setSubCategory] = useState<SubCategory>({} as SubCategory)
  const [category, setCategory] = useState<Category>({} as Category)
  const [sizes, setSizes] = useState<string[]>([])
  const [size, setSize] = useState<string>("")
  const [colors, setColors] = useState<string[]>([])
  const [color, setColor] = useState<string>("")

  const addProperties = (currentProduct: Product, products: Product[]): void => {
    setProduct(currentProduct)
    setSizes(GET_SIZES(products))
    setSize(currentProduct.size)
    setColor(currentProduct.color)
    setColors(GET_COLORS(products, currentProduct.size))
  }

  const changeProductByColor = (color: string) => {

    const product = productsSubById.find(product => product.color === color && size === product.size)

    if (product) {
      addProperties(product, productsSubById)
    }
  }

  const changeProductBySize = (size: string) => {

    const product = productsSubById.find(product => product.size === size)
    if (product) {
      addProperties(product, productsSubById)
    }
  }

  const getSubCategoryAndProduct = (category: Category) => {
    setCategory(category)
    getSubByCategoryId(category.id)
      .then(subByCategoryId => {
        setSubCategory(subByCategoryId[0])
        getProductsBySubId(subByCategoryId[0]?.id)
        .then(products => {
            if (products.length) {
              addProperties(products[0], products)
            }
          }).catch(err => {
            console.log(err)
          })
      }).catch(err => {
        console.log(err)
      })
  }

  // const handleCategoryOptions = (type: TypeActions, id: string): void => {
  //   if(type === ADMIN_MODE.delete){
  //     deleteCategoryById(category?.id)
  //       .then(res=>{
  //         console.log(categories)
  //         categories.length && getSubCategoryAndProduct(categories[0])
  //         GET_SUCCESS_MESSAGE("Categoria eliminada correctamente")
  //       })
  //       .catch(err=>{
  //         console.log(err)
  //       })
  //     return 
  //   }
  //   setMode(prev=> {return {...prev, category: { mode: type }}})
  // }

  // const handleSubCategoryOptions = (type: TypeActions) =>{
  //   if(type === ADMIN_MODE.delete){
  //     deleteSubById(subCategory?.id)
  //       .then(res=>{
  //         GET_SUCCESS_MESSAGE("SubCategoria eliminada correctamente")
  //       })
  //       .catch(err=>{
  //         console.log(err)
  //       })
  //     return 
  //   }
  //   setMode(prev=> {return {...prev, sub: { mode: type }}})
  // }

  // const handleOptionsProducts = (type: TypeActions) => {
  //   if(type === ADMIN_MODE.delete){
  //     deleteProductById(product?.id)
  //       .then(res=>{
  //         productsSubById.length && addProperties(productsSubById[0], productsSubById)
  //         GET_SUCCESS_MESSAGE("Producto eliminado correctamente")
  //       })
  //       .catch(err=>{
  //         GET_ERROR_MESSAGE(GENERAL_ERROR_DELETE_MESSAGE)
  //       })
  //     return 
  //   }
  //   setMode(prev=> {return {...prev, product: { mode: type }}})
  // }

  // const handleActionProduct = (productData:FormData, isCancel:boolean, urlImages: any[])=>{
  //   if(isCancel){
  //     setMode(prev=> {return {...prev, product: { mode: "view" }}})
  //     return 
  //   }

  //   productData.append('subCategoryId', subCategory.id)
  //   productData.append('categoryId', category.id)
  //   productData.append('typeStamping', "typeStamping")

  //   if(mode.product.mode === "add"){
  //     createProduct(productData)
  //       .then(product=>{
  //         setProduct(product)
  //         GET_SUCCESS_MESSAGE("Producto agregado correctamente")
  //       }).catch(error=>{
  //         GET_ERROR_MESSAGE(GENERAL_ERROR_CREATE_MESSAGE)
  //       })
  //   }

  //   if(mode.product.mode === "edit"){
  //     updateProduct(product.id, productData)
  //       .then(product=>{
  //         setProduct(product)
  //         GET_SUCCESS_MESSAGE("Producto actualizado correctamente")
  //       }).catch(error=>{
  //         GET_ERROR_MESSAGE(GENERAL_ERROR_UPDATE_MESSAGE)

  //       })
  //   }
  //   setMode(prev=> {return {...prev, product: { mode: "view" }}})

  // }
  
  // const handleActionSub = (subData:FormData, isCancel:boolean, urlImages: any[])=>{
  //   if(isCancel){
  //     setMode(prev=> {return {...prev, sub: { mode: "view" }}})
  //     return 
  //   }
    
  //   subData.append('categoryId', category.id)
  //   if(mode.sub.mode === "add"){
  //     createSubCategory(subData )
  //       .then(_=>{
  //         GET_SUCCESS_MESSAGE("SubCategory agregada correctamente")
  //         setMode(prev=> {return {...prev, sub: { mode: "view" }}})
  //       }).catch(error=>{
  //         console.log(error)
  //       })
  //   }

  //   if(mode.sub.mode === "edit"){
  //     updateSubCategory(subCategory.id, subData)
  //       .then(subCategory=>{
  //         console.log(subCategory)
  //         GET_SUCCESS_MESSAGE("SubCategory actualizada correctamente")
  //       })
  //       .catch(err=>{
  //         console.log(err)
  //       })
  //   }
  //   setMode(prev=> {return {...prev, sub: { mode: "view" }}})
  // }

  // const handleActionCategory = (values: FormData, isCancel:boolean, urlImages: any[]) =>{
  //   if(isCancel){
  //     setMode(prev=> {return {...prev, category: { mode: "view" }}})
  //     return 
  //   }
  //   const categoryForm = Object.fromEntries(values.entries());
    
  //   if(mode.category.mode === "add"){
  //     console.log(categoryForm)
  //     createCategory(categoryForm)
  //       .then(category=>{
  //         GET_SUCCESS_MESSAGE("Category agregada correctamente")
  //         console.log(category)
  //       }).catch(error=>{
  //         console.log(error)
  //       })
  //   }

  //   if(mode.category.mode === "edit"){
      
  //     updateCategory(category.id, categoryForm)
  //       .then(subCategory=>{
  //         GET_SUCCESS_MESSAGE("Category actualizada correctamente")
  //         console.log(subCategory)
  //         // setCategory(subCategory)
  //       })
  //       .catch(err=>{
  //         console.log(err)
  //       })
  //   }
  //   setMode(prev=> {return {...prev, category: { mode: "view" }}})
  // }

  const handleMode = (mode:any) =>{
    setMode(prev=> {return {...prev, ...mode}})
  }

  const handleDeleteCategory = () => {

  }

  const handleUpdateCategory = (category:Category) => {

  }

  const handleDeleteSub = () => {
    setSubCategory({} as SubCategory)
  }

  const handleUpdateSub = (sub:SubCategory) => {
    setSubCategory(sub)
  }

  const handleDeleteProduct = () => {
    productsSubById.length && addProperties(productsSubById[0], productsSubById)
  }

  const handleUpdateProduct = (product:Product) => {
    setProduct(product)
  }

  useEffect(() => {
    
    listCategories()
      .then(categories=>{
        getSubCategoryAndProduct(categories[0])
      })
      .catch(error=>{
        console.log(error)
      })
  }, [])

  return (
    <div className="container">
      <Loading isLoading={productLoading || subLoading || categoryLoading}/>
      <div className="adminTitle">
        <h2>{t("components.admin.products")}</h2>
      </div>

      <>

        <AdminModeCategory 
          mode={mode}
          category={category}
          categories={categories}
          categoryInputAdminFields={categoryInputAdminFields}
          categoryActions={categoryActions}
          getSubCategoryAndProduct={getSubCategoryAndProduct}
          handleChangeMode={handleMode}
          handleDeleteCategory={handleDeleteCategory}
          handleUpdateCategory={handleUpdateCategory}
        />

        <AdminModeSubCategory 
          mode={mode}
          category={category}
          categories={categories}
          subCategory={subCategory}
          subInputAdminFields={subInputAdminFields}
          subActions={subActions}
          handleChangeMode={handleMode}
          handleDeleteSub={handleDeleteSub}
          handleUpdateSub={handleUpdateSub}
        />

        <AdminModeProduct
          mode={mode}
          product={product}
          productsSubById={productsSubById}
          category={category}
          subCategory={subCategory}
          inputProductAdminFields={inputProductAdminFields}
          productActions={productActions}
          colors={colors}
          color={color}
          changeProductByColor={changeProductByColor}
          sizes={sizes}
          size={size}
          changeProductBySize={changeProductBySize}
          handleChangeMode={handleMode}
          handleDeleteProduct={handleDeleteProduct}
          handleUpdateProduct={handleUpdateProduct}
        />
        
        {/* {(mode.category.mode === "add" || mode.category.mode === "edit") && (
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
        )} */}

        {/* {(mode.sub.mode === "add" || mode.sub.mode === "edit") &&  (
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
        )} */}

        

        {/* {(mode.product.mode === "add" || mode.product.mode === "edit") && (
          <ActionsAdmin 
            getProductData={handleActionProduct} 
            initialValues={{...product, size: FILTER_SIZE(products), currentSize: product.size }}
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
              typeEvent={handleSubCategoryOptions}
            />
          </section>
        )} */}
      </>
    </div>
  )
}


