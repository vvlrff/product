import { FC } from 'react'

import { Dialog, ModalProps } from '@mui/material'

import Portal from '../Portal'

import s from './Modal.module.scss'

interface IModal extends ModalProps {};

const Modal: FC<IModal> = ({ children, open, onClose, className = '' }) => {
  return (
      <Portal>
          <Dialog
              open={open}
              onClose={onClose}
              className={className}
              classes={{ paper: s.modal }}
          >{children}</Dialog>
      </Portal>
  )
}

export default Modal
