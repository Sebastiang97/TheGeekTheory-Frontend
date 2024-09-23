import { FieldTable } from "./Table"

export type OptionsActions<T,O> = {
    detail:FieldTable<T,O> 
    type: O
}