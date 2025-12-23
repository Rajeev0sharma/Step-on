import { NavLink, useNavigate, useRouteError } from "react-router-dom"
import "./error.css"
export const ErrorPage=()=>{
const error= useRouteError()
const navigate=useNavigate()
const handleBack=()=>{
    navigate(-1)
}
if(error.status===404){
 return(
    <section className="error-page">
        <figure>
            <img src="/image/404-error.jpg" alt="404 error" />
        </figure>
        <div>
            <p>
                The page you are looking for could not be found.
            </p>
            <NavLink to="/">
            Back to Home page
            </NavLink>
            <button onClick={handleBack}>Go back</button>
        </div>
    </section>
 )   
}

    return <h1>404 error</h1>
}
