import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './style'
import HomeContent from '@/views/home/c-cpns/home-content'
import HomeFooter from '@/views/home/c-cpns/home-footer'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <HomeContent />
      <HomeFooter />
    </HomeWrapper>
  )
}

export default memo(Home)
