import { AdminCard } from "@@/Cards/AdminCard/AdminCard"
import { Link } from "react-router-dom"
import "./admin.css"

export const Admin = () => {
  return (
    <section className="admin">
      <Link to={`/admin/payments/`} >
        <AdminCard 
          title="Cantidad total de Pago"
          description="Seccion de todos los pagos realizados en la plataform" 
          icon={<></>}
        />
      </Link>
      <Link to={`/admin/crm/`} >
        <AdminCard 
          title="CRM"
          description="Seccion de para la gestion de relaciones de productos" 
          icon={<></>}
        />
      </Link>
      <Link to={`/admin/payments/`} >
        <AdminCard 
          title="Qr de whatsapp"
          description="Seccion de Qr de whatsapp para temas de envio de mensaje de whatsapp" 
          icon={<></>}
        />
      </Link>
      <Link to={`/payments`} >
        <AdminCard 
          title="Vista de pagos del cliente"
          description="Seccion de vista de pagos realizados como clientes, realiza pagos con tu usuario o usuario anonimo para revisar esta seccion" 
          icon={<></>}
        />
      </Link>
      <Link to={`/custom`} >
        <AdminCard 
          title="Vista de productos personalizados"
          description="Seccion de productos para personalizar con estampados" 
          icon={<></>}
        />
      </Link>
    </section>
  )
}
