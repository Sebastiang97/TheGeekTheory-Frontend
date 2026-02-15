export const PATH_ADMIN = (path: string) => {
    return path.includes('/admin/') ? "/admin" : ""
}