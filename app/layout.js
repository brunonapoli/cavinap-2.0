import './globals.css'

export const metadata = {
  title: 'Cavinap',
  description: "Cavinap's page",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
