import type { Message } from '@/components/organisms/ChatScrollList'
import { create } from 'zustand'

export type UserInput = {
  id: string
  text: string
  previousQuestionId: string
}

type ChatStore = {
  messages: Message[]
  addMessage: (message: Message) => void
  userInputs: UserInput[]
  addUserInput: (userInput: UserInput) => void
}

export const useChat = create<ChatStore>(set => ({
  messages: [],
  userInputs: [],

  addMessage: (message: Message) =>
    set(state => ({ messages: [...state.messages, message] })),

  addUserInput: (userInput: UserInput) =>
    set(state => ({ userInputs: [...state.userInputs, userInput] })),
}))
