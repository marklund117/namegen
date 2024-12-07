import './styles/globals.css'
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry'
import Footer from './components/Footer/Footer'

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <AntdRegistry>
    <html>
    <body>
    <div className="min-h-[100vh]">{children}</div>
    <Footer></Footer>
    </body>
    </html>
  </AntdRegistry>
)

export default RootLayout

