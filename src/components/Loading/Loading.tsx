import { IMAGES } from "@/constants/images/images"
import "./loading.css"

interface Props {
    isLoading: boolean
}

export const Loading = ({ isLoading }: Props) => {
    return (
        <>
            {isLoading ? (
                <section className="loading">
                    <section>
                        <div>
                            <img src={IMAGES.logoBlack} alt="" />
                        </div>
                        <section id="progressbar">
                            <span id="loading"></span>
                            <span id="loading2">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </section>
                    </section>
                </section>
            ) : (
                <></>
            )}
        </>
    )
}
