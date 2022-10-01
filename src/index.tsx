import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App'
import ThemeProvider from './App/providers/ui/ThemeProvider'

import 'Shared/config/i18next/i18next'

import 'App/styles/index.scss'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense>
                <App/>
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>
)
