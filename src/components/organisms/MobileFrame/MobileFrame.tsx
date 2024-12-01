'use client'
import { useState } from 'react'
import axios from 'axios'

import { Header } from '@/components/molecules/Header'
import * as S from './MobileFrame.styles'
import { InitialScreen } from '../InitialScreen'
import { ChatScrollList } from '../ChatScrollList'
import { useChat, type UserInput } from '@/store/useChat'
import { botMessages } from '@/data/messages'
import { Composer } from '../Composer/Composer'

export const MobileFrame = () => {
  const [showInitialScreen, setShowInitialScreen] = useState(true)
  const addMessage = useChat(state => state.addMessage)
  const addUserInput = useChat(state => state.addUserInput)
  const userInputs = useChat(state => state.userInputs)

  const callChatGPT = async (data: UserInput[]) => {
    try {
      const url = 'http://localhost:3333/investor-profile'
      const response = await axios.post(url, {
        firstFlowQuestions: {
          gender: 'feminino',
          age: '30',
          profession: 'Desenvolvedor',
          incomeRange: '5000',
          averageMonthlySpendingOnLeisure: '4000',
          hasGamblingHabit: true,
          hasEmergencyFund: true,
          hasDebts: true,
        },
      })

      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  const onInitialScreenButtonClick = async () => {
    setShowInitialScreen(false)

    setTimeout(() => {
      addMessage(botMessages[0])
    }, 500)

    setTimeout(() => {
      addMessage(botMessages[1])
    }, 1500)

    setTimeout(() => {
      addUserInput({
        id: '1',
        text: '30 anos',
        previousQuestionId: '2',
      })

      addMessage({
        id: '2',
        message: '30 anos',
        user: 'user',
      })
    }, 2500)

    setTimeout(() => {
      addMessage(botMessages[2])
    }, 3500)

    setTimeout(() => {
      addUserInput({
        id: '2',
        text: 'Feminino',
        previousQuestionId: '3',
      })

      addMessage({
        id: '3',
        message: 'Feminino',
        user: 'user',
      })
    }, 4500)

    setTimeout(() => {
      addMessage(botMessages[3])
    }, 5500)

    setTimeout(() => {
      addUserInput({
        id: '51231',
        text: 'R$ 5.000,00',
        previousQuestionId: '4',
      })

      addMessage({
        id: '31231',
        message: 'R$ 5.000,00',
        user: 'user',
      })
    }, 6500)

    setTimeout(() => {
      addMessage(botMessages[4])
    }, 7500)

    setTimeout(() => {
      addUserInput({
        id: '512311231',
        text: 'R$ 2.000,00',
        previousQuestionId: '5',
      })

      addMessage({
        id: '3123112321',
        message: 'R$ 2.000,00',
        user: 'user',
      })
    }, 8500)

    setTimeout(() => {
      addMessage(botMessages[5])
    }, 9500)

    setTimeout(() => {
      addUserInput({
        id: '512311231',
        text: 'Sim',
        previousQuestionId: '5',
      })

      addMessage({
        id: '312311232112321',
        message: 'Sim',
        user: 'user',
      })
    }, 10500)

    setTimeout(() => {
      addMessage(botMessages[6])
    }, 11500)

    setTimeout(() => {
      addUserInput({
        id: '51231123123321231',
        text: 'Não',
        previousQuestionId: '6',
      })

      addMessage({
        id: '51231123123321231',
        message: 'Não',
        user: 'user',
      })
    }, 12500)

    setTimeout(() => {
      addMessage(botMessages[7])
    }, 13500)

    setTimeout(() => {
      addUserInput({
        id: '512311231233212312321',
        text: 'Sim',
        previousQuestionId: '6',
      })

      addMessage({
        id: '5123112312332123132131',
        message: 'Sim',
        user: 'user',
      })
    }, 14500)

    setTimeout(async () => {
      const response = await callChatGPT(userInputs)

      const { description, recommendations } = response.data.chatReply

      addMessage({
        id: '1',
        message: description,
        user: 'bot',
      })

      recommendations.forEach((eachRecommendation, index) => {
        addMessage({
          id: String(index),
          message: eachRecommendation.actions,
          description: eachRecommendation.description,
          user: 'bot',
        })
      })
    }, 15500)
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
