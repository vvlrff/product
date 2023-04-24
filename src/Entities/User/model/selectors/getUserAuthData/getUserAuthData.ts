import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getUserAuthData = (state: StateSchema) => state.userStateSchema.user
