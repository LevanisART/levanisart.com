import { getProjectsByPlatform } from '../../../lib/projects'
import ProjectGrid from '../../../components/ProjectGrid'

export const metadata = {
  title: 'Shopify Projects - Levan K.',
  description: 'Shopify projects by Levan Kotolashvili',
}

export default function PortfolioShopifyPage() {
  const projects = getProjectsByPlatform('Shopify')

  return (
    <div>
      <h1 className="title pb-3">Shopify Projects</h1>
      <ProjectGrid projects={projects} />
    </div>
  )
}
