import "./CRM.css"
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

export const CRM = () => {
    const [mode, setMode] = useState<AdminMode>({
        product: { mode: "view" },
        category: { mode: "view" },
        sub: { mode: "view" }
    })

    const { t } = useTranslation(["translation"])

    const categories = useCategoryStore(state => state.categories)
    const categoryLoading = useCategoryStore(state => state.loading)
    const listCategories = useCategoryStore(state => state.list)

    const productsSubById = useProductStore(state => state.productsSubById)
    const getProductsBySubId = useProductStore(state => state.getProductsBySubId)
    const productLoading = useProductStore(state => state.loading)

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


    const handleMode = (mode: any) => {
        setMode(prev => { return { ...prev, ...mode } })
    }

    const handleDeleteCategory = () => {
        categories.length && getSubCategoryAndProduct(categories[0])
    }

    const handleUpdateCategory = (category:Category) => {
        setCategory(category)
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
            .then(categories => {
                getSubCategoryAndProduct(categories[0])
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="container">
            <Loading isLoading={productLoading || subLoading || categoryLoading} />
            <div className="adminTitle">
                <h2>{t("components.admin.products")}</h2>
            </div>

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
        </div>
    )
}


