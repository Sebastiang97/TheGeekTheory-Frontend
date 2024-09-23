import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { EditIcon } from "@@/icons/EditIcon"

export const SubCategories = () => {
  const { t } = useTranslation(["translation"])
  const subCategories = useSubCategoryStore(state => state.subCategories)

  const list = useSubCategoryStore(state => state.list)
  const navigate = useNavigate()


  useEffect(() => {
    list()
    console.log({ subCategories })
  }, [])

  return (
    <div className="container">
      <div className="adminTitle">
        <h2>{t("Sub Categories")}</h2>
        <div className="actions end">
          <button
            onClick={() => navigate("/admin/subcategories/actions/create")}>
            {t("components.admin.actions.new")}
          </button>
        </div>
      </div>
      {/* <List elements={subCategories} typeCard="category" className="list" /> */}
      <div className="flex justify-center items-start gap-5">
        {
          subCategories.map((subCategories) => (
            <article className="card" key={subCategories.id}>
              <div
                className="update"
                onClick={() => navigate("/admin/products/actions/" + subCategories.id)}
              >
                <EditIcon />
              </div>
              <div>
                <img
                  src={subCategories.urlImage[0].url}
                  alt="SubCategory"
                />
              </div>
              <section>
                <h4>{subCategories.name}</h4>
                <small>{subCategories.code}</small>
                <br />
                <small>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Quod deserunt tempore quae dicta possimus soluta dignissimos doloribus, 
                  nisi illo id omnis quidem expedita nam ipsum maxime, facere perferendis optio earum?
                </small>
              </section>
            </article>
          ))
        }
      </div>
    </div>
  )
}

