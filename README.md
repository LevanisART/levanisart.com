# Levan K. Portfolio

A modern Next.js portfolio website showcasing UX Engineering work including UI/UX design and front-end development projects.

## Technologies Used

- **Next.js 14** with App Router
- **React 18**
- **Styled Components** for styling
- **Bootstrap** for responsive layout
- **SCSS** for custom styling
- **Gray Matter** for markdown processing
- **Next MDX Remote** for markdown content

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LevanisART/gatsby-portfolio.git
cd levanisart-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout component
│   ├── page.js            # Homepage
│   ├── contact/           # Contact page
│   ├── projects/[slug]/   # Dynamic project pages
│   └── not-found.js       # 404 page
├── components/            # React components
│   ├── Header.js          # Site header
│   ├── Footer.js          # Site footer
│   ├── Navigation.js      # Navigation component
│   ├── Layout.js          # Page layout wrapper
│   ├── HomePage.js        # Homepage content
│   └── ProjectContent.js  # Project content renderer
├── lib/                   # Utility functions
│   └── projects.js        # Project data handling
├── public/                # Static assets
│   ├── images/            # Project images
│   └── fonts/             # Custom fonts
├── src/                   # Legacy source directory
│   └── projects/          # Markdown project files
├── styles/                # Global styles
│   ├── globals.scss       # Main stylesheet
│   └── _fonts.scss        # Font definitions
└── next.config.js         # Next.js configuration
```

## Features

- **Responsive Design**: Works on all device sizes
- **Modern Performance**: Built with Next.js for optimal speed
- **SEO Optimized**: Meta tags and structured data
- **Project Showcase**: Dynamic project pages from markdown
- **Contact Form**: Get in touch functionality
- **Social Links**: Connect on various platforms

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The site is configured for static export and can be deployed to any static hosting service:

```bash
npm run build
npm run export
```

This creates an `out` directory with the static files ready for deployment.

## Contact

- **Email**: levani.qotolashvili@gmail.com
- **LinkedIn**: [linkedin.com/in/levan-kotolashvili](https://linkedin.com/in/levan-kotolashvili)
- **GitHub**: [github.com/LevanisART](https://github.com/LevanisART)
- **Dribbble**: [dribbble.com/LevanisART](https://dribbble.com/LevanisART)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.