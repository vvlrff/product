import { useAppDispatch } from './lib/hooks/useAppDispatch'
import { useTypedTranslation } from './lib/hooks/useTypedTranslation'
import { useTheme } from './lib/hooks/useTheme'

import Button from './ui/Button'
import Autocomplete from './ui/Autocomplete'
import { ToggleThemeButton } from './ui/ToggleThemeButton'
import { ToggleLanguegeButton } from './ui/ToggleLanguegeButton'
import Container from './ui/Container'
import Loader from './ui/Loader'
import Portal from './ui/Portal'
import { TextInput } from './ui/TextInput'
import Modal from './ui/Modal/Modal'
import { IUser } from './types/RegistrationAutorizationTypes'
import Logotype from './assets/icons/logo.svg'

export {
  Autocomplete,
  Button,
  Container,
  TextInput,
  Loader,
  Modal,
  Logotype,
  ToggleThemeButton,
  ToggleLanguegeButton,
  IUser,
  Portal
}

export {
  useAppDispatch,
  useTypedTranslation,
  useTheme
}
