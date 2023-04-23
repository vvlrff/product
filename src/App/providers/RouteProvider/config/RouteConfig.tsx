import { HomePage, NotFoundPage, ProductPage } from 'Pages'
import { ProfilePage } from 'Pages/ProfilePage'
import { RouteProps } from 'react-router'

import { AppRoutes, RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <HomePage />
  },
  [AppRoutes.PROFILE]: {
    path: RoutesPath.profile,
    element: <ProfilePage />
  },
  [AppRoutes.PRODUCT]: {
    path: RoutesPath.product,
    element: <ProductPage />
  },
  // 404
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />
  }
}
