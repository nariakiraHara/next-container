import Modal from 'components/molecules/Modal'
import { MouseEvent } from 'react'
import Image from 'next/image'

type Props = {
  isShow: boolean
  onCloseClick?: (event?: MouseEvent<HTMLElement>) => void
}

export const SimpleModal: React.FC<Props> = ({ isShow, onCloseClick }) => {
  return (
    <>
      {isShow && (
        <Modal onCloseClick={onCloseClick}>
          <div>
            <p>今なら無料</p>
            <Image
              height={250}
              width={300}
              src={'/images/sunset.jpg'}
              alt={'sunset'}
              layout={'fixed'}
            />
          </div>
        </Modal>
      )}
    </>
  )
}

export default SimpleModal
