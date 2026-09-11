import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.scss"
import SmoothScroll from "../components/SmoothScroll"
import PageTransition from "../components/PageTransition"

export const metadata = {
  title: "Levan K. - UX Engineer",
  description:
    "Portfolio of Levan Kotolashvili - UX Engineer specializing in UI/UX Design and Front-end Development",
  author: "Levan Kotolashvili",
  keywords: ["UX Engineer", "UI Designer", "Front-end Developer", "Portfolio"],
  openGraph: {
    title: "Levan K. - UX Engineer",
    description: "Portfolio of Levan Kotolashvili - UX Engineer",
    url: "https://levanisart.com",
    siteName: "Levan K. Portfolio",
    images: [
      {
        url: "https://i.ibb.co/wBnvggV/LA.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    handle: "@levanisart",
    site: "@levanisart",
    cardType: "summary_large_image",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        <PageTransition />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (let r of registrations) { r.unregister(); }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
