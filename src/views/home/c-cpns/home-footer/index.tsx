import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HomeFooter: FC<IProps> = () => {
  return <FooterWrapper>HomeFooter</FooterWrapper>
}

export default memo(HomeFooter)
