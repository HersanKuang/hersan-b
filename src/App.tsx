import React, { memo, useCallback, useState } from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AppHeader from '@/components/app-header'
import { dark, light } from '@/assets/theme'

function App() {
  const [switchTheme, setSwitchTheme] = useState(false)
  const itemClick = useCallback(() => {
    setSwitchTheme(!switchTheme)
  }, [switchTheme])
  return (
    <ThemeProvider theme={switchTheme ? light : dark}>
      <div className="app">
        <AppHeader handleSwitchTheme={itemClick} />
        {useRoutes(routes)}
      </div>
    </ThemeProvider>
  )
}

export default memo(App)
