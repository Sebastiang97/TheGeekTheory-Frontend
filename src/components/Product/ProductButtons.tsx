
import styles from '@/styles/styles.module.css'

export interface Props {
    className?: string;
    style?: React.CSSProperties 
}

export const ProductButtons = ({ className, style }: Props) => {


    return (
        <div 
            className={ `${ styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button
                className={ styles.buttonMinus }
                onClick={undefined}> - </button>

            <div className={ styles.countLabel }> 0 </div>

            <button
                className={ styles.buttonAdd }
                onClick={ undefined }> + </button>
        </div>
    );
}