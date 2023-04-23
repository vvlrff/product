import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistartionError = (state: StateSchema) => state?.registerUserSchema?.error
