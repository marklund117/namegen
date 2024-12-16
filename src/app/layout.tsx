// imports first
import './styles/globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Namegen',
  description: 'Namegen',
}

// the ant design layout stuff is throwing errors so we'll do custom components
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <AntdRegistry>
    <html>
    <body>
    <Header></Header>
    <div className="min-h-[100vh] bg-white">{children}</div>
    <Footer></Footer>
    </body>
    </html>
  </AntdRegistry>
)

export default RootLayout

