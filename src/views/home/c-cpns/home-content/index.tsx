import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ContentWrapper } from './style'
import UserInfo from '@/views/home/c-cpns/home-content/c-cpns/user-info'

interface IProps {
  children?: ReactNode
}

const HomeContent: FC<IProps> = () => {
  return (
    <ContentWrapper>
      <UserInfo />
    </ContentWrapper>
  )
}

export default memo(HomeContent)
