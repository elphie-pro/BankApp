import { Route,  createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import Createpage from './pages/Createpage'
import Aboutpage from './pages/Aboutpage'
import Dashboard, {userLoader} from './pages/Dashboard'
import Transferpage from './pages/Transferpage'
import Withdrawpage from './pages/Withdrawpage'
import Servicespage from './pages/Servicespage'
import Editpage from './pages/Editpage'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/> } >
    <Route path='/' element={<Homepage />}/>
    <Route path='/login' element={<Loginpage />} />
    <Route path='/create' element={<Createpage />} />
    <Route path='/dash' element={<Dashboard/>}loader={ userLoaderLoader } /> 
    <Route path='/about' element={<Aboutpage />} />
    <Route path='/transfer' element={<Transferpage/>}/>
    <Route path='/withdraw' element={<Withdrawpage/>}/>
    <Route path='/add' element={<Servicespage/>}/>
    <Route path='/edit' element={<Editpage/>}/>

  </Route>
)
)


function App() {

  return (
    <>
      
    <RouterProvider router={router} />
    </>
  )
}

export default App
