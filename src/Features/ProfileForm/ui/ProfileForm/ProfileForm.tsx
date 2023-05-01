import { FC, memo, useEffect } from 'react'
import { Avatar } from 'Shared/ui/Avatar'

import { FormProvider, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Button, useAppDispatch } from 'Shared'
import { useTranslation } from 'react-i18next'
import { TextField } from '../TextField/TextField'
import { DynamicModuleLoader } from 'Shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'Shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileFormActions, ProfileFormReducer } from '../../model/slice/ProfileFormSlice'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileIsEdit } from '../../model/selectors/getProfileMode/getProfileIsEdit'

import s from './ProfileForm.module.scss'

const initialReducers: ReducersList = {
  profileFormSchema: ProfileFormReducer
}

const ProfileForm: FC = () => {
  const methods = useForm({
    mode: 'onChange'
  })
  const { handleSubmit, setValue } = methods
  const { t } = useTranslation('profileForm')
  const dispatch = useAppDispatch()
  const isReadOnly = !useSelector(getProfileIsEdit)
  const profileData = useSelector(getProfileData)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  useEffect(() => {
    if (profileData) {
      setValue('email', profileData.email)
      setValue('firstName', profileData.name)
      setValue('lastName', profileData.lastName)
    }
  }, [profileData])

  const handleOnEdit = () => {
    dispatch(ProfileFormActions.setEditableMode())
  }

  const handleOnSave = (data: any) => {
    console.log(data)
  }

  return (
      <DynamicModuleLoader reducers={initialReducers}>
          <div className={s.form}>
              <FormProvider {...methods}>
                  <Avatar />
                  <div className={s.wrapper}>
                      <div className={s.fields}>
                          <TextField
                              name='email'
                              placeholder={t('fields.emailPlaceholder')}
                              className={s.field}
                              disabled={isReadOnly}
                        />
                          <TextField
                              name='firstName'
                              placeholder={t('fields.firstNamePlaceholder')}
                              className={s.field}
                              disabled={isReadOnly}
                            />
                          <TextField
                              name='lastName'
                              placeholder={t('fields.lastNamePlaceholder')}
                              className={s.field}
                              disabled={isReadOnly}
                            />
                      </div>
                      <div className={s.actions}>
                          {isReadOnly
                            ? (
                                <Button
                                    onClick={handleOnEdit}
                                >{t('buttonEdit')}</Button>
                              )
                            : (
                                <Button
                                    onClick={handleSubmit(handleOnSave)}
                                >{t('buttonSave')}</Button>
                              )}
                      </div>
                  </div>
              </FormProvider>
          </div>
      </DynamicModuleLoader>
  )
}

export default memo(ProfileForm)
