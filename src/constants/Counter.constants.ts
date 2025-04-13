export const OPERATION_COUNTER = {
    SUMA: "suma",
    RESTA: "resta"
}

export type Operation = (typeof OPERATION_COUNTER)[keyof typeof OPERATION_COUNTER];
