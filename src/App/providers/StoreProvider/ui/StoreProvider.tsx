import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'App'
import { StateSchema } from '../config/StateSchema'

interface IStoreProvider {
  children?: ReactNode
  initialState?: StateSchema
};

const StoreProvider: FC<IStoreProvider> = (props) => {
  const {
    children,
    initialState
  } = props

  const store = createReduxStore(initialState)

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}

export default StoreProvider
