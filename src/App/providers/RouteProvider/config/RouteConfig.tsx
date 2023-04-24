import { HomePage, NotFoundPage, ProductPage } from 'Pages'
import { ProfilePage } from 'Pages/ProfilePage'

import { AppRoutes, AppRoutesWithAuthProps, RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'

export const routeConfig: Record<AppRoutes, AppRoutesWithAuthProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <HomePage />
  },
  [AppRoutes.PROFILE]: {
    path: RoutesPath.profile,
    element: <ProfilePage />,
    authOnly: true
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
