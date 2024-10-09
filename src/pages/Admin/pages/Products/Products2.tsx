import { GET_COLORS } from "@/helpers/GetColors"
import { FILTER_SIZE, GET_SIZES } from "@/helpers/GetSizes"
import { useProductStore } from "@/libs/store/zustand/useProductStore"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { Product } from "@/Models/Product"
import { SubCategory } from "@/Models/SubCategory"
import { TypeActions } from "@/Models/TypeActions"
import { CategoryList } from "@@/Lists/CategoryList/CategoryList"
import { ListColor } from "@@/Lists/ListColor/ListColor"
import { ListSize } from "@@/Lists/ListSize/ListSize"
import { PreviewProductUsers } from "@@/PreviewProductsUser/PreviewProductsUser"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { AdminOptions } from "../../components/AdminOptions/AdminOptions"
import "./product.css"
import { ActionsAdmin } from "./ActionsAdmin"
import { Category } from "@/Models/Category"
import { AdminMode } from "@/Models/Admin"
import { inputProductAdminFields, productActions } from "./actions.constant"
import { subActions, subInputAdminFields } from "../SubCategories/actions.constant"
import { categoryActions, categoryInputAdminFields } from "../Categories/actions.constant"
import { useNavigate } from "react-router-dom"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { ADMIN_MODE } from "@/constants/AdminMode.constants"

export const Products2 = () => {
  const [mode, setMode] = useState<AdminMode>({
    product: { mode: "view" },
    category: { mode: "view" },
    sub: { mode: "view" }
  })

  const { t } = useTranslation(["translation"])
  const list = useProductStore(state => state.list)
  const navigate = useNavigate()

  const categories = useCategoryStore(state => state.categories)
  const listCategories = useCategoryStore(state => state.list)
  const deleteCategoryById = useCategoryStore(state => state.deleteCategoryById)

  const getSubByCategoryId = useSubCategoryStore(state => state.getSubByCategoryId)

  const productsSubById = useProductStore(state => state.productsSubById)
  const getProductsBySubId = useProductStore(state => state.getProductsBySubId)

  const [product, setProduct] = useState<Product>({} as Product)

  const [subCategory, setSubCategory] = useState<SubCategory>({} as SubCategory)

  const [products, setProducts] = useState<Product[]>([])

  const createProduct = useProductStore(state => state.createProduct)
  const createCategory = useCategoryStore(state => state.createCategory)
  const createSubCategory = useSubCategoryStore(state => state.createSubCategory)
  const deleteSubById = useSubCategoryStore(state => state.deleteSubById)


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

    const product = productsSubById.find(product => product.color === color)
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
            setProducts(products)
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

  const handleCategoryOptions = (type: TypeActions, id: string): void => {
    console.log(type, id)
    if(type === ADMIN_MODE.delete){
      deleteCategoryById(category?.id)
        .then(res=>{
          console.log("first")
        })
        .catch(err=>{
          console.log(err)
        })
      return 
    }
    setMode(prev=> {return {...prev, category: { mode: type }}})
  }

  const handleSubCategoryOptions = (type: TypeActions) =>{
    console.log(type, subCategory?.id)
    if(type === ADMIN_MODE.delete){
      deleteSubById(subCategory?.id)
        .then(res=>{
          console.log("first")
        })
        .catch(err=>{
          console.log(err)
        })
      return 
    }
    setMode(prev=> {return {...prev, sub: { mode: type }}})
  }

  const handleOptionsProducts = (type: TypeActions) => {
    console.log(type, product.id)
    setMode(prev=> {return {...prev, product: { mode: type }}})
  }

  const handleActionProduct = (productData:FormData, isCancel:boolean)=>{
    console.log(isCancel)
    if(isCancel){
      setMode(prev=> {return {...prev, product: { mode: "view" }}})
      return 
    }

    productData.append('subCategoryId', subCategory.id)
    productData.append('categoryId', category.id)
    productData.append('typeStamping', "typeStamping")

    if(mode.product.mode === "add"){
      createProduct(productData)
        .then(product=>{
          console.log(product)
          setProduct(product)
        }).catch(error=>{
          console.log(error)
        })
    }

    if(mode.product.mode === "edit"){
      createProduct(productData)
        .then(product=>{
          console.log(product)
          setProduct(product)
        }).catch(error=>{
          console.log(error)
        })
    }
    setMode(prev=> {return {...prev, product: { mode: "view" }}})

  }
  
  const handleActionSub = (subData:FormData, isCancel:boolean)=>{
    console.log(isCancel)
    if(isCancel){
      setMode(prev=> {return {...prev, sub: { mode: "view" }}})
      return 
    }
    
    subData.append('categoryId', category.id)
    if(mode.sub.mode === "add"){
      createSubCategory(subData )
        .then(_=>{
          setMode(prev=> {return {...prev, sub: { mode: "view" }}})
        }).catch(error=>{
          console.log(error)
        })
    }

    if(mode.sub.mode === "edit"){
      for (const [key, value] of subData.entries()) {
        console.log(`${key}: ${value}`);
      }
    }
    setMode(prev=> {return {...prev, sub: { mode: "view" }}})
  }

  const handleActionCategory = (values: FormData, isCancel:boolean) =>{
    if(isCancel){
      setMode(prev=> {return {...prev, category: { mode: "view" }}})
      return 
    }
    const categoryForm = Object.fromEntries(values.entries());
    
    if(mode.category.mode === "add"){
      console.log(categoryForm)
      createCategory(categoryForm)
        .then(category=>{
          console.log(category)
        }).catch(error=>{
          console.log(error)
        })
    }

    if(mode.category.mode === "edit"){
      
    }
    setMode(prev=> {return {...prev, category: { mode: "view" }}})
  }

  useEffect(() => {
    list()
    listCategories()
  }, [])

  return (
    <div className="container">
      <div className="adminTitle">
        <h2>{t("components.admin.products")}</h2>
      </div>

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
              categories={categories}
              getCurrentCategoryId={getSubCategoryAndProduct}
              typeEvent={handleCategoryOptions}
            />
            )}
          </>
        )}

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

        {(mode.product.mode === "add" || mode.product.mode === "edit") && (
          <ActionsAdmin 
            getProductData={handleActionProduct} 
            initialValues={{...product, size: FILTER_SIZE(products) }}
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
        )}
      </>
    </div>
  )
}


