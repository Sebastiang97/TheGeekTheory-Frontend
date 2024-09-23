import { FieldTable, OptionsTable } from "@/Models/Table";

export const MAPPER_FIELDS = <T,O>(data: T[], options: OptionsTable<O>[]): FieldTable<T,O>[] => {
    let fieldsTable: FieldTable<T,O>[] = []

    data.map(d=>{
        fieldsTable.push({
            element: d,
            actions: {
                enable: true,
                visibility: true, 
                options
            }
    
        })
    })

    return fieldsTable
}