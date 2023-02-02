import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ContentWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HomeContent: FC<IProps> = () => {
  return <ContentWrapper>HomeContent</ContentWrapper>
}

export default memo(HomeContent)
