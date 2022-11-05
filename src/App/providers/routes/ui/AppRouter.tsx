import { Suspense, FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'Widgets'
import { routeConfig } from 'App/providers/routes/config/routeConfig/routeConfig'

const AppRouter: FC = () => {
  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              {Object.values(routeConfig).map(({ path, element }) => (
                  <Route
                      key={path}
                      path={path}
                      element={element}
                    />
              ))}
          </Routes>
      </Suspense>
  )
}

export default AppRouter
