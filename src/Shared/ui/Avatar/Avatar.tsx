import { FC } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

import s from './Avatar.module.scss'

interface IAvatar {
  username?: string
};

export const Avatar: FC<IAvatar> = (props) => {
  return (
      <div className={s.avatar}>
          <CameraAltIcon/>
      </div>
  )
}
