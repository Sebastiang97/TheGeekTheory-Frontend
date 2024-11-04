import { FC, SVGProps } from "react";

export const Instagram: FC<SVGProps<SVGSVGElement>> = (props) => {
    const { children, ...rest } = props;
    return (

        <svg 
            width="25" 
            height="25" 
            viewBox="0 0 41 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path 
                d="M20.0619 0C14.6344 0 13.9519 0.025 11.8194 0.12C9.68689 0.22 8.23439 0.555 6.96189 1.05C5.62712 1.55205 4.41812 2.33957 3.41939 3.3575C2.40208 4.35674 1.61466 5.5656 1.11189 6.9C0.61689 8.17 0.27939 9.625 0.18189 11.75C0.0868897 13.8875 0.0618896 14.5675 0.0618896 20.0025C0.0618896 25.4325 0.0868897 26.1125 0.18189 28.245C0.28189 30.375 0.61689 31.8275 1.11189 33.1C1.62439 34.415 2.30689 35.53 3.41939 36.6425C4.52939 37.755 5.64439 38.44 6.95939 38.95C8.23439 39.445 9.68439 39.7825 11.8144 39.88C13.9494 39.975 14.6294 40 20.0619 40C25.4944 40 26.1719 39.975 28.3069 39.88C30.4344 39.78 31.8919 39.445 33.1644 38.95C34.4983 38.4477 35.7064 37.6602 36.7044 36.6425C37.8169 35.53 38.4994 34.415 39.0119 33.1C39.5044 31.8275 39.8419 30.375 39.9419 28.245C40.0369 26.1125 40.0619 25.4325 40.0619 20C40.0619 14.5675 40.0369 13.8875 39.9419 11.7525C39.8419 9.625 39.5044 8.17 39.0119 6.9C38.5092 5.56556 37.7218 4.35669 36.7044 3.3575C35.706 2.33919 34.4969 1.55161 33.1619 1.05C31.8869 0.555 30.4319 0.2175 28.3044 0.12C26.1694 0.025 25.4919 0 20.0569 0H20.0644H20.0619ZM18.2694 3.605H20.0644C25.4044 3.605 26.0369 3.6225 28.1444 3.72C30.0944 3.8075 31.1544 4.135 31.8594 4.4075C32.7919 4.77 33.4594 5.205 34.1594 5.905C34.8594 6.605 35.2919 7.27 35.6544 8.205C35.9294 8.9075 36.2544 9.9675 36.3419 11.9175C36.4394 14.025 36.4594 14.6575 36.4594 19.995C36.4594 25.3325 36.4394 25.9675 36.3419 28.075C36.2544 30.025 35.9269 31.0825 35.6544 31.7875C35.3337 32.6559 34.822 33.4411 34.1569 34.085C33.4569 34.785 32.7919 35.2175 31.8569 35.58C31.1569 35.855 30.0969 36.18 28.1444 36.27C26.0369 36.365 25.4044 36.3875 20.0644 36.3875C14.7244 36.3875 14.0894 36.365 11.9819 36.27C10.0319 36.18 8.97439 35.855 8.26939 35.58C7.40064 35.2598 6.6147 34.7489 5.96939 34.085C5.30377 33.4401 4.7912 32.6541 4.46939 31.785C4.19689 31.0825 3.86939 30.0225 3.78189 28.0725C3.68689 25.965 3.66689 25.3325 3.66689 19.99C3.66689 14.65 3.68689 14.02 3.78189 11.9125C3.87189 9.9625 4.19689 8.9025 4.47189 8.1975C4.83439 7.265 5.26939 6.5975 5.96939 5.8975C6.66939 5.1975 7.33439 4.765 8.26939 4.4025C8.97439 4.1275 10.0319 3.8025 11.9819 3.7125C13.8269 3.6275 14.5419 3.6025 18.2694 3.6V3.605ZM30.7394 6.925C30.4242 6.925 30.1121 6.98708 29.8209 7.10769C29.5298 7.2283 29.2652 7.40508 29.0423 7.62794C28.8195 7.8508 28.6427 8.11538 28.5221 8.40656C28.4015 8.69774 28.3394 9.00983 28.3394 9.325C28.3394 9.64017 28.4015 9.95226 28.5221 10.2434C28.6427 10.5346 28.8195 10.7992 29.0423 11.0221C29.2652 11.2449 29.5298 11.4217 29.8209 11.5423C30.1121 11.6629 30.4242 11.725 30.7394 11.725C31.3759 11.725 31.9864 11.4721 32.4364 11.0221C32.8865 10.572 33.1394 9.96152 33.1394 9.325C33.1394 8.68848 32.8865 8.07803 32.4364 7.62794C31.9864 7.17786 31.3759 6.925 30.7394 6.925ZM20.0644 9.73C18.7021 9.70875 17.3491 9.95871 16.0843 10.4654C14.8195 10.972 13.6682 11.7252 12.6973 12.6811C11.7264 13.6369 10.9553 14.7764 10.429 16.0331C9.90269 17.2899 9.63164 18.6388 9.63164 20.0012C9.63164 21.3637 9.90269 22.7126 10.429 23.9693C10.9553 25.2261 11.7264 26.3656 12.6973 27.3214C13.6682 28.2773 14.8195 29.0305 16.0843 29.5371C17.3491 30.0438 18.7021 30.2938 20.0644 30.2725C22.7607 30.2304 25.3324 29.1298 27.2243 27.2081C29.1162 25.2865 30.1766 22.6979 30.1766 20.0012C30.1766 17.3046 29.1162 14.716 27.2243 12.7944C25.3324 10.8727 22.7607 9.77207 20.0644 9.73ZM20.0644 13.3325C21.8327 13.3325 23.5286 14.035 24.779 15.2854C26.0294 16.5358 26.7319 18.2317 26.7319 20C26.7319 21.7683 26.0294 23.4642 24.779 24.7146C23.5286 25.965 21.8327 26.6675 20.0644 26.6675C18.2961 26.6675 16.6002 25.965 15.3498 24.7146C14.0994 23.4642 13.3969 21.7683 13.3969 20C13.3969 18.2317 14.0994 16.5358 15.3498 15.2854C16.6002 14.035 18.2961 13.3325 20.0644 13.3325Z" 
                fill="#FE5C00" 
            />
        </svg>

    )
}
