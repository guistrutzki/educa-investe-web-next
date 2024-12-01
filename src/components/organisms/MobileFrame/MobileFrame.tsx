'use client'
import { useState } from 'react'

import { Header } from '@/components/molecules/Header'
import * as S from './MobileFrame.styles'
import { InitialScreen } from '../InitialScreen'
import { ChatScrollList } from '../ChatScrollList'

export const MobileFrame = () => {
  const [showInitialScreen, setShowInitialScreen] = useState(!true)

  const onInitialScreenButtonClick = () => {
    setShowInitialScreen(false)
  }

  return (
    <S.Container>
      <S.FrameHeader />
      <Header />

      {showInitialScreen ? (
        <InitialScreen
          onInitialScreenButtonClick={onInitialScreenButtonClick}
        />
      ) : (
        <ChatScrollList />
      )}
    </S.Container>
  )
}
