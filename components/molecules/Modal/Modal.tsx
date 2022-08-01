import classnames from 'classnames/bind'

import { MouseEvent } from 'react'
import styles from './Modal.module.scss'
import Close from '../../../public/images/common/close.svg'

const clx = classnames.bind(styles)

type Props = {
  onCloseClick?: (event?: MouseEvent<HTMLElement>) => void
  children: React.ReactNode
}

export const Modal: React.FC<Props> = ({ onCloseClick, children }) => {
  return (
    <>
      <div className={clx('modal__layout')}>
        <div className={clx('modal__container')}>
          <div className={clx('modal__header')}>
            {onCloseClick && (
              <a className={clx('modal__close')} onClick={e => onCloseClick(e)}>
                <div>
                  <Close />
                </div>
              </a>
            )}
          </div>
          <div className={clx('modal__body')}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Modal
