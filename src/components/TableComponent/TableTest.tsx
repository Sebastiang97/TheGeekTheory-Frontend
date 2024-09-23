import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { OptionsActions } from "@/Models/OptionsActions"
import { FieldTable, HeadersTable, OptionsTable } from "@/Models/Table"
import { PopoverComponent } from "@@/PopoverComponent/PopoverComponent"
import { Ellipsis } from "lucide-react"


type Props<T, O> = {
    headers: HeadersTable[],
    data: FieldTable<T, O>[]
    editActions: (detail: FieldTable<T, O>) => void
    optionsActions: ({ detail, type }: OptionsActions<T, O>) => void
}

export const TableTest = <T, O,>({ headers, data, optionsActions }: Props<T, O>) => {
    const a = () =>{
        console.log("first")
    }
    return (
        <div className="table-border">
            <Table>
                <TableHeader>
                    <TableRow>
                        {headers?.length && (
                            headers.map(header => (
                                <TableHead
                                    className={header.class}
                                >
                                    {header.field === "checkbox"
                                        ? (
                                            <div key={header.field}>
                                                <input type="checkbox" onClick={()=>a()}/>
                                            </div>
                                        ) : (
                                            <div key={header.field}>
                                                {header.text}
                                            </div>
                                        )
                                    }
                                </TableHead>
                            ))
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.length && (
                        <>
                            {data.map((d: any) => (
                                    <TableRow key={d.id}>
                                        {headers.length
                                            ? (
                                                headers.map(header => {

                                                    if (
                                                        Object.keys(d.element).some(keyEl => keyEl === header.field) ||
                                                        header.fieldType === 'actions' || 
                                                        header.fieldType === 'checkbox'
                                                    ) {
                                                        if (header.fieldType === 'text') {
                                                            return (
                                                                <TableCell >
                                                                    <div key={d.id}>
                                                                        {d.element[header.field]}
                                                                    </div>
                                                                </TableCell>
                                                            )
                                                        }else if (header.fieldType === 'date') {
                                                            return (
                                                                <TableCell>
                                                                    <div key={d.id}>
                                                                        {d.element[header.field]}
                                                                    </div>
                                                                </TableCell>
                                                            )
                                                        }else if (header.fieldType === 'link') {
                                                            return (
                                                                <TableCell>
                                                                    <div key={d.id}>
                                                                        {d.element[header.field]}
                                                                    </div>
                                                                </TableCell>
                                                            )
                                                        }else if (header.fieldType === 'button-state') {
                                                            return (
                                                                <TableCell>
                                                                    <div key={d.id}>

                                                                        {d.element[header.field]}
                                                                    </div>
                                                                </TableCell>
                                                            )
                                                        }else if (header.fieldType === 'dolar') {
                                                            return (
                                                                <TableCell>
                                                                    <div key={d.id}>

                                                                        {d.element[header.field]}
                                                                    </div>
                                                                </TableCell>
                                                            )
                                                        }else if (header.fieldType === 'checkbox') {
                                                            return (
                                                                <label>
                                                                    <input type="checkbox" onClick={()=>a()}/>
                                                                </label>
                                                            )
                                                        }else if (header.fieldType === 'actions') {
                                                            return (
                                                                <TableCell >
                                                                    <div key={d.id}>
                                                                        <PopoverComponent
                                                                            classNameButton="no-button color-main"
                                                                            trigger={
                                                                                <>
                                                                                    <Ellipsis />
                                                                                </>
                                                                            }
                                                                            content={
                                                                                d.actions?.options && (
                                                                                    d.actions.options.map((option: OptionsTable<O>, i: number) => (
                                                                                        <div
                                                                                            key={i}
                                                                                            onClick={() => optionsActions({ detail: d.element, type: option.type })}
                                                                                        >
                                                                                            {option.text}
                                                                                        </div>
                                                                                    ))
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </TableCell>
                                                            )
                                                        }else {
                                                            return (
                                                                <TableCell >
                                                                    <div
                                                                        key={header.field}>
                                                                        ...(not found header FieldType )
                                                                    </div>
                                                                </TableCell>
                                                            )
                                                        }
                                                    } else {
                                                        return (
                                                            <TableCell >
                                                                <div
                                                                    key={header.field}>
                                                                    ...
                                                                </div>
                                                            </TableCell>
                                                        )
                                                    }
                                                })
                                            )
                                            : (
                                                <TableCell>
                                                    Vacio
                                                </TableCell>
                                            )
                                        }
                                    </TableRow>
                            ))}
                        </>
                    )}
                </TableBody>
                <TableCaption>A list of your recent invoices.</TableCaption>

                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={headers.length - 2 || 1}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>

    )
}