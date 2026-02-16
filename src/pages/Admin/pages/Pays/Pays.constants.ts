import { HeadersTable, OptionsTable } from "@/Models/Table";

export const TABLE_PAY_HEADERS: HeadersTable[] = [
  {
    field: 'checkbox',
    text: '',
    sortable: true,
    iconInfo: false,
    fieldType: 'checkbox',
  },
  {
    field: 'creationDate',
    text: 'Fecha',
    sortable: true,
    iconInfo: false,
    fieldType: 'date',
  },
  {
    field: 'state',
    text: 'Estado',
    sortable: true,
    iconInfo: false,
    fieldType: 'button-state',
  },
  {
    field: 'email',
    text: 'Correo',
    sortable: true,
    iconInfo: false,
    fieldType: 'text',
  },
  {
    field: 'name',
    text: 'Nombre',
    sortable: true,
    iconInfo: false,
    fieldType: 'text',
  },
  {
    field: 'phone',
    text: 'Celular',
    sortable: true,
    iconInfo: false,
    fieldType: 'text',
  },
  {
    field: 'amount',
    text: 'Precio',
    sortable: true,
    iconInfo: false,
    fieldType: 'dolar',
  },
  {
    field: 'actions',
    text: 'Acciones',
    sortable: false,
    iconInfo: false,
    fieldType: 'actions',
  },
]

export type OptionsPayTable = "add" | "view"

export const OPTIONS_PAY_ACTIONS: OptionsTable<OptionsPayTable>[] = [
  {
    type: "add",
    text: "Agregar numero de guia",
    iconClass: ""
  },
  {
    type: "view",
    text: "Ver",
    iconClass: ""
  },
]

export const guideForm = [
  {
    id: "numberGuide",
    numberGuide: ""
  }
]

export const OPTIONS_STATE = [
  { id: 1, nombre: 'Approved', valor: 'approved' },
  { id: 2, nombre: 'Created', valor: 'CREATED' },
]

