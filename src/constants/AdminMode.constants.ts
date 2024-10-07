export const ADMIN_MODE = {
    view: "view",
    add: "add",
    edit: "edit",
    delete: "delete"
}


export type UserRole = typeof ADMIN_MODE[keyof typeof ADMIN_MODE];
