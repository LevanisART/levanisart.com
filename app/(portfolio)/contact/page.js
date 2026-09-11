export const metadata = {
  title: "Contact - Levan K.",
  description: "Get in touch with Levan Kotolashvili for your next project",
}

export default function ContactPage() {
  return (
    <div className="contact-split">
      <aside className="contact-split-left">
        <h1 className="contact-headline">
          Let&rsquo;s work<br />together
        </h1>
      </aside>

      <div className="contact-split-right">
        <div className="contact-section">
          <p className="contact-text">
            Whether you have a product idea, need a
            design refresh, or want to build something from scratch -
            I&rsquo;d love to hear from you.
          </p>
        </div>

        <div className="contact-section">
          <span className="contact-label">(Email)</span>
          <a
            href="mailto:levani.qotolashvili@gmail.com"
            className="contact-email"
          >
            levani.qotolashvili@gmail.com
          </a>
        </div>

        <div className="contact-section">
          <span className="contact-label">(Message)</span>
          <form
            action="https://formspree.io/f/manwqway"
            method="POST"
            className="contact-form"
          >
            <div className="contact-form-row">
              <div className="contact-field">
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div className="contact-field">
                <input type="email" placeholder="E-mail" name="email" />
              </div>
            </div>
            <div className="contact-field">
              <textarea placeholder="Message" name="message" />
            </div>
            <button type="submit" className="contact-submit">
              Send message &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
