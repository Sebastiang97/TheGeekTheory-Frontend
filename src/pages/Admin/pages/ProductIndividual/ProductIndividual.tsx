import { ADMIN_MODE } from "@/constants/AdminMode.constants";
import { TypeActions } from "@/Models/TypeActions";
import { GENERALPRODUCTMODE } from "@/constants/GeneralProduct.constants";
import { GET_IMAGES_FROM_COLORIMAGESSIZE } from "@/helpers/GetImages";
import { useProductIndividualStore } from "@/libs/store/zustand/useProductIndividualStore";
import { CarouselProductGeneral } from "@@/CarouselsComponents/CarouselProductGeneral/CarouselProductGeneral";
import { InfoGeneralProduct } from "@@/Infos/InfoGeneralProduct/InfoGeneralProduct";
import { Loading } from "@@/Loading/Loading";
import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminOptions } from "../../components/AdminOptions/AdminOptions";
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore";
import { InfoProductIndividual } from "@@/Infos/InfoProductIndividual/InfoProductIndividual";
import { ListColorPicker } from "@@/Lists/ListColorPicker/ListColorPicker";
import { GET_COLORS_FROM_COLORIMAGESSIZE } from "@/helpers/GetColors";
import { ListSize } from "@@/Lists/ListSize/ListSize";
import { FILTER_SIZE_BY_COLOR, GET_SIZES_FROM_COLORIMAGESIZE } from "@/helpers/GetSizes";
import { FILTER_CURRENT_IMAGE_BY_COLOR, FILTER_POSITION_CURRENT_IMAGE_BY_COLOR } from "@/helpers/GetCurrentImage";
import { BackIcon } from "@@/icons/BackIcon";

export const ProductIndividual = () => {
    
    const { generalProductId } = useParams()
    const navigate = useNavigate();

    // const getProductsIndiByGPId = useProductIndividualStore(state => state.getProductsIndiByGPId)
    // const product = useProductIndividualStore(state => state.product)
    // const loadingPI = useProductIndividualStore(state => state.loading)

    const [currentImage, setCurrentImage] = useState<number>(0)
    const [size, setSize] = useState<string[]>([])
    const [currentColor, setCurrentColor] = useState<string>("")

    const getGPById = useGeneralProductStore(state => state.getGPById)
    const generalProduct = useGeneralProductStore(state => state.generalProduct)
    const loading = useGeneralProductStore(state => state.loading)

    const [img, setImg] = useState("")


    const handleOptions = (type: TypeActions): void => {
        if (type === ADMIN_MODE.add) {
            navigate("/productIndividual/create/"+generalProductId)
        }
    }

    const handleColors = (color:string): void => {
        setCurrentColor(color)
        setSize(FILTER_SIZE_BY_COLOR(generalProduct[0].colorImageSizes, color))
        setCurrentImage(FILTER_POSITION_CURRENT_IMAGE_BY_COLOR(generalProduct[0].colorImageSizes, color))
        setImg(FILTER_CURRENT_IMAGE_BY_COLOR(generalProduct[0].colorImageSizes,color))

    }

    useEffect(() => {
        if (generalProductId) {
            getGPById(generalProductId)
                .then(generalProduct=>{
                    setCurrentColor(generalProduct[0].colorImageSizes?.length ? generalProduct[0].colorImageSizes[0].color : "")
                    setSize(generalProduct[0].colorImageSizes?.length ? generalProduct[0].colorImageSizes[0].sizes:[])
                    setCurrentImage(0)
                    setImg(generalProduct[0].colorImageSizes?.length ? generalProduct[0].colorImageSizes[0].image : "")

                })
        }
    }, [])
    
    return (
        <section className="container">
            <Loading isLoading={loading} />
            <BackIcon  onClick={() => navigate(-1)}/>
            
            {generalProduct.length && (
                <>
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
                                mode={GENERALPRODUCTMODE.EDIT}
                                currentImage={currentImage}
                            />
                        </section>
                        <section className="infoProduct">
                            <InfoProductIndividual
                                currency="COP"
                                price={generalProduct[0].price}
                                description={generalProduct[0].description}
                                isVisible={true}
                            />
                            <section>
                                <h3>Color</h3>
                            </section>
                            <ListColorPicker
                                changeColor={handleColors}
                                colors={GET_COLORS_FROM_COLORIMAGESSIZE(generalProduct[0].colorImageSize)}
                                currentColor={currentColor}
                            />
                            <section>
                                <h3>Size</h3>
                            </section>
                            <ListSize
                                sizes={GET_SIZES_FROM_COLORIMAGESIZE(generalProduct[0].colorImageSize)}
                                currentSize={GET_SIZES_FROM_COLORIMAGESIZE(generalProduct[0].colorImageSize)[0]}
                                changeProductBySize={()=>{}}
                            />
                        </section>
                    </section>
                    <section className="actions">
                        <AdminOptions
                            typeEvent={handleOptions}
                            type="btns"
                        />
                    </section>
                </>
            )}
        </section>
    )
}
