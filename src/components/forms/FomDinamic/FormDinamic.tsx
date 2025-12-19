// import { Actions, InputFields } from '@/Models/InputFields'
// import { Formik, Form, FieldArray } from 'formik'
// import { GET_PROPS_FORMS } from './Forms.constants'
// import { MySelect, MyTextInput } from '..'
// import { useTranslation } from 'react-i18next'
// import { FormsTags } from '../FormsTags'
// import { Tag } from '@@/Tag/Tag'
// import { ImageAddItem } from '../ImageCarouselItem/ImageAddItem'
// import { GET_IMAGES_INPUT } from '@/helpers/GetImages'
// import { FormListColor } from '@@/forms/FormListColor/FormListColor'
// import { FormListSize } from '../FormListSize/FormListSize'
// import { TypeExtraParams } from './FormsDinamix.models'

// type ChangeField = {
//   key: string
//   value: InputFields
// }

// interface Props {
//   inputFields: InputFields[]
//   actions: Actions
//   getValues: (values: any, type?: string) => void,
//   getExtra: (values: TypeExtraParams) => void,
//   getOnChanges: (values: any) => void
//   // changeField?: ChangeField
// }


// export const FormDinamic = ({ inputFields, actions, getValues, getExtra, getOnChanges }: Props) => {
//   const { t } = useTranslation(["translation"])

//   return (
//     <Formik
//       initialValues={GET_PROPS_FORMS(inputFields).initialValues}
//       validationSchema={GET_PROPS_FORMS(inputFields).validationSchema}
//       onSubmit={(v) => {
//         getValues(v)
//       }}

//     >
//       {/* ({ isValid, isSubmitting, values })  */}
//       {/* {(formik) => ( */}
//       {({ isValid, isSubmitting, setFieldValue, values }) => (
//         <Form noValidate>
//           {inputFields.map(({ type, name, placeholder, label, options, ImgS, colors, sizes }) => {

//             if (type === 'input' ||
//               type === 'password' ||
//               type === 'email' ||
//               type === 'number'||
//               type === 'color') {
//               return <MyTextInput
//                 key={name}
//                 type={(type as any)}
//                 name={name}
//                 label={label}
//                 placeholder={placeholder} />

//             } else if (type === 'select') {
//               return (
//                 <MySelect
//                   key={name}
//                   label={label}
//                   name={name}
//                   options={options || []}
//                   placeholder={placeholder}
//                   onChange={e=>{ 
//                     setFieldValue(name, e)
//                     getOnChanges({name, value:e})
//                   }}
//                 >
//                   {/* <option value="">{t("components.forms.fields.placeholders.selectOption")}</option>
//                     {
//                       options?.map(({ id, label }) => (
//                         <option key={id} value={id}>{label}</option>
//                       ))
//                     } */}
//                 </MySelect>
//               )
//             } else if (type === 'arrayInput') {
//               return (
//                 <div
//                   className='field'
//                   key={name}>

//                   <label htmlFor="fileuploader" >
//                     <div>Agrega una foto </div>
//                     <div className='flex justify-center'>+</div>
//                   </label>
//                   <input
//                     id="fileuploader"
//                     name={name}
//                     type="file"
//                     onChange={(event) => {
//                       const files = event.target.files
//                       if (files) {

//                         let myFiles = Array.from(files)
//                         setFieldValue(name, myFiles)
//                         getExtra({ values: myFiles, type: "main"})
//                       }
//                     }}
//                     multiple
//                   />
//                 </div>
//               )
//             } else if (type === 'arrayInputImg') {
//               return (
//                 <div
//                   className='field'
//                   key={name}
//                 >
//                   <label >
//                     {label}
//                   </label>
//                   <ImageAddItem
//                     name={name}
//                     getImages={(fileList:FileList)=> {
//                       if (fileList) {

//                         let files = Array.from(fileList)
//                         let imgs = files.map(file=> URL.createObjectURL(file))
//                         setFieldValue(name, files)
//                         getExtra({ 
//                           values: {files,imgs}, 
//                           type: ImgS?.typeExtra ?? "main"
//                         })
//                       }
//                     }} 
//                     isMultipleImage={ImgS?.multiple === undefined ? false : ImgS?.multiple}
//                   />
//                 </div>
//               )
//             } else if (type === 'arrayColor') {
//               return (
//                 <div
//                   className='field'
//                   key={name}
//                 >
//                   <label >
//                     {label}
//                   </label>
//                  <FormListColor 
//                     changeProductByColor={(e)=>{
//                       setFieldValue(name, e)
//                       getExtra(
//                         { 
//                           values: {elements: colors?.elements, current: e}, 
//                           type: ImgS?.typeExtra ?? "colors" 
//                         }
//                       )
//                     }}
//                     colors={colors?.elements.length ? colors?.elements: []}
//                     currentColor={values[name]}
//                   />
//                 </div>
//               )
//             }else if (type === 'arraySize') {
//               return (
//                 <div
//                   className='field'
//                   key={name}
//                 >
//                   <label >
//                     {label}
//                   </label>
//                   <FormListSize
//                     changeProductBySize={(e)=>{
//                       setFieldValue(name, e)
//                       getExtra(
//                         { 
//                           values: {elements: sizes?.elements, current: e}, 
//                           type: ImgS?.typeExtra ?? "sizes" 
//                         }
//                       )
//                     }}
//                     sizes={sizes?.elements.length ? sizes?.elements: []}
//                     currentSize={values[name]}
//                   />
//                 </div>
//               )
//             } else if (type === 'checkbox') {
//               return (
//                 <div
//                   className='field'
//                   key={name}>
//                   <div className="containCheck">

//                     <div className="checkbox">
//                       <input type="checkbox" id={name} name={name} />
//                       <label htmlFor={name} className='lCheckbox'></label><br></br>
//                     </div>
//                     <label htmlFor={name}>{label}</label>
//                   </div>

//                 </div>
//               )
//             }else if (type === 'addTags'){
//               return (
//                 <>
//                   <FieldArray name={name}>
//                     {({ push, remove }) => (
//                       <>
//                         <FormsTags 
//                           key={name}
//                           type={(type as any)}
//                           name={name}
//                           label={label}
//                           placeholder={placeholder}
//                           handleValue={e=>{ 
//                             getExtra({ 
//                               values: {tag: e}, 
//                               type: ImgS?.typeExtra ?? "main"
//                             })
//                             if(values[name]?.length){
//                               let value = values[name].find((a:string)=> a === e)
//                               if(!value){
//                                 push(e)
//                               } 
//                             }else{
//                               push(e)
//                             }
//                           }}
//                         />
//                         {
//                           values[name]?.length && (
//                             <div className='fieldTags'>
//                               {
//                                 values[name]?.map((value:string, index:number) => (
//                                   <Tag 
//                                     key={index} 
//                                     title={value} 
//                                     onDelete={()=> remove(index)}
//                                     xIcon={true}
//                                   />
//                                 ))
//                               }
//                             </div>
//                           )
//                         }
//                       </>
//                     )}
//                   </FieldArray>
//                 </>
//               )
//             }


//             throw new Error(`El type: ${type}, no es soportado`)
//           })}



//           <div className={actions.class}>
//             {
//               actions.buttons.map(({ text, type }, i) => {
//                 if(type === "submit"){
//                   return (
//                     <>
//                       <button
//                         key={i}
//                         type={type}
//                         disabled={!isValid }
//                         onClick={() => getValues(values, type)}
//                       >
//                         {t(text)}
//                       </button>

//                       {/* {!isValid && (<small> - forms invalido</small>)}
//                       <br/>
//                       {isSubmitting && (<small> - forms Submitting</small>)} */}

//                     </>
//                   )
//                 }
//                 if(type === "button"){
//                   return (
//                     <button
//                       key={i}
//                       type={type}
//                       disabled={!isValid || isSubmitting}
//                       onClick={() => getValues(values, type)}
//                     >
//                       {t(text)}
//                     </button>
//                   )
//                 }
//               })
//             }
//           </div>

//         </Form>
//       )}

//     </Formik>
//   )
// }

import { Actions, InputFields } from '@/Models/InputFields'
import { Formik, Form, FieldArray, FormikValues } from 'formik'
import { GET_PROPS_FORMS } from './Forms.constants'
import { MySelect, MyTextInput } from '..'
import { useTranslation } from 'react-i18next'
import { FormsTags } from '../FormsTags'
import { Tag } from '@@/Tag/Tag'
import { ImageAddItem } from '../ImageCarouselItem/ImageAddItem'
import { GET_IMAGES_INPUT } from '@/helpers/GetImages'
import { FormListColor } from '@@/forms/FormListColor/FormListColor'
import { FormListSize } from '../FormListSize/FormListSize'
import { TypeExtraParams } from './FormsDinamix.models'
import { forwardRef, useImperativeHandle } from 'react'

export interface DynamicFormProps {
  inputFields: InputFields[]
  actions: Actions
  getValues: (values: any, type?: string) => void,
  getExtra: (values: TypeExtraParams) => void,
  getOnChanges: (values: any) => void
}

export interface DynamicFormRef {
  setFieldValue: (field: string, value: any) => void;
  getValues: () => FormikValues
  getValue: (key: string) => any
  setValues: (newValues: Partial<FormikValues>)=> void
}


// export const FormDinamic = ({ inputFields, actions, getValues, getExtra, getOnChanges }: Props) => {
export const FormDinamic = forwardRef<DynamicFormRef, DynamicFormProps>(
  ({ inputFields, actions, getValues, getExtra, getOnChanges }, ref) => {
    const { t } = useTranslation(["translation"])
    return (
      <Formik
        initialValues={GET_PROPS_FORMS(inputFields).initialValues}
        validationSchema={GET_PROPS_FORMS(inputFields).validationSchema}
        onSubmit={(v) => {
          getValues(v)
        }}

      >
        {/* ({ isValid, isSubmitting, values })  */}
        {/* {(formik) => ( */}
        {({ isValid, isSubmitting, setFieldValue, values, setValues }) => {

          useImperativeHandle(ref, () => ({
            setFieldValue: (field: string, value: any) => setFieldValue(field, value),
            getValues: () => values,
            getValue: (key: string) => values[key],
            setValues: (newValues: Partial<FormikValues>) => {
              setValues(prev => {
                  return {
                  ...prev,
                  ...newValues
                }
              })
            },
          }))
          return (
            <Form noValidate>
              {inputFields.map(({ type, name, placeholder, label, options, ImgS }) => {

                if (type === 'input' ||
                  type === 'password' ||
                  type === 'email' ||
                  type === 'number') {
                  return <MyTextInput
                    key={name}
                    type={(type as any)}
                    name={name}
                    label={label}
                    placeholder={placeholder} />

                } else if (type === 'select') {
                  return (
                    <MySelect
                      key={name}
                      label={label}
                      name={name}
                      options={options || []}
                      placeholder={placeholder}
                      onChange={e => {
                        setFieldValue(name, e)
                        getOnChanges({ name, value: e })
                      }}
                    >
                      {/* <option value="">{t("components.forms.fields.placeholders.selectOption")}</option>
                     {
                       options?.map(({ id, label }) => (
                         <option key={id} value={id}>{label}</option>
                       ))
                     } */}
                    </MySelect>
                  )
                } else if (type === 'arrayInput') {
                  return (
                    <div
                      className='field'
                      key={name}>

                      <label htmlFor="fileuploader" >
                        <div>Agrega una foto </div>
                        <div className='flex justify-center'>+</div>
                      </label>
                      <input
                        id="fileuploader"
                        name={name}
                        type="file"
                        onChange={(event) => {
                          const files = event.target.files
                          if (files) {

                            let myFiles = Array.from(files)
                            setFieldValue(name, myFiles)
                            getExtra({ values: myFiles, type: "main" })
                          }
                        }}
                        multiple
                      />
                    </div>
                  )
                } else if (type === 'arrayInputImg') {
                  return (
                    <div
                      className='field'
                      key={name}
                    >
                      <label >
                        {label}
                      </label>
                      <ImageAddItem
                        name={name}
                        getImages={(fileList: FileList) => {
                          if (fileList) {

                            let files = Array.from(fileList)
                            let imgs = files.map(file => URL.createObjectURL(file))
                            setFieldValue(name, files)
                            getExtra({
                              values: { files, imgs },
                              type: ImgS?.typeExtra ?? "main"
                            })
                          }
                        }}
                        isMultipleImage={ImgS?.multiple === undefined ? false : ImgS?.multiple}
                      />
                    </div>
                  )
                } else if (type === 'color') {
                  let inputColor = inputFields.find(input => input.type === "arrayColor")
                  if (!inputColor) {
                    throw new Error(`El type: ${type}, no tiene valor y es requerido`)
                  }
                  return (
                    <div key={name}>
                    </div>
                  )
                } else if (type === 'size') {
                  let inputSize = inputFields.find(input => input.type === "arraySize")
                  if (!inputSize) {
                    throw new Error(`El type: ${type}, no tiene valor y es requerido`)
                  }
                  return (
                    <div key={name}>
                    </div>
                  )
                } else if (type === 'checkbox') {
                  return (
                    <div
                      className='field'
                      key={name}>
                      <div className="containCheck">

                        <div className="checkbox">
                          <input type="checkbox" id={name} name={name} />
                          <label htmlFor={name} className='lCheckbox'></label><br></br>
                        </div>
                        <label htmlFor={name}>{label}</label>
                      </div>

                    </div>
                  )
                } else if (type === 'addTags') {
                  return (
                    <FieldArray name={name}>
                      {({ push, remove }) => (
                        <>
                          <FormsTags
                            key={name}
                            type={(type as any)}
                            name={name}
                            label={label}
                            placeholder={placeholder}
                            handleValue={e => {
                              getExtra({
                                values: { tag: e },
                                type: ImgS?.typeExtra ?? "main"
                              })
                              if (values[name]?.length) {
                                let value = values[name].find((a: string) => a === e)
                                if (!value) {
                                  push(e)
                                }
                              } else {
                                push(e)
                              }
                            }}
                          />
                          {
                            values[name]?.length && (
                              <div className='fieldTags'>
                                {
                                  values[name]?.map((value: string, index: number) => (
                                    <Tag
                                      key={index}
                                      title={value}
                                      onDelete={() => remove(index)}
                                      xIcon={true}
                                    />
                                  ))
                                }
                              </div>
                            )
                          }
                        </>
                      )}
                    </FieldArray>
                  )
                } else if (type === 'arrayColor') {
                  let inputColor = values["color"]
                  let totalItemsColors = Number(values["totalItemsColors"])

                  if (inputColor === undefined) {
                    throw new Error(`El type: ${type}, no tiene valor y es requerido`)
                  }
                  return (
                    <div
                      className='field'
                      key={name}
                    >
                      <label >
                        {label}
                      </label>
                      <FormListColor
                        totalItems={totalItemsColors ? totalItemsColors : 0}
                        changeColor={(current, colors, newColor) => {
                          if(newColor){
                            if(colors.length <= totalItemsColors){
                              setFieldValue(name, [...colors,newColor])
                              setFieldValue("color", newColor)
                            }else{
                              setFieldValue(name, [...colors.slice(0, colors.length-1),newColor]) 
                              setFieldValue("color", newColor) 
                              
                            }
                          }else{
                            setFieldValue(name, colors) 
                            setFieldValue("color", current)
                          }
                          getExtra(
                            {
                              values: { elements: colors, current: current },
                              type: ImgS?.typeExtra ?? "colors"
                            }
                          )
                        }}
                        colors={Array.isArray(values[name]) ? (values[name].length ? values[name] : []) : []}
                        currentColor={typeof inputColor.value === "string" ? inputColor.value : ""}
                      />
                    </div>
                  )
                }
                else if (type === 'arraySize') {
                  let inputSize = values["size"]
                  // let inputSize = inputFields.find(input => input.type === "size")
                  let totalItemsSizes = Number(values["totalItemsSizes"])
                  if (inputSize === undefined) {
                    throw new Error(`El type: ${type}, no tiene valor y es requerido`)
                  }
                  return (
                    <div
                      className='field'
                      key={name}
                    >
                      <label >
                        {label}
                      </label>
                      <FormListSize
                        totalItems={totalItemsSizes ? totalItemsSizes : 0}
                        changeSize={(current, sizes, newSize) => {
                          if(newSize){
                            if(sizes.length <= totalItemsSizes){
                              setFieldValue(name, [...sizes, newSize])
                              setFieldValue("size", newSize)
                            }else{
                              setFieldValue(name, [...sizes.slice(0, sizes.length-1), newSize]) 
                              setFieldValue("size", newSize) 
                            }
                          }else{
                            setFieldValue(name, sizes) 
                            setFieldValue("size", current)
                          }
                          getExtra(
                            {
                              values: { elements: sizes, current },
                              type: ImgS?.typeExtra ?? "sizes"
                            }
                          )
                        }}
                        sizes={Array.isArray(values[name]) ? (values[name].length ? values[name] : []) : []}
                        currentSize={typeof inputSize === "string" ? inputSize : ""}
                      />
                    </div>
                  )
                }else if (type === 'totalItemsSizes') {
                  
                  return (
                    <div key={name}>
                    </div>
                  )
                }else if (type === 'totalItemsColors') {
                  
                  return (
                    <div key={name}>
                    </div>
                  )
                }




                throw new Error(`El type: ${type}, no es soportado`)
              })}



              <div className={actions.class}>
                {
                  actions.buttons.map(({ text, type }, i) => {
                    if (type === "submit") {
                      return (
                        <button
                          key={i}
                          type={type}
                          disabled={!isValid}
                          onClick={() => getValues(values, type)}
                        >
                          {t(text)}

                          {/* {!isValid && (<small> - forms invalido</small>)}
                     <br/>
                     {isSubmitting && (<small> - forms Submitting</small>)} */}

                        </button>
                      )
                    }
                    if (type === "button") {
                      return (
                        <button
                          key={i}
                          type={type}
                          disabled={!isValid || isSubmitting}
                          onClick={() => getValues(values, type)}
                        >
                          {t(text)}
                        </button>
                      )
                    }
                  })
                }
              </div>

            </Form>
          )
        }
        }

      </Formik>
    )
  }
)
