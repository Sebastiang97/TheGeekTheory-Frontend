
import { FC, SVGProps } from "react";

export const PlusIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
    const { children, ...rest } = props;

    return (
        <svg 
            width="22"
            height="22"
            viewBox="0 0 285 344" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="20"
            {...rest}
        >
            <path 
                d="M285 172C285 173.983 284.347 175.885 283.185 177.288C282.023 178.69 280.448 179.478 278.804 179.478H148.696V336.522C148.696 338.505 148.043 340.407 146.881 341.81C145.719 343.212 144.143 344 142.5 344C140.857 344 139.281 343.212 138.119 341.81C136.957 340.407 136.304 338.505 136.304 336.522V179.478H6.19565C4.55246 179.478 2.97658 178.69 1.81467 177.288C0.652756 175.885 0 173.983 0 172C0 170.017 0.652756 168.115 1.81467 166.712C2.97658 165.31 4.55246 164.522 6.19565 164.522H136.304V7.47826C136.304 5.4949 136.957 3.59278 138.119 2.19033C139.281 0.787887 140.857 0 142.5 0C144.143 0 145.719 0.787887 146.881 2.19033C148.043 3.59278 148.696 5.4949 148.696 7.47826V164.522H278.804C280.448 164.522 282.023 165.31 283.185 166.712C284.347 168.115 285 170.017 285 172Z" 
            />
        </svg>
    )
}
