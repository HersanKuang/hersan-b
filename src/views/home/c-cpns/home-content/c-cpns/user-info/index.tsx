import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { InfoWrapper } from '@/views/home/c-cpns/home-content/c-cpns/user-info/style'

interface IProps {
  children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
  return (
    <InfoWrapper>
      <div className="profile">
        <div className="avatar">
          <img src={require('@/assets/img/avatar.jpg')} alt="Hersan" />
        </div>
        <div className="about-me">
          <div className="desc">A full-time front-end development engineer</div>
          <div className="connect">
            <a href="" className="iconfont">
              &#xe6a4;
            </a>
            <a href="" className="iconfont item">
              &#xe608;
            </a>
            <a href="" className="iconfont">
              &#xe89f;
            </a>
            <a href="" className="iconfont">
              &#xe65e;
            </a>
            <a href="" className="iconfont item">
              &#xe8db;
            </a>
            <a href="" className="iconfont">
              &#xe603;
            </a>
            <a href="" className="iconfont">
              &#xe883;
            </a>
            <a href="" className="iconfont">
              &#xe882;
            </a>
            <a href="" className="iconfont item">
              &#xe617;
            </a>
            <a href="" className="iconfont">
              &#xe77f;
            </a>
            <a href="" className="iconfont">
              &#xe60b;
            </a>
            <a href="" className="iconfont">
              &#xe601;
            </a>
          </div>
        </div>
      </div>
    </InfoWrapper>
  )
}

export default memo(UserInfo)
