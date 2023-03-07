import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import type { D, L } from '@/assets/theme'

interface IProps {
  children?: ReactNode
  theme: D | L
}

const HomeHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="title">
        <a href="/" title="Hersan Blog" className="logo">
          <img src={require('@/assets/img/logo.png')} alt="Hersan Blog" />
          <h1>Hersan Blog</h1>
        </a>
      </div>
      <div className="options"></div>
    </HeaderWrapper>
  )
}

export default memo(HomeHeader)
