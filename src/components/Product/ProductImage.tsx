import styles from '@/styles/styles.module.css'

export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties 
}


export const ProductImage = ({ img, className, style }: Props ) => {



    return (
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            src="https://images7.alphacoders.com/130/1305464.jpg" 
            style={ style }
            alt="Product" 
        />
    );
}