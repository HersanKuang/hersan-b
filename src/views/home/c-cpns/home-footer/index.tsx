import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HomeFooter: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <div className="icp">
        <span className="iconfont fz">&#xe6b5; 2023 Hersan.cn 版权所有</span>
        <a
          href="https://beian.miit.gov.cn/"
          rel="noopener noreferrer"
          target="_blank"
          className="iconfont fz"
        >
          粤ICP备2022109170号-1
        </a>
      </div>
    </FooterWrapper>
  )
}

export default memo(HomeFooter)
