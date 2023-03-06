import { FC, ReactNode } from 'react'

import { Footer } from '../Footer'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

import s from './Layout.module.scss'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.wrapper}>
        <Sidebar />
        <main className={s.main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
