import { use, useEffect, useRef } from 'react'
import { v4 } from 'uuid'

import * as S from './ChatScrollList.styles'
import { ChatMessage, type User } from '@/components/molecules/ChatMessage'
import { useChat, type UserInput } from '@/store/useChat'
import { Composer } from '../Composer/Composer'
import { botMessages } from '@/data/messages'
import axios from 'axios'

export type Message = {
  id: string
  user: User
  field: string
  message: string
  description?: string
}

export const ChatScrollList = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const messages = useChat(state => state.messages)
  const addMessage = useChat(state => state.addMessage)
  const userInputs = useChat(state => state.userInputs)
  const addUserInput = useChat(state => state.addUserInput)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const scrollArea = scrollRef.current

    if (scrollArea) {
      scrollArea.scrollTo({
        top: scrollArea.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages])

  const formatToBoolean = (text: string) => {
    if (text.toLowerCase() === 'sim') {
      return true
    }

    return false
  }

  const callChatGPT = async (data: UserInput[]) => {
    try {
      const baseURL = process.env.NEXT_PUBLIC_API_URL as string

      const firstFlowQuestions = data.reduce((acc, eachData) => {
        if (
          ['hasGamblingHabit', 'hasEmergencyFund', 'hasDebts'].includes(
            eachData.field
          )
        ) {
          return {
            // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
            ...acc,
            [eachData.field]: formatToBoolean(eachData.text),
          }
        }

        return {
          // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
          ...acc,
          [eachData.field]: eachData.text,
        }
      }, {})

      const url = `${baseURL}/investor-profile`
      const response = await axios.post(url, {
        firstFlowQuestions: {
          ...firstFlowQuestions,
          profession: '',
        },
      })

      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (userInputs.length === 7) {
      handleFirstChatGPTFlow()
    }
  }, [userInputs])

  const handleFirstChatGPTFlow = async () => {
    const response = await callChatGPT(userInputs)

    const { description, recommendations } = response.data.chatReply

    addMessage({
      id: v4(),
      message: description,
      field: 'recommendations',
      user: 'bot',
    })

    const typedRecommendations = recommendations as {
      actions: string
      description: string
    }[]

    typedRecommendations.forEach((eachRecommendation, index) => {
      addMessage({
        id: String(index),
        message: eachRecommendation.actions,
        description: eachRecommendation.description,
        user: 'bot',
        field: 'recommendations',
      })
    })
  }

  const handleOnSendMessage = (text: string) => {
    const botMessagesShown = messages.filter(
      eachMessage => eachMessage.user === 'bot'
    )

    console.log('BOT MESSAGES SHOW', botMessagesShown)
    console.log('Text', text)

    addUserInput({
      id: v4(),
      text,
      field: botMessagesShown[botMessagesShown.length - 1].field,
    })

    if (botMessagesShown[botMessagesShown.length - 1].field === 'hasDebts') {
      return
    }

    const nextBotMessage = botMessages[botMessagesShown.length]

    setTimeout(() => {
      addMessage({
        id: v4(),
        message: nextBotMessage.message,
        field: nextBotMessage.field,
        user: 'bot',
      })
    }, 1000)
  }

  console.log('USER Inputs', userInputs)
  console.log('USER Messages', messages)

  return (
    <S.Container>
      <S.ScrollArea ref={scrollRef}>
        {messages.map(eachMessage => (
          <ChatMessage data={eachMessage} key={eachMessage.id} />
        ))}
      </S.ScrollArea>

      <Composer onSend={handleOnSendMessage} />
    </S.Container>
  )
}
