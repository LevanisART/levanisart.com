import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <div className="text-center py-5">
        <h1 className="title">404 - Page Not Found</h1>
        <p className="mt-4">
          The page you&#39;re looking for doesn&#39;t exist.
        </p>
        <a href="/" className="btn btn-outline-dark mt-3">
          Go Home
        </a>
      </div>
    </Layout>
  )
}
