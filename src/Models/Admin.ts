export type Mode = {
    mode: "view" | "edit" | "delete" | "add"
}

export type AdminMode = {
    product: Mode;
    category: Mode;
    sub: Mode;
}