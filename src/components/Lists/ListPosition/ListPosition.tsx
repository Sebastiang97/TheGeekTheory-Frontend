import { Formik, Form, Field } from 'formik';
import { POSITION_PRINT_KEY, POSITION_SHIRT_KEY, PositionShirtPrint } from "@/constants/PositionShirtPrint"
import { IMAGES } from '@/constants/images/images';
import "./ListPosition.css"

interface Props {
    items: PositionShirtPrint[]
    handlePosition: (values: any) => void
}

export const ListPosition = ({items, handlePosition}:Props) => {

  return (
    <>
    <Formik
        initialValues={{ 
            checkboxFront: false,
            checkboxBack: false,
            selectOpFront: "",
            selectOpBack: "" 
        }}
        validate={(values) => {}}
        onSubmit={(values) => {
            handlePosition(values)
        }}
        >
        {({ values, handleChange }) => (
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </div>
                    </article>
                </section> 
                {values.checkboxFront&& (
                    <>
                        <section className='titleSection'>
                            <h3>Tamaño Frontal</h3>
                        </section>
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

                <button type="submit">Enviar</button>
            </Form>
        )}
        </Formik>
    </>
    // <section className="listPosition">
    //     {
    //         items.map(({id, img, details, label, checked})=> (
    //             <>
    //                 <article className="cardPosition" key={id} >
    //                     <div className="contImg">
    //                         <img src={img} alt="" />
    //                     </div>
    //                     <div className="details">
    //                         <p>{details}</p>
    //                     </div>
    //                     <div className="select">
    //                         <label htmlFor={label}>{label}</label>
    //                     </div>
    //                     <div className="select">
    //                         <input 
    //                             type="checkbox" 
    //                             onClick={(e: any)=> {
    //                                 checked: e.target.checked
    //                                 handlePosition({id,checked: e.target.checked})
    //                             }} 
    //                             id={label} 
    //                             name={label} 
    //                         />
    //                     </div>
    //                 </article>
    //                 {
    //                     checked && (
    //                         <> Hiiiii</>
    //                     )
    //                 }
    //             </>
    //         ))
    //     }
    // </section>
  )
}
