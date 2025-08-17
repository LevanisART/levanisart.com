import Layout from '../../components/Layout'

export const metadata = {
  title: 'Contact - Levan K.',
  description: 'Get in touch with Levan Kotolashvili for your next project',
}

export default function ContactPage() {
  return (
    <Layout>
      <h1 className="title">Let's work together</h1>
      
      <div className="contact-content mt-5">
        <div className="row">
          <div className="col-lg-8">
            <form 
              action="https://formspree.io/f/your-form-id" 
              method="POST"
              className="contact-form"
            >
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  required
                ></textarea>
              </div>
              
              <input type="submit" value="Send Message" />
            </form>
          </div>
          
          <div className="col-lg-4">
            <div className="contact-info mt-5 mt-lg-0">
              <h3>Get In Touch</h3>
              <p>I'm always open to discussing new opportunities and interesting projects.</p>
              
              <div className="contact-item mt-4">
                <strong>Email</strong>
                <br />
                <a href="mailto:levani.qotolashvili@gmail.com">
                  levani.qotolashvili@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
