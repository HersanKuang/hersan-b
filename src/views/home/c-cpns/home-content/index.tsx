import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ContentWrapper } from './style'
import UserInfo from '@/views/home/c-cpns/home-content/c-cpns/user-info'
import AboutUser from '@/views/home/c-cpns/home-content/c-cpns/about-user'

interface IProps {
  children?: ReactNode
}

const HomeContent: FC<IProps> = () => {
  return (
    <ContentWrapper>
      <UserInfo />
      <AboutUser />
    </ContentWrapper>
  )
}

export default memo(HomeContent)
