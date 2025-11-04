// import { URLImage } from './URLImage';

import { Tag } from "./Tag";

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
    tags: TagElement[]
    adaptedTags: Tag[]
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

export type TagElement = {
    tag: Tag;
}