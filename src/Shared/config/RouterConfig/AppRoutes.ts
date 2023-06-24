import { RouteProps } from 'react-router'

export type AppRoutesWithAuthProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_SINGLE = 'articleSingle',

  // 404
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_SINGLE]: '/article', // + id
  [AppRoutes.NOT_FOUND]: '*'
}
