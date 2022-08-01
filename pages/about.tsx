import { NextPage } from 'next'
import { useState, useCallback } from 'react'

import SimpleModal from 'components/organisms/SimpleModal'

export const Page: NextPage = () => {
  const [isShow, setIsShow] = useState(false)
  const handleModalOpen = useCallback(() => {
    setIsShow(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setIsShow(false)
  }, [])

  return (
    <>
      <button onClick={handleModalOpen}>モーダル</button>

      {isShow && (
        <SimpleModal onCloseClick={handleModalClose} isShow={isShow} />
      )}
    </>
  )
}

export default Page
