import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './style'
import HomeHeader from '@/components/home-header'
import HomeContent from '@/components/home-content'
import HomeFooter from '@/components/home-footer'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <HomeHeader></HomeHeader>
      <HomeContent></HomeContent>
      <HomeFooter></HomeFooter>
    </HomeWrapper>
  )
}

export default memo(Home)
