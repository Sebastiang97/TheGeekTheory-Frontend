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
  // {
  //   field: 'surname',
  //   text: 'Apellido',
  //   sortable: true,
  //   iconInfo: false,
  //   fieldType: 'text',
  // },
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

export type OptionsPayTable = "add"

export const OPTIONS_PAY_ACTIONS: OptionsTable<OptionsPayTable>[] = [
  {
    type: "add",
    text: "Agregar numero de guia",
    iconClass: ""
  }
]

export const guideForm = [
  {
    id: "numberGuide",
    numberGuide: ""
  }
]

