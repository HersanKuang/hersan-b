import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HomeHeader: FC<IProps> = () => {
  return <HeaderWrapper>HomeHeader</HeaderWrapper>
}

export default memo(HomeHeader)
