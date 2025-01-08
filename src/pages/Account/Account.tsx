import { PayerSelected } from "@@/PayerSelected/PayerSelected"
import { useState } from "react"

export const Account = () => {
  const [isSelectPlayer, setIsSelectPlayer] = useState(false)

  return (
    <section className="container">
        <PayerSelected />
    </section>
  )
}
