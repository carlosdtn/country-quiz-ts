import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'unfonts.css'
import App from './App.tsx'
import './index.css'
import ErrorPage from './pages/error-page/index'
import GuessFlag from './pages/guess-flag'
import Menu from './pages/menu'
import GuessCapital from './pages/quess-capital'
import Result from './pages/result'

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
