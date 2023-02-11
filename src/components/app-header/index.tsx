import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
  handleSwitchTheme: () => void
}

const AppHeader: FC<IProps> = (props) => {
  const { handleSwitchTheme } = props
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
          <a href="/home" className="item">
            University
          </a>
          <a href="/home" className="item">
            Project
          </a>
          <a href="/home" className="item">
            Notes
          </a>
          <a href="/home" className="item">
            Skill
          </a>
          <a href="/home" className="item">
            About
          </a>
          <a
            href="https://github.com/HersanKuang/hersan-blog"
            className="item iconfont"
          >
            &#xe6a4;
          </a>
        </div>
        <div className="right">
          <span className="item iconfont">&#xe609;</span>
          <span className="item iconfont" onClick={handleSwitchTheme}>
            &#xe65b;
          </span>
          <span className="item iconfont">&#xe60a;</span>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
