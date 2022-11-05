import Loader from 'Shared/ui/Loader'

import s from './PageLoader.module.scss'

const PageLoader: React.FC = () => {
  return (
      <div className={s.container}>
          <Loader/>
      </div>
  )
}

export default PageLoader
