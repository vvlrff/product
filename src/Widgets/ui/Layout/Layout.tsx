import { FC, ReactNode } from 'react'

import Footer from 'Widgets/ui/Footer'
import Header from 'Widgets/ui/Header'

import s from './Layout.module.scss'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
      <div>
          <Header/>
          <main className={s.main}>{children}</main>
          <Footer/>
      </div>
  )
}

export default Layout
