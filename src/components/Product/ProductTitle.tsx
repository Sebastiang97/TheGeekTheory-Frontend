import styles from '@/styles/styles.module.css'


export interface Props {
    className?: string 
    title?: string, 
    activeClass?: string
    style?: React.CSSProperties 
}

export const ProductTitle = ({ title, className, style }: Props) => {


    return (
        <span 
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
        >
            Title: { title }
        </span>
    )
}