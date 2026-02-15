import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GENERALPRODUCTMODE } from "@/constants/GeneralProduct.constants";
import { GET_IMAGE_BY_COLOR_FROM_COLORIMAGESSIZES, GET_IMAGES_FROM_COLORIMAGESSIZE } from "@/helpers/GetImages";
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore";
import { TypeActions } from "@/Models/TypeActions";
import { CarouselProductGeneral } from "@@/CarouselsComponents/CarouselProductGeneral/CarouselProductGeneral";
import { PlusIcon } from "@@/icons/PlusIcon";
import { InfoGeneralProduct } from "@@/Infos/InfoGeneralProduct/InfoGeneralProduct";
import { Loading } from "@@/Loading/Loading";
import { Tag } from "@@/Tag/Tag";
import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle";
import { AdminOptions } from "../../components/AdminOptions/AdminOptions";
import { ADMIN_MODE } from "@/constants/AdminMode.constants";
import { useProductIndividualStore } from "@/libs/store/zustand/useProductIndividualStore";
import { BackIcon } from "@@/icons/BackIcon";
import { GET_COLORS_FROM_COLORIMAGESSIZES } from "@/helpers/GetColors";
import { IndividualProductCard } from "@@/Cards/IndividualProductCard/IndividualProductCard";

import "./GeneralProduct.css"
import { PATH_ADMIN } from "@/helpers/pathAdmin";
import { ModalComponent } from "@@/modals/ModalComponent/ModalComponent";
import { useModalStore } from "@/libs/store/zustand/useModalStore";
import { CounterV2 } from "@@/CounterV2/CounterV2";
import { useCartStore } from "@/libs/store/zustand/useCartStore";
import { useCartToggleStore } from "@/libs/store/zustand/useCartToggleStore";
import { GET_PRODUCT_INDIVIDUAL_BY_COLOR } from "@/helpers/GetProductIndividualByColor";
import { PRODUCTINDIVIDUAL_TO_PRODUCTPAY } from "@/helpers/productIndividualToProductPay";
import { useCounterStore } from "@/libs/store/zustand/useCounter";

export const GeneralProduct = () => {
    const { pathname } = useLocation()

    const { generalProductId } = useParams()
    const navigate = useNavigate();

    const currentCounter = useCounterStore(state => state.currentCounter)
    const addProduct  = useCartStore(state => state.addProduct)
    const toggleCart = useCartToggleStore(state => state.toggle)


    const getGPById = useGeneralProductStore(state => state.getGPById)
    const generalProduct = useGeneralProductStore(state => state.generalProduct)
    const loading = useGeneralProductStore(state => state.loading)

    const getProductsIndiByGPId = useProductIndividualStore(state => state.getProductsIndiByGPId)
    const productsByGPId = useProductIndividualStore(state => state.products)
    const loadingPI = useProductIndividualStore(state => state.loading)
    const deleteProductById = useProductIndividualStore(state => state.deleteProductById)
    
    const setInfo = useModalStore(state=> state.setInfo)
    const info = useModalStore(state=> state.info)
    const toggleModal = useModalStore(state=> state.toggle)
    
    const [img, setImg] = useState("")
    const [currentColor, setCurrentColor] = useState("")
    
    const handleColors = (color:string): void => {
        setImg(GET_IMAGE_BY_COLOR_FROM_COLORIMAGESSIZES(generalProduct[0].colorImageSizes, color))
        setCurrentColor(color)
    }


    const navigateOptions = (type: TypeActions, path:string) => {
        navigate(PATH_ADMIN(pathname) + path)
    }
    
    const addCart =()=>{
        let product = GET_PRODUCT_INDIVIDUAL_BY_COLOR(productsByGPId, currentColor)
        
        console.log({generalProduct, productsByGPId,currentColor, product})
        let productPay = PRODUCTINDIVIDUAL_TO_PRODUCTPAY(product, generalProduct[0].price)
        addProduct(productPay, currentCounter)
        toggleCart()
    }

    useEffect(() => {
        if (generalProductId) {
            getGPById(generalProductId)
                .then(generalProduct=>{
                    if(generalProduct.length && generalProduct[0].colorImageSizes.length){
                        setImg(generalProduct[0].colorImageSizes[0].image)
                        setCurrentColor(generalProduct[0].colorImageSizes[0].color)
                    }
                }).catch(err=>console.log({err}))
            getProductsIndiByGPId(generalProductId)
        }
    }, [])

    return (
        <section className="container">
            <BackIcon  onClick={() => navigate(-1)}/>
            <Loading isLoading={loading} />
            {generalProduct.length && (
                <section >
                    <TitleSubtitle
                        title={generalProduct[0].title}
                        subtitle="INT123456789"
                    />
                    <section className="generalProduct">
                        <section className="carouselGeneralProduct">
                            <CarouselProductGeneral
                                getCurrentImage={() => { }}
                                imgs={GET_IMAGES_FROM_COLORIMAGESSIZE(generalProduct[0].colorImageSize)}
                                img={img}
                                currentImage={0}
                                mode={GENERALPRODUCTMODE.EDIT}
                            />
                        </section>
                        <section>
                            <InfoGeneralProduct
                                currency="COP"
                                price={generalProduct[0].price}
                                description={generalProduct[0].description}
                                isVisible={true}
                                colors={GET_COLORS_FROM_COLORIMAGESSIZES(generalProduct[0].colorImageSizes)}
                                currentColor={generalProduct[0].colorImageSizes.length 
                                    ? generalProduct[0].colorImageSizes[0].color
                                    : ""
                                }
                                handleColors={handleColors}
                            />
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
                        
                    </section>

                    <section className="actions">
                        <AdminOptions
                            typeEvent={(type)=>navigateOptions(
                                type, 
                                "/generalProduct/create/categroyId/:categoryId/subcategoryId/:subCategoryId"
                            )}
                            type="btns"
                        />
                    </section>

                    <section className="generalsTags">
                        <h3>Tags</h3>
                        <p>Las etiquetas juegan un papel mínimo para ayudar a las personas a encontrar prendas relacionadas con su contenido favorito.</p>
                        <section className="tags">
                            {
                                generalProduct[0]?.adaptedTags.length &&
                                generalProduct[0].adaptedTags.map(tag=> (
                                    <Tag 
                                        key={tag.id} 
                                        title={tag.name} 
                                    />
                                ))
                            }
                        </section>
                    </section>

                    <section className="individualProducts">
                        <h3>Productos individuales</h3>
                        <p>Las etiquetas juegan un papel mínimo para ayudar a las personas a encontrar prendas relacionadas con su contenido favorito.</p>

                        <section className="containerCards">
                            {pathname.includes('/admin/') ? (
                                <>
                                    <section className="PIfromGP">
                                        <section className="createProduct">
                                            <section>
                                                <h4>Crear product individual</h4>
                                            </section>
                                            <section className="containerPlus">
                                                <section className="plus" onClick={(type)=>navigateOptions(
                                                        "add", 
                                                        "/productIndividual/create/"+generalProduct[0].id
                                                    )}>
                                                    <PlusIcon />
                                                </section>
                                            </section>
                                        </section>
                                    </section>
                                </>
                            ):(
                                <>
                                    No hay productos individuales
                                </>
                            )}
                            
                            {productsByGPId.length && 
                                productsByGPId.map(({id,title,description, color, size, urlImage})=>(
                                <section
                                    key={id}
                                    className="PIfromGP"
                                >
                                    <section>
                                        <IndividualProductCard
                                            id={id}
                                            title={title}
                                            subtitle={description}
                                            price={generalProduct[0].price}
                                            color={color}
                                            img={urlImage?.length ? urlImage[0].url : ""}
                                            size={size}
                                        />
                                        <AdminOptions 
                                            typeEvent={(type)=>{
                                                if(type === ADMIN_MODE.add){
                                                    navigateOptions(
                                                        type, 
                                                        "/productIndividual/create/"+generalProduct[0].id
                                                    )
                                                }
                                                if(type === ADMIN_MODE.edit){
                                                    navigateOptions(
                                                        type, 
                                                        "/productIndividual/edit/"+id+"/generalProductId/"+generalProduct[0].id
                                                    )
                                                }
                                                if(type === ADMIN_MODE.delete){
                                                    toggleModal()
                                                    setInfo(id)
                                                }
                                            }} 
                                        />
                                    </section>
                                </section>
                            ))}
                        </section>
                    </section>
                </section>
            )}
            <ModalComponent 
                title="¿Estas seguro de eliminar?"
                description="esta eliminacion es irreversible"
                trigger={<></>}
                content={<></>}
                confirmAction={()=> {
                    deleteProductById(info)
                        .then(res=> console.log(res))

                }}
                cancelAction={()=> {}}
            />
        </section>
    )
}
