import { Form } from "react-router-dom";
import "./signup.css";

export const signUpData = async ({ request }) => {
  const res = await request.formData();
  const data = Object.fromEntries(res);
  console.log(data);
};

export const SignUp = () => {
  return (
    <section className="signup-page">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <p>Welcome! Please enter your details</p>

        <Form method="post" action="/signup" className="signup-form">
          <label>
            First Name
            <input
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              required
              autoComplete="off"
            />
          </label>

          <label>
            Last Name
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              required
              autoComplete="off"
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              placeholder="you@gmail.com"
              required
              autoComplete="off"
            />
          </label>

          <button type="submit">Sign In</button>
        </Form>
      </div>
    </section>
  );
};
