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
        to: "/CatalogGeneralProducts/"
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
        text: "Mis datos",
        to: "/account"
    },
    {
        text: "Mi cuenta",
        to: "/account"
    },
    {
        text: "Mis Compras",
        to: "/shopping"
    },
    
])

export const UNKNOWN_SESION = Object.freeze([
    {
        text: "Mis datos",
        to: "/account"
    },
    {
        text: "Mis compras",
        to: "/payments"
    },
    {
        text: "Iniciar Sesion",
        to: "/login"
    },
    {
        text: "Conectar a Whatsapp Qr Code (Admin)",
        to: "/admin/whatsapp/qrcode"
    },
    {
        text: "Compras Generales (Admin)",
        to: "/admin/payments/"
    },
    {
        text: "CRM",
        to: "/admin/CatalogGeneralProducts"
    }
])