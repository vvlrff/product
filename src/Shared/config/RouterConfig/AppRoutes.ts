export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*'
}
