import "./MarkImage.css"

interface Props {
    url: string
    alt?: string
}

// export const MarkImage = ({url, alt}:Props) => {
export const MarkImage = (props:any) => {
  const {url, alt, ...rest} = props
  return (
    <div 
      className="containerImage"
      {...rest}
    >
      {url 
        ? (<img src={url} alt={alt} />) 
        : (<>Aun no hay imagenes</>) 
      }
    </div>
  )
}
