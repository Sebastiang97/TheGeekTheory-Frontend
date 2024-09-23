import { Routes, Route } from 'react-router-dom'
import { NotFound } from '@/pages/NotFound/NotFound'
import { Navbar } from '@@/Navbar/Navbar'
import { Home } from '@/pages/Home/Home'
import { Login } from '@/pages/Login/Login'
import { ActionsProducts } from '@/pages/Admin/pages/Products/ActionsProducts'
import { Products } from '@/pages/Admin/pages/Products/Products'
import { SideBar } from '@@/SideBar/SideBar'
import { Categories } from '@/pages/Admin/pages/Categories/Categories'
import { ActionsCategories } from '@/pages/Admin/pages/Categories/ActionsCategories'
import { Prints } from '@/pages/Admin/pages/Prints/Prints'
import { ActionsPrints } from '@/pages/Admin/pages/Prints/ActionsPrints'
import { Footer } from '@@/Footer/Footer'
import { WhoWeAre } from '@/pages/WhoWeAre/WhoWeAre'
import { Design } from '@/pages/Design/Design'
import { Catalog } from '@/pages/Catalog/Catalog'
import { Preview } from '@/pages/Preview/Preview'
import { Checkout } from '@/pages/Checkout/Checkout'
import { Admin } from '@/pages/Admin/Admin'
import { SubCategories } from '@/pages/Admin/pages/SubCategories/SubCategories'
import { ActionsSubCategories } from '@/pages/Admin/pages/SubCategories/ActionsSubCategories'
import { Payments } from '@/pages/Payment/Payments'
import { PaymentByPayId } from '@/pages/Payment/PaymentbyPayId/PaymentByPayId'
import { Pays } from '@/pages/Admin/pages/Pays/Pays'
import { Test2 } from '@/pages/Test/Test2'

export const AppRouter = () => {
  return (
    <div className=''>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/whoweare' element={<WhoWeAre />} />
        <Route path='/design' element={<Design />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/checkout' element={<Checkout />} />

        <Route path='/pay/:payId' element={<PaymentByPayId />} />
        <Route path='/payments' element={<Payments />} />

        <Route path='/account' element={<Admin />} />
        <Route path='/admin' element={<Admin />} />

        <Route path='/admin/products/' element={<Products />} />
        <Route path='/admin/products/actions/:id' element={<ActionsProducts />} />
        <Route path='/admin/categories/' element={<Categories />} />
        <Route path='/admin/categories/actions/:id' element={<ActionsCategories />} />
        <Route path='/admin/subcategories/' element={<SubCategories />} />
        <Route path='/admin/subcategories/actions/:id' element={<ActionsSubCategories />} />
        <Route path='/admin/prints/' element={<Prints />} />
        <Route path='/admin/prints/actions/:id' element={<ActionsPrints />} />

        <Route path='/admin/payments/' element={<Pays />} />
        {/* <Route path='/' element={
          <PublicRoutes>
          </PublicRoutes>
          }/>
          <Route  path='profile' element={<PrivateRoutes />} /> */}
        <Route path='/test' element={<Test2 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
