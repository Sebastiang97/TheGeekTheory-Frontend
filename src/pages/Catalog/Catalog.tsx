import { useEffect, useState } from "react"
import { PreviewProductUsers } from "@@/PreviewProductsUser/PreviewProductsUser"
import { CategoryList } from "@@/Lists/CategoryList/CategoryList"
import { Counter } from "@@/Counter/Counter"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { useProductStore } from "@/libs/store/zustand/useProductStore"
import { Product } from "@/Models/Product"
import "./catalog.css"
import { CustomProduct } from "@@/CustomProduct/CustomProduct"
import { GET_SIZES } from "@/helpers/GetSizes"
import { GET_COLORS } from "@/helpers/GetColors"
import { ListSize } from "@@/Lists/ListSize/ListSize"
import { ListColor } from "@@/Lists/ListColor/ListColor"
import { usePrintStore } from "@/libs/store/zustand/usePrintStore"
import { ListPrint } from "@@/Lists/ListPrint/ListPrint"
import { useCustomProduct } from "@/libs/store/zustand/useCustomProduct"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { Category } from "@/Models/Category"

export const Catalog = () => {
    const [file, setFile] = useState<File>()

    const [showDesign, setshowDesign] = useState<boolean>(false)

    const setCurrentUrl = useCustomProduct(state => state.setCurrentUrl)

    const prints = usePrintStore(state => state.prints)
    const loading = usePrintStore(state => state.loading)
    const listPrint = usePrintStore(state => state.list)

    const categories = useCategoryStore(state => state.categories)
    const listCategories = useCategoryStore(state => state.list)

    const getSubByCategoryId = useSubCategoryStore(state => state.getSubByCategoryId)

    const productsSubById = useProductStore(state => state.productsSubById)
    const getProductsBySubId = useProductStore(state => state.getProductsBySubId)

    const [category, setCategory] = useState<Category>({} as Category)
    const [product, setProduct] = useState<Product>({} as Product)
    const [sizes, setSizes] = useState<string[]>([]) 
    const [size, setSize] = useState<string>("")
    const [colors, setColors] = useState<string[]>([])
    const [color, setColor] = useState<string>("")

    const addProperties = (currentProduct:Product, products: Product[]):void =>{
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

    const handleDesign = () => {
        setshowDesign(true)
    }

    const handlePrint = (file: File) =>{
        setshowDesign(false)
        setFile(file)
    }

    useEffect(()=>{
        listCategories().then(categories => {
                getSubCategoryAndProduct(categories[0])
            })
            .catch(error => {
                console.log(error)
            })
            
        listPrint()
    },[])

    return (
        <>
            <CategoryList 
                currentCategory={category}
                categories={categories}
                getCurrentCategoryId={getSubCategoryAndProduct} 
            />

            {(productsSubById.length && Object.keys(product).length) && (
                <section className="products">
                    <article className="cardProducts">
                        <div className="preview">
                            {!showDesign 
                                ? (
                                    <PreviewProductUsers
                                        images={product.urlImage as any}
                                        currentImage={product.urlImage[0].url}
                                    />
                                ) 
                                : (
                                    <CustomProduct 
                                        img={product.urlImage[0].url}
                                        handlePrint={handlePrint}
                                    />
                                )
                            }
                        </div>
                        <section className="info">
                            {!showDesign 
                                ? (
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
                                    </>
                                )
                                : (
                                    <ListPrint
                                        prints={prints}
                                        loading={loading}
                                        isShow={true}
                                        handleSelected={(d)=>{setCurrentUrl(d)}}
                                    />
                                )
                            }

                            <section className="actions my-3">
                                <button onClick={handleDesign}>Agregar Diseño</button>
                            </section>

                            {!showDesign 
                                && (
                                    <>
                                        <section className="actions">
                                            <Counter
                                                initialState={1}
                                                product={product}
                                                file={file}
                                            />
                                        </section>
                                        <section className="charges">
                                            <p className="content">Cargos</p>
                                        </section>
                                    </>
                                ) 
                            } 
                            
                        </section>
                    </article>
                </section>
            )}
        </>
    )
}

