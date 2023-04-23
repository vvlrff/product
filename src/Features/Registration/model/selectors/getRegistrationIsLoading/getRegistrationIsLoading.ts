import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationIsLoading = (state: StateSchema) => state?.registerUserSchema?.isLoading
