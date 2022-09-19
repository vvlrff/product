import { AboutPage } from "Pages/AboutPage"
import { HomePage } from "Pages/HomePage"
import { RouteProps } from "react-router"

import { AppRoutes, RoutesPath } from "Shared/config/AppRoutes"

export const routeConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPath.main,
        element: <HomePage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath.about,
        element: <AboutPage/>
    }
}