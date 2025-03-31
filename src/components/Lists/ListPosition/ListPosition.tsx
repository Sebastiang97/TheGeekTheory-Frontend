import { Formik, Form, Field } from 'formik';
import { POSITION_PRINT_KEY, POSITION_SHIRT_KEY, PositionShirtPrint } from "@/constants/PositionShirtPrint"
import { IMAGES } from '@/constants/images/images';
import "./ListPosition.css"
import { ChangeEvent, useRef, useState } from 'react';

interface Props {
    items: PositionShirtPrint[]
    handlePosition: (values: any) => void
}

export const ListPosition = ({items, handlePosition}:Props) => {
    const inputFrontRef = useRef<HTMLInputElement>(null)
    const inputBackRef = useRef<HTMLInputElement>(null)
    const inputBothRef = useRef<HTMLInputElement>(null)
    const [urlFront, setUrlFront] = useState<string>("")
    const [urlBack, setUrlBack] = useState<string>("")
    const [urlBoth, setUrlBoth] = useState<string>()
    
    const handlePic = (event: ChangeEvent<HTMLInputElement>, position:string) => {
        if (!event.target.files) return
        const file = event.target.files[0]
        const url = URL.createObjectURL(file)
        position == POSITION_SHIRT_KEY.FRONT && setUrlFront(url)
        position == POSITION_SHIRT_KEY.BACK && setUrlBack(url)
        position == POSITION_SHIRT_KEY.BOTH && setUrlBoth(url)
    }
    
  return (
    <>
    <Formik
        initialValues={{ 
            checkboxFront: false,
            checkboxBack: false,
            checkboxBoth: false,
            selectOpFront: "",
            selectOpBack: "",
            selectOpBoth: ""
        }}
        validate={(values) => {}}
        onSubmit={(values:any) => {
            console.log(values)
            values.imgFront = urlFront ?? ""
            values.imgBack = urlBack ?? ""
            values.imgBoth = urlBoth ?? ""
            handlePosition(values)
        }}
        >
        {({ values, handleChange, setFieldValue }) => (
            <Form>
                <section className='titleSection'>
                    <h3>Posicion</h3>
                </section>
                <section className="listPosition">
                    <article className="cardPosition" >
                        <div className="contImg">
                            <img src={IMAGES.tShirtFront} alt="" />
                        </div>
                        <div className="details">
                            <p>24x25</p>
                        </div>
                        <div className="select">
                            <label htmlFor="checkboxFront">Frontal</label>
                        </div>
                        <div className="select">
                            <Field
                                type="checkbox"
                                name="checkboxFront"
                                checked={values.checkboxFront}
                                onChange={(e:any)=> {
                                    setFieldValue("checkboxBoth", false)
                                    handleChange(e)
                                }}
                            />
                        </div>
                    </article>
                    <article className="cardPosition" >
                        <div className="contImg">
                            <img src={IMAGES.tShirtBack} alt="" />
                        </div>
                        <div className="details">
                            <p>24x25</p>
                        </div>
                        <div className="select">
                            <label htmlFor="checkboxBack">Atras</label>
                        </div>
                        <div className="select">
                            <Field
                                type="checkbox"
                                name="checkboxBack"
                                checked={values.checkboxBack}
                                onChange={(e:any)=> {
                                    setFieldValue("checkboxBoth", false)
                                    handleChange(e)
                                }}
                            />
                        </div>
                    </article>
                    {/* <article className="cardPosition" >
                        <div className="contImg">
                            <img src={IMAGES.tShirtDouble} alt="" />
                        </div>
                        <div className="details">
                            <p>24x25</p>
                        </div>
                        <div className="select">
                            <label htmlFor="checkboxBoth">doble</label>
                        </div>
                        <div className="select">
                            <Field
                                type="checkbox"
                                name="checkboxBoth"
                                checked={values.checkboxBoth}
                                onChange={(e:any)=> {
                                    setFieldValue("checkboxFront", false)
                                    setFieldValue("checkboxBack", false)
                                    handleChange(e)
                                }}
                            />
                        </div>
                    </article> */}
                </section> 
                {values.checkboxFront&& (
                    <>
                        <section className='titleSection'>
                            <h3>Tamaño Frontal</h3>
                        </section>
                        <img src={urlFront} alt="" />
                        <input
                            ref={inputFrontRef}
                            onChange={(e)=> handlePic(e, POSITION_SHIRT_KEY.FRONT)}
                            type="file"
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => inputFrontRef.current?.click()}
                        >
                            Cargar Imagen
                        </button>
                        <section className="listPosition">
                            <article className="cardPosition" >
                                <div className="contImg">
                                    <img src={IMAGES.letterSize} alt="" />
                                </div>
                                <div className="details">
                                    <p>24x25</p>
                                </div>
                                <div className="select">
                                    <label htmlFor="selectOpFront">Carta</label>
                                </div>
                                <div className="select">
                                    <Field
                                        type="radio"
                                        name="selectOpFront" 
                                        value={POSITION_PRINT_KEY.LETTER}
                                        checked={values.selectOpFront === POSITION_PRINT_KEY.LETTER}
                                        onChange={handleChange}
                                    />
                                </div>
                            </article>
                            <article className="cardPosition" >
                                <div className="contImg">
                                    <img src={IMAGES.tabloid} alt="" />
                                </div>
                                <div className="details">
                                    <p>24x25</p>
                                </div>
                                <div className="select">
                                    <label htmlFor="selectOpFront">Tabloide</label>
                                </div>
                                <div className="select">
                                    <Field
                                        type="radio"
                                        name="selectOpFront" 
                                        value={POSITION_PRINT_KEY.TABLOID}
                                        checked={values.selectOpFront === POSITION_PRINT_KEY.TABLOID}
                                        onChange={handleChange}
                                    />
                                </div>
                            </article>
                            <article className="cardPosition" >
                                <div className="contText">
                                    <h3>Logo</h3>
                                </div>
                                <div className="select">
                                    <label htmlFor="selectOpFront">Logo</label>
                                </div>
                                <div className="select">
                                    <Field
                                        type="radio"
                                        name="selectOpFront" 
                                        value={POSITION_PRINT_KEY.LOGO}
                                        checked={values.selectOpFront === POSITION_PRINT_KEY.LOGO}
                                        onChange={handleChange}
                                    />
                                </div>
                            </article>
                        </section>
                    </>
                )}
                {values.checkboxBack && (
                    <>
                        <section className='titleSection'>
                            <h3>Tamaño Atras</h3>
                        </section>
                        <img src={urlBack} alt="" />
                        <input
                            ref={inputBackRef}
                            onChange={(e)=> handlePic(e, POSITION_SHIRT_KEY.BACK)}
                            type="file"
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => inputBackRef.current?.click()}
                        >
                            Cargar Imagen
                        </button>
                        <section className="listPosition">
                            <article className="cardPosition" >
                                <div className="contImg">
                                    <img src={IMAGES.letterSize} alt="" />
                                </div>
                                <div className="details">
                                    <p>24x25</p>
                                </div>
                                <div className="select">
                                    <label htmlFor="selectOpBack">Carta</label>
                                </div>
                                <div className="select">
                                    <Field
                                        type="radio"
                                        name="selectOpBack"
                                        value={POSITION_PRINT_KEY.LETTER}
                                        checked={values.selectOpBack === POSITION_PRINT_KEY.LETTER}
                                        onChange={handleChange}
                                    />
                                </div>
                            </article>
                            <article className="cardPosition" >
                                <div className="contImg">
                                    <img src={IMAGES.tabloid} alt="" />
                                </div>
                                <div className="details">
                                    <p>24x25</p>
                                </div>
                                <div className="select">
                                    <label htmlFor="selectOpBack">Tabloide</label>
                                </div>
                                <div className="select">
                                    <Field
                                        type="radio"
                                        name="selectOpBack" // Todos los radio buttons tienen el mismo name
                                        value={POSITION_PRINT_KEY.TABLOID}
                                        checked={values.selectOpBack === POSITION_PRINT_KEY.TABLOID}
                                        onChange={handleChange}
                                    />
                                </div>
                            </article>
                            <article className="cardPosition" >
                                <div className="contText">
                                    <h3>Logo</h3>
                                </div>
                                <div className="select">
                                    <label htmlFor="selectOpBack">Logo</label>
                                </div>
                                <div className="select">
                                    <Field
                                        type="radio"
                                        name="selectOpBack" 
                                        value={POSITION_PRINT_KEY.LOGO}
                                        checked={values.selectOpBack === POSITION_PRINT_KEY.LOGO}
                                        onChange={handleChange}
                                    />
                                </div>
                            </article>
                        </section>
                    </>
                )}
                {/* {values.checkboxBoth && (
                    <>
                        <section className='titleSection'>
                            <h3>Mismo Estampado</h3>
                        </section>
                        <img src={urlBoth} alt="" />
                        <input
                            ref={inputBothRef}
                            onChange={(e)=> handlePic(e, POSITION_SHIRT_KEY.BOTH)}
                            type="file"
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => inputBothRef.current?.click()}
                        >
                            Cargar Imagen
                        </button>
                        <section className="listPosition">
                            <article className="cardPosition" >
                                <div className="contImg">
                                    <img src={IMAGES.letterSize} alt="" />
                                </div>
                                <div className="details">
                                    <p>24x25</p>
                                </div>
                                <div className="select">
                                    <label htmlFor="selectOpBoth">Carta</label>
                                </div>
                                <div className="select">
                                    <Field
                                        type="radio"
                                        name="selectOpBoth"
                                        value={POSITION_PRINT_KEY.LETTER}
                                        checked={values.selectOpBoth === POSITION_PRINT_KEY.LETTER}
                                        onChange={handleChange}
                                    />
                                </div>
                            </article>
                            <article className="cardPosition" >
                                <div className="contImg">
                                    <img src={IMAGES.tabloid} alt="" />
                                </div>
                                <div className="details">
                                    <p>24x25</p>
                                </div>
                                <div className="select">
                                    <label htmlFor="selectOpBoth">Tabloide</label>
                                </div>
                                <div className="select">
                                    <Field
                                        type="radio"
                                        name="selectOpBoth" 
                                        value={POSITION_PRINT_KEY.TABLOID}
                                        checked={values.selectOpBoth === POSITION_PRINT_KEY.TABLOID}
                                        onChange={handleChange}
                                    />
                                </div>
                            </article>
                            <article className="cardPosition" >
                                <div className="contText">
                                    <h3>Logo</h3>
                                </div>
                                <div className="select">
                                    <label htmlFor="selectOpBoth">Logo</label>
                                </div>
                                <div className="select">
                                    <Field
                                        type="radio"
                                        name="selectOpBoth" 
                                        value={POSITION_PRINT_KEY.LOGO}
                                        checked={values.selectOpBoth === POSITION_PRINT_KEY.LOGO}
                                        onChange={handleChange}
                                    />
                                </div>
                            </article>
                        </section>
                    </>
                )} */}

                <button 
                    type="submit"
                    disabled={
                        (values.selectOpFront =="" || urlFront =="") && 
                        (values.selectOpBack =="" || urlBack =="")
                    }
                >
                    Enviar
                </button>
                {
                    (values.selectOpFront =="" || urlFront =="") && 
                    (values.selectOpBack =="" || urlBack =="") && (
                        <small>Escoge imagen y position del estampado para el producto </small>
                    )
                }
            </Form>
        )}
        </Formik>
    </>
  )
}
