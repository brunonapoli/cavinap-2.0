import './globals.css';
import Header from './components/Header';
import ScrollToTop from './components/ScrollTop';

export const metadata = {
  title: 'Cavinap',
  description: "Cavinap's page",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
          {children}
          <ScrollToTop />
        </>
        </body>
    </html>
  )
}
