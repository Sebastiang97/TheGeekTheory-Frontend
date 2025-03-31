import { POSITION_PRINT_KEY, POSITION_SHIRT_KEY } from "@/constants/PositionShirtPrint";
import { Print } from "./Print";

export type ShirtPosition = (typeof POSITION_SHIRT_KEY)[keyof typeof POSITION_SHIRT_KEY];
export type ShirtPositionKey = (typeof POSITION_PRINT_KEY)[keyof typeof POSITION_PRINT_KEY];

export const INIT_CUSTOM: ()=>Print[] = ()=>{
    return [
        {
            position: POSITION_SHIRT_KEY.FRONT,
            size: "",
            url: ""
        },
        {
            position: POSITION_SHIRT_KEY.BACK,
            size: "",
            url: ""
        }
    ]
}