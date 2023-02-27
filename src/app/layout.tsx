import Navbar from '#components/layout/Navbar'
import '#styles/globals.scss'

export const metadata = {
  title: 'Bauztel - Website',
  description: 'Generated by create next app',
}

const RootLayout: FC = ({ children }) => {
  return (
    <html lang='es'>
      <body>
        <Navbar />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout