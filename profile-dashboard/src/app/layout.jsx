import './globals.css'
import Header from "@/components/Header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/** Header */}
        <Header/>
        <div className='m-auto max-w-4xl mt-10'>
          {children}
        </div>
      </body>
    </html>
  )
}
