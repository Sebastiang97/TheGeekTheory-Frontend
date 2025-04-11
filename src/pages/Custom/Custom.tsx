import { ChangeEvent, useEffect, useRef, useState } from "react"
import { PreviewProductUsers } from "@@/PreviewProductsUser/PreviewProductsUser"
import { CategoryList } from "@@/Lists/CategoryList/CategoryList"
import { Counter } from "@@/Counter/Counter"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { useProductStore } from "@/libs/store/zustand/useProductStore"
import { Product } from "@/Models/Product"
import "./Custom.css"
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
import { ListPosition } from "@@/Lists/ListPosition/ListPosition"
import { POSITION_PRINT, POSITION_PRINT_KEY, POSITION_SHIRT, POSITION_SHIRT_KEY, PositionShirtPrint, PositionSP } from "@/constants/PositionShirtPrint"
import { AddDesignSheetComponent } from "@@/Sheets/AddDesignSheetComponent/AddDesignSheetComponent"
import { CustomProducts } from "@@/CustomProduct/CustomProducts"
import { CustomPositionProduct } from "./CustomPositionProduct"
import { useCartStore } from "@/libs/store/zustand/useCartStore"
import { useCartToggleStore } from "@/libs/store/zustand/useCartToggleStore"
import { productToProductPay } from "@/helpers/productToProductPay"
import { CounterV2 } from "@@/CounterV2/CounterV2"
import { useCounterStore } from "@/libs/store/zustand/useCounter"
import { INIT_CUSTOM } from "@/Models/Stamped"
import { Print } from "@/Models/Print"

export const Custom = () => {
    const currentCounter = useCounterStore(state => state.currentCounter)

    const addProduct  = useCartStore(state => state.addProduct)
    const toggle = useCartToggleStore(state => state.toggle)

    const [file, setFile] = useState<File[]>([])
    
    const [position, setPosition] = useState([
        "",""
    ])
    const [isFirst, setIsfirst] = useState(true)
    const [urlFront, setUrlFront] = useState("")
    const [urlBack, setUrlBack] = useState("")

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

    const handlePrint = (f: File, type:string, position:string) =>{
        console.log(f)
        const nuevoNombre = type + '.jpg';

        
        const nuevoArchivo = new File(
            [f], 
            nuevoNombre,      
            { type: f.type } 
        );
        console.log({nuevoArchivo})

        setFile((prev:File[])=> [...prev, nuevoArchivo])
    }

    const [stamped, setStamped] = useState<Print[]>(INIT_CUSTOM())

    const handleInfo = (info:any)=>{
        setFile([])
        const frontPosition:string = info.front.position
        const backPosition:string = info.back.position

        let stamped:Print[]  = []

        stamped = [
            {
                position: POSITION_SHIRT_KEY.FRONT,
                size: frontPosition,
                url: info.front.url
            },
            {
                position: POSITION_SHIRT_KEY.BACK,
                size: backPosition,
                url: info.back.url
            }
        ]
        setStamped(stamped)
        setUrlFront("")
        setUrlBack("")
        setPosition([
            "",
            ""
        ]) 
        
        setIsfirst(!isFirst)
        setPosition([
            frontPosition,
            backPosition
        ]) 
        setUrlFront(info.front.url)
        setUrlBack(info.back.url)
    }

    const [showAddDesign, setShowAddDesign] = useState(false)

    const addCart =()=>{
        console.log({file})
        let productPay = productToProductPay(product)
        productPay.print = stamped
        productPay.file = file
        addProduct(productPay, currentCounter)
        toggle()
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
                            
                            {/* <CustomProducts 
                                img={product.urlImage[0].url}
                                print={urlFront}
                                position={position[0] ? position[0]: ""}
                                type={POSITION_SHIRT_KEY.FRONT}
                                handlePrint={handlePrint}
                            />
                            
                            <CustomProducts 
                                img={product.urlImage[0].url}
                                print={urlBack}
                                position={position[1] ? position[1]: ""}
                                type={POSITION_SHIRT_KEY.BACK}
                                handlePrint={handlePrint}
                            /> */}
                            <CustomProducts 
                                img={product.urlImage[0].url}
                                print={urlFront}
                                position={stamped[0].size ? stamped[0].size: ""}
                                type={POSITION_SHIRT_KEY.FRONT}
                                handlePrint={handlePrint}
                            />
                            
                            <CustomProducts 
                                img={product.urlImage[0].url}
                                print={urlBack}
                                position={stamped[1].size ? stamped[1].size: ""}
                                type={POSITION_SHIRT_KEY.BACK}
                                handlePrint={handlePrint}
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
                            </>
                            <>
                                <button
                                    onClick={() => setShowAddDesign(!showAddDesign)}
                                    className="py-2 px-6 bg-yellow-500 text-white rounded-xl m-4"
                                >
                                    subir Imagen
                                </button>
                                <AddDesignSheetComponent 
                                    isOpen={showAddDesign}
                                    toggle={() => setShowAddDesign(!showAddDesign)}
                                    position="right"
                                    handleInfo={handleInfo}
                                />
                            </>

                            <section className="actions">
                                <div className="add">
                                    <button
                                    onClick={() => addCart()}>
                                    Agregar a tu carrito
                                    </button>
                                </div>
                                <CounterV2 />
                            </section>
                            <section className="charges">
                                <p className="content">Cargos</p>
                            </section>
                            
                            
                        </section>
                    </article>
                </section>
            )}
        </>
    )
}

