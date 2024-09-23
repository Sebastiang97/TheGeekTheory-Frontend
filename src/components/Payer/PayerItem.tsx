import { Payer } from "@/Models/Payer"

interface Props {
    payer: Payer
}

export const PayerItem = ({ payer }: Props) => {

    return (
        <div
            className="content">
            {Object.entries(payer).map(([key, value]) => (
                <p
                    key={key}
                    className="content">
                    {value}
                </p>
            ))}
        </div>
    )
}
