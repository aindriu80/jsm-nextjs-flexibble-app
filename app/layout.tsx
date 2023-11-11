import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './global.css'
export const metadata = {
  title: 'Next Flexibble App',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
