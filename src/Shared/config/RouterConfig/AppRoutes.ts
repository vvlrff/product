export enum AppRoutes {
  MAIN = 'main',
  PRODUCT = 'product',
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PRODUCT]: '/product',
  [AppRoutes.NOT_FOUND]: '*'
}
