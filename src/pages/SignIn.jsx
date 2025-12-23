import { Form, NavLink } from "react-router-dom"
import "./signin.css"

export const signInData= async({request})=>{
    const res = await request.formData();
    const data= Object.fromEntries(res)
    console.log(data);
}


export const SignIn = () => {
  return (
    <section className="signin-page">
      <div className="signin-card">
        <h1>Sign In</h1>
        <p>Welcome back!</p>

        <Form method="post" action="/signin" className="signin-form">
          <label>
            Username / Email
            <input
              type="text"
              name="username"
              placeholder="Username or Email"
              required
              autoComplete="off"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              autoComplete="off"
            />
          </label>

          <div className="signin-extra">
            <NavLink to="#" className="forgot-link">
              Forgot password?
            </NavLink>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </Form>
      </div>
    </section>
  );
};