import { FC, SVGProps } from "react";

export const Facebook: FC<SVGProps<SVGSVGElement>> = (props) => {
    const { children, ...rest } = props;
    return (

        <svg 
            width="20" 
            height="25" 
            viewBox="0 0 41 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M26.0274 40V21.7555H37.8161L39.5847 14.6431H26.0274V10.103C26.0274 8.0444 27.1238 6.64153 32.815 6.64153L40.0619 6.63998V0.27846C38.8087 0.193891 34.5067 0 29.4997 0C19.0442 0 11.8863 3.31393 11.8863 9.39855V14.6431H0.0618896V21.7555H11.8863V40H26.0274Z" 
                fill="#FD6C19" 
            />
        </svg>
    )
}
