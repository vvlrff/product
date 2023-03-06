export enum AppRoutes {
  MAIN = 'main',
  PRODUCT = 'product',
  PROFILE = 'profile',

  //404
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PRODUCT]: '/product',
  [AppRoutes.PROFILE]: '/profile',

  //404
  [AppRoutes.NOT_FOUND]: '*'
}
