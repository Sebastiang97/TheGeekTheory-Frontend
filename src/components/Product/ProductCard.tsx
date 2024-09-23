import styles from '@/styles/styles.module.css'
import '@/styles/custom-styles.css';
import { Product } from '@/Models/Product'




export interface Props {
    product: Product
    children?: React.ReactElement | React.ReactElement[]
    className?: string
    style?: React.CSSProperties 
}


export const ProductCard = ({ children, product, className, style }: Props ) => {


    return (
        <div 
            className={ `${ styles.productCard } ${ className }` }
            style={ style }
        >
            { children }
        </div>
    )
}
