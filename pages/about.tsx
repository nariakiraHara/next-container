import { NextPage } from 'next'
import { useState, useCallback } from 'react'

import classnames from 'classnames/bind'
import style from './about.module.scss'

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
        <div className={clx('p-about__modal')}>
          <div className={clx('p-about__content')}>
            <div className={clx('p-about__modalHeader')}>
              <a onClick={handleModalClose}>x</a>
            </div>
            <div>this is a pen</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Page
