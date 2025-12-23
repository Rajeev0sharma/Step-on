import { Form } from "react-router-dom";
import "./contact.css"

export const contactData= async({request})=>{
try {
const res= await request.formData()
const data= Object.fromEntries(res)
console.log(data);

} catch (error) {
    console.log(error);
    
}
}

export const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        Have questions about Step-On? Send us a message.
      </p>

      <Form method="post" action="/contact" className="contact-form">
        <div className="contact-row">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            required
            autoComplete="off"
          />

          <label htmlFor="email">Email-id</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@gmail.com"
            required
            autoComplete="off"
          />
        </div>

        <div className="contact-row">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </Form>
    </section>
  );
};


