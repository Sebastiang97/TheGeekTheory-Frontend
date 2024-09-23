export const NAVBAR_LIST = Object.freeze([
    {
        text: "Home",
        to: "/"
    },
    {
        text: "¿Quienes somos?",
        to: "/whoweare"
    },
    {
        text: "Diseños",
        to: "/design"
    },
    {
        text: "Prendas",
        to: "/catalog"
    },
    {
        text: "Checkout",
        to: "/checkout"
    },
    {
        text: "Registrate",
        to: "/login"
    },
])

export const ROUTES = {
    CHECKOUT: {
        to: "/checkout",
    }
}


export const ADMIN_LIST = Object.freeze([
    {
        text: "Mi cuenta",
        to: "/account"
    },
    {
        text: "Mis Compras",
        to: "/shopping"
    },
    {
        text: "Admin",
        to: "/admin"
    },
    {
        text: "Categories",
        to: "/admin/categories/"
    },
    {
        text: "SubCategories",
        to: "/admin/subcategories/"
    },
    {
        text: "Products",
        to: "/admin/products/"
    },
    {
        text: "Prints",
        to: "/admin/prints/"
    },
])