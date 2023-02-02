import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { HomeWrapper } from './style'
import HomeHeader from '@/views/home/c-cpns/home-header'
import HomeContent from '@/views/home/c-cpns/home-content'
import HomeFooter from '@/views/home/c-cpns/home-footer'
import { dark } from '@/assets/theme'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <ThemeProvider theme={dark}>
      <HomeWrapper>
        <HomeHeader theme={dark} />
        <HomeContent />
        <HomeFooter />
      </HomeWrapper>
    </ThemeProvider>
  )
}

export default memo(Home)
