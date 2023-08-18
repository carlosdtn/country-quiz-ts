import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page/index'
import Menu from './pages/menu'
import GuessCapital from './pages/quess-capital'
import GuessFlag from './pages/guess-flag'
import Result from './pages/result'
import './index.css'
import 'unfonts.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App card={<Menu />} />,
    errorElement: <ErrorPage />
  },
  {
    path: '/game/guess-capital',
    element: <App card={<GuessCapital />} />
  },
  {
    path: '/game/guess-flag',
    element: <App card={<GuessFlag />} />
  },
  {
    path: '/result',
    element: <App card={<Result />} />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
