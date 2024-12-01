'use client'
import { useState } from 'react'

import { Header } from '@/components/molecules/Header'
import * as S from './MobileFrame.styles'
import { InitialScreen } from '../InitialScreen'

export const MobileFrame = () => {
  const [showInitialScreen, setShowInitialScreen] = useState(false)

  return (
    <S.Container>
      <S.FrameHeader />
      <Header />

      <InitialScreen />
    </S.Container>
  )
}
