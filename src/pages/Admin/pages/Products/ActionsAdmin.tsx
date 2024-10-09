import { FormDinamic } from "@@/forms/FormDinamic"
import { actions } from "./actions.constant"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Actions, InputFields } from "@/Models/InputFields"
import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { ADD_INIT_INPUT_VALUES, ADD_INPUT_VALUES } from "@/helpers/AddInputValue"
import { PreviewImagesTest } from "@@/PreviewImagesTest/PreviewImagesTest"
import { SelectImage } from "@/Models/SelectImages"


interface Props {
  inputAdminFields: InputFields[]
  actions: Actions
  getProductData: (productData: FormData, isCancel: boolean) => void
  initialValues: any
  mode: string
}

export const ActionsAdmin = ({ inputAdminFields, actions, getProductData, mode, initialValues }: Props) => {
  const { t } = useTranslation(["translation"])
  const [isFirst, setIsFirst] = useState(false)
  const [inputs, setInputs] = useState<InputFields[]>(JSON.parse(JSON.stringify(inputAdminFields)))

  const [images, setImages] = useState<SelectImage[]>([])
  const [currentImage, setCurrentImage] = useState<SelectImage>({} as SelectImage)

  const getImgs = (values: any) => {
    if (values.files?.length) {
      let img: SelectImage[] = []
      values.files.map((file: any) => {
        img.push(
          {
            id: file.name,
            url: URL.createObjectURL(file)
          }
        )
      })
      setCurrentImage(img[0])
      setImages((prev)=> [...prev,...img])
    }
  }

  const getValues = (values: any) => {
    console.log(values)
    console.log(images)
    const formData: FormData = new FormData();
    Object.keys(values).map(async (key) => {
      if (key === "files") {
        if(values[key].length){
          values[key].map((value: any) => {
            formData.append("file", value);
          })
        }
      } else {
        formData.append(key, values[key]);
      }
    })
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    getProductData(formData, false)

  }

  useEffect(() => {
    console.log(initialValues)
    if(mode == ADMIN_MODE.add){
      let intAdmin: InputFields[] = ADD_INIT_INPUT_VALUES(inputAdminFields, initialValues)
      setInputs(intAdmin)
    }
    if (mode == ADMIN_MODE.edit) {
      let intAdmin: InputFields[] = ADD_INPUT_VALUES(inputAdminFields, initialValues)
      setInputs(intAdmin)
      if (initialValues?.urlImage?.length) {
        let images = initialValues.urlImage.map((img: any) => {
          return {
            id: img.id,
            url: img.url
          }
        })
        console.log(images)
        setCurrentImage(images[0])
        setImages(images)
      }
    }
    setIsFirst(true)
  }, [])

  return (
    <>
      <div className="actions">
        <h3>Crear Subcategoria</h3>
        <button
          onClick={() => getProductData(new FormData(), true)}
        >
          volver
        </button>
      </div>
      {
        images.length
          ? <PreviewImagesTest
            images={images}
            currentImage={currentImage}
            selectMainImage={(img: SelectImage) => setCurrentImage(img)}
          />
          : <div>Sin fotos subidas</div>
      }

      {isFirst && (
        <FormDinamic
          inputFields={inputs}
          actions={actions}
          getImgs={getImgs}
          getValues={getValues}
          getOnChanges={() => { }}
        />
      )}
    </>
  )
}

