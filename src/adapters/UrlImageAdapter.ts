import { URLImageElement } from "@/Models/ProductIndividual";

export const URL_IMAGE_ADAPTER = (urlImages: URLImageElement[]):string[] =>{
    let images:string[] = []
    urlImages.forEach(urlImage=>{
        images.push(urlImage.url)
    })
    return images
}