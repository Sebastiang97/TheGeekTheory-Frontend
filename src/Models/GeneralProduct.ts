// import { URLImage } from './URLImage';

export interface GeneralProduct {
    id:            string;
    title:          string;
    description:   string;
    price:         number;
    size:          string;
    color:         string;
    quantity:      number;
    subCategoryId : string;
    // urlImage:      URLImage[];
    colorImageSizes: ColorImageSizes[]
    colorImageSize: ColorImageSize[]
    images: string[]
}

export type ColorImageSize = {
    id:           string;
    colorsImages: ColorImage[];
}

export type ColorImage = {
    id:    string;
    color: string;
    image: string;
    size:  Size[];
}

export type Size = {
    id:   string;
    size: string;
}

export type ColorImageSizes = {
    color: string
    image: string
    sizes: string[]
}