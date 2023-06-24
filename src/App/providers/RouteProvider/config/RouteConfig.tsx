import { HomePage, NotFoundPage } from 'Pages'
import { ArticleSinglePage } from 'Pages/ArticleSinglePage'
import { ArticlesPage } from 'Pages/ArticlesPage'
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
  [AppRoutes.ARTICLES]: {
    path: RoutesPath.articles,
    element: <ArticlesPage />
  },
  [AppRoutes.ARTICLE_SINGLE]: {
    path: RoutesPath.articleSingle + '/:id',
    element: <ArticleSinglePage />
  },
  // 404
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />
  }
}
