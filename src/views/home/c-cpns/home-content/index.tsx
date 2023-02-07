import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ContentWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HomeContent: FC<IProps> = () => {
  const arr: any[] = []
  for (let i = 0; i < 80; i++) {
    arr.push(i)
  }
  return (
    <ContentWrapper>
      {arr.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </ContentWrapper>
  )
}

export default memo(HomeContent)
