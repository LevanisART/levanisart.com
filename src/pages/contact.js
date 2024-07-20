import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="title px-0 col-md-6">If you have a project in mind, complete the form below to send your enquiry.</h1>
    <div className="contact col-md-8 px-0 mt-5">
      <div className="email font-weight-normal mb-4">
        <span>Email - <a href="mailto:levani.qotolashvili@gmail.com">levani.qotolashvili@gmail.com</a></span>
      </div>
      <form action="https://formspree.io/f/manwqway" method="POST">
        <div className="d-flex flex-wrap contact-info">
          <div className="form-input col-lg-6 col-12 pr-0 pl-0 pr-lg-2">
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="form-input col-lg-6 col-12 pl-0 pr-0 pl-lg-2">
            <input type="email" placeholder="E-mail" name="email" />
          </div>
        </div>

        <div className="form-input">
          <textarea placeholder="Message" name="message"></textarea>
        </div>

        <div className="submit-button">
          <input className="btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </Layout>
)

export default Contact
