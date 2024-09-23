import { Props as ProductButtonsProps } from '@@/Product/ProductButtons'
import { Props as ProductCardProps } from '@@/Product/ProductCard'
import { Props as ProductImageProps } from '@@/Product/ProductImage'
import { Props as ProductTitleProps } from '@@/Product/ProductTitle'
import { URLImage } from './URLImage';

export interface Product {
    id:            string;
    name:          string;
    description:   string;
    price:         number;
    size:          string;
    color:         string;
    quantity:      number;
    subCategoryId: string;
    urlImage:      URLImage[];
}

export interface ColorSize {
    code: string;
    name: string;
}



export interface ProductContextProps {
    counter: number
    product: Product
    increaseBy: ( value: number ) => void
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
}


