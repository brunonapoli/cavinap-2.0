import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Cavinap',
  description: "Cavinap's page",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
