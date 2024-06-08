import Footer from '#/shared/components/layout/Footer'
import Navbar from '#components/layout/Navbar'
import '#styles/globals.scss'
import { ViewTransitions } from 'next-view-transitions';

export const metadata = {
  title: 'Bauztel - Website',
  description: 'Generated by create next app',
}

const RootLayout: FC = ({ children }) => {
  return (
    <ViewTransitions>

    <html lang='es'>
      <body>
        <Navbar />
        <div className="container">
          {children}
        </div>
          <br />
          <br />
          {/* <Footer /> */}
      </body>
    </html>
    </ViewTransitions>
  )
}

export default RootLayout
