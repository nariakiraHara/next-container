import Modal from 'components/molecules/Modal'
import { MouseEvent } from 'react'

type Props = {
  isShow: boolean
  onCloseClick?: (event?: MouseEvent<HTMLElement>) => void
}

export const SimpleModal: React.FC<Props> = ({ isShow, onCloseClick }) => {
  return (
    <>
      {isShow && (
        <Modal onCloseClick={onCloseClick}>
          <div></div>
        </Modal>
      )}
    </>
  )
}

export default SimpleModal
