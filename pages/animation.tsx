import classNames from 'classnames/bind'
import React, { useState } from 'react'

import style from './animation.module.scss'

const clsx = classNames.bind(style)

export const Page = () => {
  const [isMove, setIsMove] = useState(false)
  const onClick = () => {
    setIsMove(prevState => !prevState)
  }
  return (
    <>
      <div className={clsx('box', { active: isMove })}></div>
      <button onClick={onClick}>動かす</button>
    </>
  )
}

export default Page
