import { useRouteError } from 'react-router-dom'
import './index.less'
import { Link } from 'react-router-dom'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import { IconFaceIdError } from '@tabler/icons-react'

interface ErrorRouter {
  status?: number
  statusText?: string
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorRouter

  return (
    <section className="error">
      <IconFaceIdError size="68" />
      <div className="error__container">
        <h1 className="error--title">{`${error.status} ${error.statusText}`}</h1>
        <p>{`Sorry, the route you're looking for could not be found.`}</p>
      </div>
      <Link to="/" className="error__return">
        <IconArrowNarrowLeft />
        <span>Go to the menu</span>
      </Link>
    </section>
  )
}

export default ErrorPage
