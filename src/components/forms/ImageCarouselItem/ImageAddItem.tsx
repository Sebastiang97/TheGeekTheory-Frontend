import { PlusIcon } from '@@/icons/PlusIcon';
import "./ImageAddItem.css"
import { GET_IMAGES_INPUT } from '@/helpers/GetImages';

interface Props {
  name: string
  // getImages: (imags:string[])=> void
  getImages: (imags:FileList)=> void
  isMultipleImage: boolean
}

export const ImageAddItem = ({name, getImages, isMultipleImage}:Props) => {
  const id = crypto.randomUUID()
  
  return (
    <article className="ImageItemCarousel">
      <label htmlFor={id} >
        <PlusIcon />
      </label>
      
      <input
        id={id}
        name={name}
        className='inputImg'
        type="file"
        onChange={(event) => {
          // event.target.files && getImages(GET_IMAGES_INPUT(event.target.files))

          event.target.files && getImages(event.target.files)

          // let imgs:string[] = []
          // if (files) {
          //   let myFiles = Array.from(files);
          //   myFiles.map(file=>{
          //     imgs.push(URL.createObjectURL(file))
          //   })
          //   console.log({imgs})
          //   getImages(imgs)
          // }
        }}
        multiple={isMultipleImage}
      />
      
        
      
    </article>
  )
}
