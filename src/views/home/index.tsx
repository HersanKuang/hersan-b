import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { HomeWrapper } from './style'
import HomeHeader from '@/views/home/c-cpns/home-header'
import HomeContent from '@/views/home/c-cpns/home-content'
import HomeFooter from '@/views/home/c-cpns/home-footer'
import { dark, light } from '@/assets/theme'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const [switchTheme, setSwitchTheme] = useState(false)
  setTimeout(() => {
    setSwitchTheme(!switchTheme)
  }, 5000)

  return (
    <ThemeProvider theme={switchTheme ? dark : light}>
      <HomeWrapper>
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
      </HomeWrapper>
    </ThemeProvider>
  )
}

export default memo(Home)
