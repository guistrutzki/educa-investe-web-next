import type { Message } from '@/components/organisms/ChatScrollList'
import { create } from 'zustand'

export type UserInput = {
  id: string
  text: string
  field: string
}

type ChatStore = {
  messages: Message[]
  userInputs: UserInput[]
  isTyping: boolean

  addMessage: (message: Message) => void
  addUserInput: (userInput: UserInput) => void
  setIsTyping: (isTyping: boolean) => void
}

export const useChat = create<ChatStore>(set => ({
  messages: [],
  userInputs: [],
  isTyping: true,

  addMessage: (message: Message) =>
    set(state => ({ messages: [...state.messages, message] })),

  addUserInput: (userInput: UserInput) =>
    set(state => ({
      userInputs: [...state.userInputs, userInput],
      messages: [
        ...state.messages,
        { id: userInput.id, user: 'user', field: '', message: userInput.text },
      ],
    })),

  setIsTyping: (isTyping: boolean) => set({ isTyping }),
}))
