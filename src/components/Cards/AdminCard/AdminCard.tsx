import "./adminCard.css"

interface Props {
  title: string
  description: string
  icon: any
}
export const AdminCard = ({title, description, icon}:Props) => {
  return (
    // <div className="rounded-xl border bg-card text-card-foreground shadow">
    //     <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
    //       <h3 className="tracking-tight text-sm font-medium">Subscriptions</h3>
    //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
    //       </svg>
    //     </div>
    //     <div className="p-6 pt-0">
    //       <div className="text-2xl font-bold">+2350</div>
    //       <p className="text-xs text-muted-foreground">+180.1% from last month</p>
    //     </div>
    // </div>
    <section className="adminCard">
        <header >
          <h3>{title}</h3>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg> */}
          {icon}
        </header>
        <div className="content">
          {/* <div className="bigFront">+2350</div> */}
          <p>{description}</p>
        </div>
    </section>
  )
}
