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
        <div className="flex"></div>
      </div>
      <div className="options">
        <div className="left">
          <a href="/" className="item">
            University
          </a>
          <a href="/" className="item">
            Project
          </a>
          <a href="/" className="item">
            Notes
          </a>
          <a href="/" className="item">
            Skill
          </a>
          <a href="/" className="item">
            About
          </a>
          <a href="/" className="item iconfont">
            &#xe6a4;
          </a>
        </div>
        <div className="right">
          <a href="/" className="item iconfont">
            &#xe609;
          </a>
          <a href="/" className="item iconfont">
            &#xe65b;
          </a>
          <a href="/" className="item iconfont">
            &#xe60a;
          </a>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(HomeHeader)
