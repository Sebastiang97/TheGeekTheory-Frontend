import { MAPPER_FIELDS } from "@/helpers/mapperFields"
import { usePayStore } from "@/libs/store/zustand/usePayStore"
import { OptionsActions } from "@/Models/OptionsActions"
import { Pay } from "@/Models/Pay"
import { FieldTable } from "@/Models/Table"
import { TableTest } from "@@/TableComponent/TableTest"
import { useEffect, useState } from "react"
import { OPTIONS_PAY_ACTIONS, OptionsPayTable, TABLE_PAY_HEADERS } from "./Pays.constants"
import { LIMIT } from "@/constants/Paginate"
import { DirectionPage } from "@/Models/DirectionPage"
import { Pagination } from "@@/Pagination/Pagination"
import { ModalForm } from "@@/modals/ModalForm/ModalForm"


import { useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"

export const Pays = () => {
  const formik = useFormik({
    initialValues: {
      numberGuide: '',
    },
    validationSchema: Yup.object({
      numberGuide: Yup.string().required('Numero de guia es requierido'),
    }),
    onSubmit: (values) => {
    },
  });
  const [filterData, setFilterData] = useState<FieldTable<Pay, OptionsPayTable>[]>([])
  // const listAll = usePayStore(state => state.listAll)
  
  const navigate = useNavigate();

  const [detail, setDetail] = useState<FieldTable<Pay, OptionsPayTable> >()
  const getPaysAndPayer = usePayStore(state => state.getPaysAndPayer)
  const updateNumberGuide = usePayStore(state => state.updateNumberGuide)
  
  const [previousCursor, setPreviousCursor] = useState("")
  const [nextCursor, setNextCursor] = useState("")

  const handleSendNumberGuide = ()=>{
    console.log(formik.values)
    console.log(detail)
    if(detail?.element.id){
      updateNumberGuide(detail?.element.id, formik.values.numberGuide)
        .then(res=>{
          console.log(res)
        })
        .catch(err=> console.log(err))
    }
    formik.resetForm()
  }

  const optionActions = ({ detail, type }: OptionsActions<Pay, OptionsPayTable>) => {
    console.log({ detail, type })
    if (type == 'add') {
      setDetail(detail)
      setOpen(prev=> !prev)
    }
    if (type == 'view') {
      navigate(`/admin/pay/${detail.element.id}`, { state: detail.element });
    }
  }

  const handlePaginate = (direction:DirectionPage) => {
    getPaysAndPayer(direction === "next" ? nextCursor : previousCursor , LIMIT, direction)
      .then(pays=>{
        setNextCursor(pays.nextCursor)
        setPreviousCursor(pays.previousCursor)
        let p:any[] = []
        pays.content.map(pay=>{
          p.push({
            ...pay,
            ...pay.payer
          })
        })
        console.log(p)
        setFilterData(MAPPER_FIELDS<Pay, OptionsPayTable>(p, OPTIONS_PAY_ACTIONS))
      })
  }

  useEffect(() => {
    getPaysAndPayer("", LIMIT, "next")
      .then(pays=>{
        setNextCursor(pays.nextCursor)
        setPreviousCursor(pays.previousCursor)
        let p:any[] = []
        pays.content.map(pay=>{
          p.push({
            ...pay,
            ...pay.payer
          })
        })
        console.log(p)
        setFilterData(MAPPER_FIELDS<Pay, OptionsPayTable>(p, OPTIONS_PAY_ACTIONS))
      })
  }, [])

  const [open, setOpen] = useState(false);
  return (
    <section className="container">
      {filterData?.length &&
        (
          <>
            <ModalForm 
              title="Digita el numero de guia"
              description="El numero de guia sera enviado al whatsapp del cliente"
              content={
                <div>
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <label htmlFor="numberGuide">Numero de guia</label>
                      <input
                        id="numberGuide"
                        name="numberGuide"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.numberGuide}
                      />
                      {formik.errors.numberGuide && formik.touched.numberGuide && (
                        <div className="error">{formik.errors.numberGuide}</div>
                      )}
                    </div>
                  </form>
                </div>
              }
              continueLabel="continue"
              cancelLabel="cancel"
              handleContinue={handleSendNumberGuide}
              open={open} 
              setOpen={setOpen}
              isValid={
                !(formik.isValid &&
                Boolean(Object.keys(formik.touched).length === Object.keys(formik.values).length))
              }
            />
            
            <TableTest<Pay, OptionsPayTable>
              data={filterData}
              headers={TABLE_PAY_HEADERS}
              editActions={() => { }}
              optionsActions={optionActions}
            />
            <Pagination handlePagination={handlePaginate}/>
          </>
        )
      }
    </section>
  )
}


/*
<Formik
                  initialValues={{
                    name: '',
                    email: '',
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required('Name is required'),
                    email: Yup.string().email('Invalid email address').required('Email is required'),
                  })}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name">Name</label>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          className="input"
                        />
                        <ErrorMessage name="name" component="div" className="error" />
                      </div>

                      <div>
                        <label htmlFor="email">Email</label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          className="input"
                        />
                        <ErrorMessage name="email" component="div" className="error" />
                      </div>

                      <button type="submit">Submit</button>
                    </form>
                  )}
                </Formik>
*/

