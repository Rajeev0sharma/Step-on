import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About } from "./pages/About"
import { Contact, contactData } from "./pages/Contact"
import { Home } from "./pages/Home"
import { AppLayout } from "./Layout/AppLayout"
import { Product } from "./pages/Product"
import "./App.css"
import { getShoeData } from "./ui/GetShoeData"
import { ProductDetail } from "./ui/ProductDetail"
import { SignUp, signUpData } from "./pages/SignUp"
import { SignIn, signInData } from "./pages/SignIn"
import { ErrorPage } from "./pages/ErrorPage"


const App=()=>{
const router=createBrowserRouter([

  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:
      [
          {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/product/",
    element:<Product/>,
    loader:getShoeData,

  },
  {
    path:"/product/:shoeID",
    element:<ProductDetail/>,
    loader:getShoeData,

  },

  {
    path:"/contact",
    element:<Contact/>,
    action:contactData,
  },
  {
    path:"/signin",
    element:<SignIn/>,
  action:signInData,

    
  },
  {
    path:"/signup",
    element:<SignUp/>,
     action:signUpData,
   
  }
      ]
    
  },

])

  return(
  <>
  <RouterProvider router={router}/>
  </>)
}
export default App
