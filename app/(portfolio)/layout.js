import Layout from "../../components/Layout"

export default function PortfolioLayout({ children }) {
  return (
    <div className="content-figma">
      <Layout>{children}</Layout>
    </div>
  )
}
