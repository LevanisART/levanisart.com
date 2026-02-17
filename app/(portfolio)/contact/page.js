export const metadata = {
  title: "Contact - Levan K.",
  description: "Get in touch with Levan Kotolashvili for your next project",
}

export default function ContactPage() {
  return (
    <div>
      <h1 className="title">Let&#39;s work together</h1>
      <p className="mt-4">
        I&#39;m always open to discussing new opportunities and interesting
        projects.
      </p>
      <p className="mt-5">
        Email -{" "}
        <a href="mailto:levani.qotolashvili@gmail.com">
          levani.qotolashvili@gmail.com
        </a>
      </p>

      <div className="contact-content mt-5">
        <div className="row">
          <div className="col-lg-8">
            <form action="https://formspree.io/f/manwqway" method="POST">
              <div class="d-flex flex-wrap gap-10 contact-info">
                <div className="form-input col-lg-6 col-12 px-0 pe-lg-2">
                  <input type="text" placeholder="Name" name="name" />
                </div>
                <div className="form-input col-lg-6 col-12 px-0 ps-lg-2">
                  <input type="email" placeholder="E-mail" name="email" />
                </div>
              </div>
              <div class="form-input">
                <textarea placeholder="Message" name="message"></textarea>
              </div>
              <div class="submit-button">
                <input class="btn" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
