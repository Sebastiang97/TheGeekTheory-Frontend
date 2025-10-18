import { ColorImageSize, ColorImageSizes } from "@/Models/GeneralProduct";

// export const GET_IMAGES_INPUT = (files: FileList ):File[] => {
export const GET_IMAGES_INPUT = (files: FileList | null ):any[] => {

    let imgs:any[] = []
    if (files) {
        let myFiles = Array.from(files);
        myFiles.map(file=>{
            imgs.push(URL.createObjectURL(file))
        })
        return imgs
    }
    return imgs
}

export const GET_IMAGES_FROM_COLORIMAGESSIZE = (colorImageSize: ColorImageSize[]):string[] =>{
    let images:string[] = []
    colorImageSize?.forEach(colorImageSize => {
        colorImageSize.colorsImages?.forEach(cImg=>{
            images.push(cImg.image)
        })
    });
    return images
}

export const GET_IMAGES_FROM_COLORIMAGESSIZES = (colorImageSize: ColorImageSizes[]):string[] =>{
    let images:string[] = []
    colorImageSize && colorImageSize.forEach(colorImageSize => {
        images.push(colorImageSize.image)
    });
    return images
}

export const GET_IMAGE_BY_COLOR_FROM_COLORIMAGESSIZES = (
    colorImageSize: ColorImageSizes[],
    color:string
):string =>{
    let element = colorImageSize.find(c=> c.color === color)
    if(element){
        return element.image 
    }

    return colorImageSize.length ? colorImageSize[0].image : ""
}

