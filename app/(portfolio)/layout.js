import Layout from "../../components/Layout"

export default function PortfolioLayout({ children }) {
  return (
    <div className="content px-2 px-sm-0">
      <div className="container px-4 px-sm-3">
        <Layout>{children}</Layout>
      </div>
    </div>
  )
}
