'use client'
import { useState } from 'react'
import axios from 'axios'
import { v4 } from 'uuid'

import { Header } from '@/components/molecules/Header'
import * as S from './MobileFrame.styles'
import { InitialScreen } from '../InitialScreen'
import { ChatScrollList } from '../ChatScrollList'
import { useChat, type UserInput } from '@/store/useChat'
import { botMessages } from '@/data/messages'

export const MobileFrame = () => {
  const [showInitialScreen, setShowInitialScreen] = useState(true)
  const addMessage = useChat(state => state.addMessage)
  const setIsTyping = useChat(state => state.setIsTyping)

  const onInitialScreenButtonClick = async () => {
    setShowInitialScreen(false)

    setTimeout(() => {
      addMessage(botMessages[0])
    }, 1000)

    setTimeout(() => {
      addMessage(botMessages[1])
      setIsTyping(false)
    }, 2000)
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
