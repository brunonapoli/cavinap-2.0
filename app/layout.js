import './globals.css';
import Header from './components/Header';
import ScrollToTop from './components/ScrollTop';
import Bar from './components/Bar';

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
          <Bar />
          {children}
          <ScrollToTop />
        </>
        </body>
    </html>
  )
}
