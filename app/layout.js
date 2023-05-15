import './globals.css';
import Header from './components/Header';
import ScrollToTop from './components/ScrollTop';

export const metadata = {
  title: 'Cavinap',
  description: "Cavinap's page",
  // icons: {
  //   icon: '/wiring.ico',
  // },
}

//EL METADATA ME SOBREESCRIBE EL COMPONENTE HEAD, NEXTJS 13 TRABAJA CON ESTA VARIABLE PARA CAMBIAR
//TANTO EL TÍTULO, COMO SU FOTO Y CONTENIDO. PARA LAS IMAGENES LA FOTO TIENE QUE TENER LOS SIGUIENTES TITULOS:
//favicon.ico, icon.(ico|jpg|jpeg|png|svg) or apple-icon.(jpg|jpeg|png|svg)

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
