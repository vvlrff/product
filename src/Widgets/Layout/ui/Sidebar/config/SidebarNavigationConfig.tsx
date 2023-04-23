import i18next from 'i18next'
import { AppRoutes, RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { ReactNode } from 'react'

interface ISidebarNavigationItemSchema {
  icon: ReactNode
  route: string
  text: string
}

interface ISidebarNavigationSchema {
  Home: ISidebarNavigationItemSchema
  Profile: ISidebarNavigationItemSchema
  Product: ISidebarNavigationItemSchema
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
    text: i18next.t('widget_sidebar_navigation_text_profile')
  },
  Product: {
    icon: <ShoppingBasketIcon />,
    route: RoutesPath.product,
    text: i18next.t('widget_sidebar_navigation_text_product')
  }
}
