import { MarkImage } from "@@/ImageComponents/MarkImage/MarkImage"
import "./GeneralProductCard.css"
import { GroupColor } from "@@/GroupColor/GroupColor"
import { AdminOptions } from "@/pages/Admin/components/AdminOptions/AdminOptions"

interface Props{
    url         : string
    title       : string
    subtitle    : string
    price       : number
}

export const GeneralProductCard = ({url, title, subtitle, price}:Props) => {
    return (
        <section className="cardGeneral">
            <article>
                {/* <div className="containerImage">
                    <img src={url} alt="" />
                </div> */}
                <MarkImage url={url} alt="alt image"/>
                <div className="containerCard">
                    <div className="title">{title}</div>
                    <div className="subtitle">{subtitle}</div>
                    <div className="price">${price}</div>
                    <div className="containerSizeColor">
                        <div className="containerSize">
                            S,M,L,XL
                        </div>
                        <GroupColor />
                        {/* <div className="containerColor">
                            <div
                                className="color"
                                style={{
                                    backgroundColor: '#FE5C00',
                                    outline: true ? "2px solid #FE5C00" : "null"
                                }}
                            ></div>
                            <div
                                className="color"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: true ? "1px solid #000" : "null",
                                    outline: false ? "2px solid #FE5C00" : "null"

                                }}
                            ></div>
                            <div
                                className="color"
                                style={{
                                    backgroundColor: '#247C07',
                                    outline: false ? "2px solid #FE5C00" : "null"
                                }}
                            ></div>
                            <div
                                className="color"
                                style={{
                                    backgroundColor: '#247C07',
                                    outline: false ? "2px solid #FE5C00" : "null"
                                }}
                            ></div>
                        </div> */}
                    </div>
                    <div className="containerButtons">
                        <button>Escoge la tuya</button>
                    </div>
                </div>


            </article>
            <AdminOptions typeEvent={(type)=>console.log(type)} />
        </section>
    )
}
