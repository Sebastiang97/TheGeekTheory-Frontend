import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { actions, inputPrintsFields } from "./actions.constant"
import { FormDinamic } from "@@/forms/FormDinamic"
import { SelectImage } from "@/Models/SelectImages"
import { PreviewImagesTest } from "@@/PreviewImagesTest/PreviewImagesTest"
import { usePrintStore } from "@/libs/store/zustand/usePrintStore"

export const ActionsPrints = () => {
  const navigate = useNavigate()
  const { t } = useTranslation(["translation"])
  const [images, setImages ]= useState<SelectImage[]>([])
  const [currentImage, setCurrentImage ]= useState<SelectImage>({} as SelectImage)
  const createPrint = usePrintStore(state => state.createPrint)


  const getValues = (values:any) =>{
    console.log({values})
    console.log({currentImage})
    const formData: FormData = new FormData();
    Object.keys(values).map((key)=>{
      if(key === "files"){
        values[key]?.map((value: any)=>{
          formData.append("file", value);  
        })
      }else if(key === "color" || key === "size"){
        formData.append(key,  JSON.stringify(values[key]));
      }else{
        formData.append(key, values[key]);
      }
    })
    formData.append("isMain", currentImage.id)

    createPrint(formData)
      .then(print=>{
        console.log(print)
      })
      .catch(err=>{
        console.log(err)
      })
  }

  const getImgs = (values:any)=>{
    if(values.files?.length){
      let img: SelectImage[] = []
      values.files.map((file:any)=>{
        img.push(
          {
            id: file.name,
            url: URL.createObjectURL(file)
          }
        )
      })
      setCurrentImage(img[0])
      setImages(img)
    }
  }

  const getOnChanges = () =>{

  }

  return (
    <>

      <div className="container">
        <div className="actions">
          <button
            onClick={() => navigate("/admin/prints/")}>
            {t("components.admin.actions.back")}
          </button>
        </div>
        {
          images.length
            ? <PreviewImagesTest
              images={images} 
              currentImage={currentImage} 
              selectMainImage={(img:SelectImage) =>setCurrentImage(img)}
            />
            : <div>Sin fotos subidas</div>
        }
        <FormDinamic
          inputFields={inputPrintsFields}
          actions={actions}
          getImgs={getImgs}
          getValues={getValues}
          getOnChanges={getOnChanges}
        />
      </div>
    </>
  )
}
