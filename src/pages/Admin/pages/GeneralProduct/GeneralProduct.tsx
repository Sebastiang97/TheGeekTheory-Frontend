import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
export const GeneralProduct = () => {
    const { generalProductId } = useParams()
    const navigate = useNavigate();

    const getGPById = useGeneralProductStore(state => state.getGPById)
    const generalProduct = useGeneralProductStore(state => state.generalProduct)
    const loading = useGeneralProductStore(state => state.loading)

    const getProductsIndiByGPId = useProductIndividualStore(state => state.getProductsIndiByGPId)
    const productsByGPId = useProductIndividualStore(state => state.products)
    const loadingPI = useProductIndividualStore(state => state.loading)

    const [img, setImg] = useState("")
    
    const handleColors = (color:string): void => {
        setImg(GET_IMAGE_BY_COLOR_FROM_COLORIMAGESSIZES(generalProduct[0].colorImageSizes, color))
    }

    const navigateCreate = (): void => {
        navigate("/productIndividual/"+generalProduct[0].id)
    }

    const navigateOptions = (type: TypeActions, path:string) => {
        console.log({type, path})
        if (type === ADMIN_MODE.add) {
            navigate(path)
        }

    }

    useEffect(() => {
        if (generalProductId) {
            getGPById(generalProductId)
                .then(generalProduct=>{
                    generalProduct.length && 
                        generalProduct[0].colorImageSizes.length && 
                            setImg(generalProduct[0].colorImageSizes[0].image)
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
                                    <Tag title={tag.name} />
                                ))
                            }
                        </section>
                    </section>

                    <section className="individualProducts">
                        <h3>Productos individuales</h3>
                        <p>Las etiquetas juegan un papel mínimo para ayudar a las personas a encontrar prendas relacionadas con su contenido favorito.</p>

                        <section className="containerCards">
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
                                            typeEvent={(type)=>navigateOptions(
                                                type, 
                                                "/productIndividual/create/"+generalProduct[0].id
                                            )} 
                                        />
                                    </section>
                                </section>
                            ))}
                        </section>
                    </section>
                </section>
            )}
        </section>
    )
}
