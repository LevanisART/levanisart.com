export const metadata = {
  title: "Resume - Levan K.",
  description: "Resume of Levan Kotolashvili - Senior UX Engineer",
}

export default function ResumePage() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>
          <a href="/">Levan Kotolashvili</a>
        </h1>
        <div className="resume-contact">
          Email:{" "}
          <a href="mailto:levani.qotolashvili@gmail.com">
            levani.qotolashvili@gmail.com
          </a>
          &nbsp;@&nbsp;
          <a href="/">Portfolio</a>
          &nbsp;@&nbsp;
          <a href="https://github.com/LevanisART">GitHub</a>
          &nbsp;@&nbsp;
          <a href="https://linkedin.com/in/levan-kotolashvili">LinkedIn</a>
        </div>
      </header>
      <p className="resume-summary">
        Senior UX Engineer, bridging design and front-end engineering.
      </p>

      <h2>Work Experience</h2>

      <div className="resume-job">
        <h3>
          Senior UX Engineer @{" "}
          <a href="https://thewanderclub.com">The Wander Club</a>
        </h3>
        <span className="resume-date">September 2020 &ndash; Present</span>
      </div>
      <ul>
        <li>
          Rebranded the entire storefront and built a custom Shopify theme
          from the ground up, with a modular, performance-first architecture
          on Online Store 2.0.
        </li>
        <li>
          Designed and shipped in-house Shopify apps: a loyalty program, an
          advanced wishlist, and a custom analytics system that tracks line
          item properties — data Shopify does not expose natively — to give
          merchandising visibility into product personalization.
        </li>
        <li>
          Built a theme settings scheduler that lets the marketing team plan
          and automate site-wide changes (banners, copy, promotions) without
          engineering involvement.
        </li>
        <li>
          Developed Checkout UI extensions and Shopify Functions API
          integrations: address validation, custom engraving fees, gift notes,
          and tiered discount logic.
        </li>
        <li>
          Implemented advanced product personalization on the storefront,
          including monogramming and multi-step engraving configurators.
        </li>
        <li>
          Built complex product bundle builders that lifted average order
          value and conversion rate.
        </li>
        <li>
          Drove a continuous A/B testing program over five years, producing
          sustained CRO gains across PDP, cart, and checkout.
        </li>
        <li>
          Partnered with Rivo, Intelligems, and DTC Pages on UX optimization,
          integration work, and CRO experimentation.
        </li>
      </ul>

      <div className="resume-job">
        <h3>
          UX Engineer @{" "}
          <a href="https://krownthemes.com/">Krownthemes</a>
        </h3>
        <span className="resume-date">May 2020 &ndash; December 2021</span>
      </div>
      <ul>
        <li>
          Built and maintained Shopify themes alongside the design team,
          shipping commerce experiences for a wide range of merchants.
        </li>
        <li>
          Produced design work and interactive prototypes covering layout,
          motion, and component states.
        </li>
        <li>
          Introduced tooling and conventions that improved code quality and
          shipping velocity across the team.
        </li>
        <li>
          Reviewed pull requests and supported other engineers on design
          implementation.
        </li>
      </ul>

      <div className="resume-job">
        <h3>
          UX Engineer @{" "}
          <a href="https://sweatpantsagency.com/">Sweat Pants Agency</a>
        </h3>
        <span className="resume-date">December 2019 &ndash; August 2020</span>
      </div>
      <ul>
        <li>
          Set up frontend infrastructure and shared tooling for new client
          projects.
        </li>
        <li>
          Worked with design and product on scoping, prioritization, and
          feature definition.
        </li>
        <li>
          Built prototypes from design mocks for user testing and rapid
          iteration.
        </li>
      </ul>

      <div className="resume-job">
        <h3>
          UX Engineer @{" "}
          <a href="https://sparkmembership.com/">
            Spark Minds Martial Arts Software
          </a>
        </h3>
        <span className="resume-date">
          December 2017 &ndash; November 2019
        </span>
      </div>
      <ul>
        <li>
          Built prototypes and production UI for a multi-platform martial arts
          management product.
        </li>
        <li>
          Designed new flows and components across web and admin surfaces.
        </li>
        <li>
          Collaborated with design and engineering to identify and ship UX
          improvements informed by customer feedback.
        </li>
      </ul>

      <h2>Education</h2>
      <div className="resume-job">
        <h3>
          Bachelor of Computer Science @{" "}
          <span className="resume-company-text">Tbilisi State University</span>
        </h3>
        <span className="resume-date">2016 &ndash; 2020</span>
      </div>
    </div>
  )
}
