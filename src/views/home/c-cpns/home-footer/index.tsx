import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from './style'
import type { D, L } from '@/assets/theme'

interface IProps {
  children?: ReactNode
  theme: D | L
}

const HomeFooter: FC<IProps> = () => {
  return <FooterWrapper>HomeFooter</FooterWrapper>
}

export default memo(HomeFooter)
