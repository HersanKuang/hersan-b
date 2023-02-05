import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ContentWrapper } from './style'
import type { D, L } from '@/assets/theme'

interface IProps {
  children?: ReactNode
  theme: D | L
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
