import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getProfileIsEdit = (state: StateSchema) => state?.profileFormSchema?.isEdit
