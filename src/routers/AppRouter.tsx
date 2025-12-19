import { Routes, Route } from 'react-router-dom'
import { NotFound } from '@/pages/NotFound/NotFound'
import { NavbarComponent } from '@@/NavbarComponent/NavbarComponent'
import { Home } from '@/pages/Home/Home'
import { Login } from '@/pages/Login/Login'
import { SideBarComponent } from '@@/Sheets/SideBarComponent/SideBarComponent'
import { Footer } from '@@/Footer/Footer'
import { WhoWeAre } from '@/pages/WhoWeAre/WhoWeAre'
import { Design } from '@/pages/Design/Design'
import { Catalog } from '@/pages/Catalog/Catalog'
import { Preview } from '@/pages/Preview/Preview'
import { Checkout } from '@/pages/Checkout/Checkout'
import { Admin } from '@/pages/Admin/Admin'
import { Payments } from '@/pages/Payment/Payments'
import { PaymentByPayId } from '@/pages/Payment/PaymentbyPayId/PaymentByPayId'
import { Pays } from '@/pages/Admin/pages/Pays/Pays'
import { CRM } from '@/pages/Admin/pages/CRM/CRM'
import { QrCode } from '@/pages/Admin/pages/QrCode/QrCode'
import { Account } from '@/pages/Account/Account'
import { Custom } from '@/pages/Custom/Custom'
import { PayByPayId } from '@/pages/Admin/pages/PayByPayId/PayByPayId'
// import { Test3 } from '@/pages/Test/Test3'
import { GeneralProduct } from '@/pages/Admin/pages/GeneralProduct/GeneralProduct'
import { ProductIndividual } from '@/pages/Admin/pages/ProductIndividual/ProductIndividual'
import { CreatePI } from '@/pages/Admin/pages/ProductIndividual/CreatePI/CreatePI'
import { CatalogGeneralProducts } from '@/pages/CatalogGeneralProducts/CatalogGeneralProducts'
import { CreateGeneralProduct } from '@/pages/Admin/pages/GeneralProduct/CreateGeneralProduct/CreateGeneralProduct'
import { Categories } from '@/pages/Admin/pages/Categories/Categories'
import { SubCategories } from '@/pages/Admin/pages/SubCategories/SubCategories'
import { EditPI } from '@/pages/Admin/pages/ProductIndividual/EditPI/EditPI'
// import { ActionsProducts } from '@/pages/Admin/pages/Products/ActionsProducts'
// import { Products } from '@/pages/Admin/pages/Products/Products'
// import { Categories } from '@/pages/Admin/pages/Categories/Categories'
// import { ActionsCategories } from '@/pages/Admin/pages/Categories/ActionsCategories'
// import { Prints } from '@/pages/Admin/pages/Prints/Prints'
// import { ActionsPrints } from '@/pages/Admin/pages/Prints/ActionsPrints'
// import { SubCategories } from '@/pages/Admin/pages/SubCategories/SubCategories'
// import { ActionsSubCategories } from '@/pages/Admin/pages/SubCategories/ActionsSubCategories'

// import { Test2 } from '@/pages/Test/Test2'

export const AppRouter = () => {
  return (
    <div className=''>
      <NavbarComponent />
      <SideBarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/whoweare' element={<WhoWeAre />} />
        <Route path='/design' element={<Design />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/custom' element={<Custom />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/checkout' element={<Checkout />} />

        <Route path='/pay/:payId' element={<PaymentByPayId />} />
        <Route path='/payments' element={<Payments />} />

        <Route path='/account' element={<Account />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin' element={<Admin />} />
        {/* <Route path='/test' element={<Test3 />} /> */}
        <Route path='/CatalogGeneralProducts/:categoryId' element={<CatalogGeneralProducts />} />
        <Route path='/CatalogGeneralProducts' element={<CatalogGeneralProducts />} />
        <Route path='/generalProduct/:generalProductId' element={<GeneralProduct />} />
        <Route path='/generalProduct/create/categroyId/:categoryId/subcategoryId/:subCategoryId' element={<CreateGeneralProduct />} />
        <Route path='/productIndividual/:generalProductId' element={<ProductIndividual />} />
        <Route path='/productIndividual/create/:generalProductId' element={<CreatePI />} />
        <Route path='/productIndividual/edit/:productIndividualId/generalProductId/:generalProductId' element={<EditPI />} />

        {/* <Route path='/admin/products/' element={<Products />} /> */}
        <Route path='/admin/crm/' element={<CRM />} />
         {/* <Route path='/admin/products/actions/:id' element={<ActionsProducts />} /> */}
        <Route path='/admin/categories/' element={<Categories />} />
        <Route path='/admin/subcategories/' element={<SubCategories />} />
        {/*<Route path='/admin/categories/actions/:id' element={<ActionsCategories />} />
        <Route path='/admin/subcategories/' element={<SubCategories />} /> */}
        {/* <Route path='/admin/subcategories/actions/:id' element={<ActionsSubCategories />} /> */}
        {/* <Route path='/admin/prints/' element={<Prints />} /> */}
        {/* <Route path='/admin/prints/actions/:id' element={<ActionsPrints />} /> */}

        <Route path='/admin/whatsapp/qrcode' element={<QrCode />} />

        <Route path='/admin/payments/' element={<Pays />} />
        <Route path='/admin/pay/:payId' element={<PayByPayId />} />
        {/* <Route path='/' element={
          <PublicRoutes>
          </PublicRoutes>
          }/>
          <Route  path='profile' element={<PrivateRoutes />} /> */}
        {/* <Route path='/test' element={<Test2 />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
