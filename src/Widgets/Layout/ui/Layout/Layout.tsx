import { FC, ReactNode } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import s from './Layout.module.scss'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
      <div className={s.layout}>
          <Header/>
          <main className={s.main}>{children}</main>
          <Footer/>
      </div>
  )
}

export default Layout
