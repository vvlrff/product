import { FC } from 'react'

import { ProfileForm } from 'Features/ProfileForm'
import { Layout } from 'Widgets'

const ProfilePage: FC = () => {
  return (
      <Layout>
          <ProfileForm />
      </Layout>
  )
}

export default ProfilePage
