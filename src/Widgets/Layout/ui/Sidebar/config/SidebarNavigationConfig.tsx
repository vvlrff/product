import i18next from 'i18next'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { ReactNode } from 'react'

interface ISidebarNavigationItemSchema {
  icon: ReactNode
  route: string
  text: string
  authOnly?: boolean
}

interface ISidebarNavigationSchema {
  Home: ISidebarNavigationItemSchema
  Profile: ISidebarNavigationItemSchema
  Articles: ISidebarNavigationItemSchema
}

type ISidebarNavigationSchemaKeys = keyof ISidebarNavigationSchema

export const SidebarNavigationSchema: Record<ISidebarNavigationSchemaKeys, ISidebarNavigationItemSchema> = {
  Home: {
    icon: <HomeIcon />,
    route: RoutesPath.main,
    text: i18next.t('widget_sidebar_navigation_text_home')
  },
  Profile: {
    icon: <PersonIcon />,
    route: RoutesPath.profile,
    text: i18next.t('widget_sidebar_navigation_text_profile'),
    authOnly: true
  },
  Articles: {
    icon: <PersonIcon />,
    route: RoutesPath.articles,
    text: i18next.t('widget_sidebar_navigation_text_articles')
  }
}
