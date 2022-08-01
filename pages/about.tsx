import { NextPage } from 'next'
import { useState, useCallback } from 'react'

import classnames from 'classnames/bind'
import style from './about.module.scss'
import SimpleModal from 'components/organisms/SimpleModal'

const clx = classnames.bind(style)

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
