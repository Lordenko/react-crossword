import { lazy } from 'react'

export const routes = {
    Start: lazy(() => import('../pages/Start')),
    Game: lazy(() => import('../pages/Game')),
    Settings: lazy(() => import('../pages/Settings')),
    Results: lazy(() => import('../pages/Results'))
}