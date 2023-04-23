export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  PRODUCT = 'product',
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PRODUCT]: '/product',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*'
}
