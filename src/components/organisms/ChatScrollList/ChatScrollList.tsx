import * as S from './ChatScrollList.styles'
import { ChatMessage, type User } from '@/components/molecules/ChatMessage'
import { useChat } from '@/store/useChat'
import { useEffect, useRef } from 'react'
import { Composer } from '../Composer/Composer'

export type Message = {
  id: string
  user: User
  message: string
  description?: string
}

export const ChatScrollList = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const messages = useChat(state => state.messages)

  // const fakeMessages: Message[] = [
  //   {
  //     id: '1',
  //     message:
  //       'Olá, seja bem-vindo(a)! Sou seu assistente financeiro e estou aqui para ajudar você a organizar suas finanças e superar seus desafios.',
  //     user: 'bot',
  //   },
  //   {
  //     id: '2',
  //     message: 'Me diga qual a sua idade?',
  //     user: 'bot',
  //   },
  //   {
  //     id: '3',
  //     message: '30 anos',
  //     user: 'user',
  //   },
  //   {
  //     id: '4',
  //     message: 'Aqui vai algumas recomendações para você:',
  //     user: 'bot',
  //   },
  //   {
  //     id: '4',
  //     message:
  //       '1. Crie um orçamento mensal detalhado para controlar seus gastos e identificar onde pode economizar.',
  //     user: 'bot',
  //     description:
  //       'Como Desenvolvedor, aproveite suas habilidades para pesquisar sobre investimentos e alternativas de renda extra.',
  //   },
  //   {
  //     id: '4',
  //     message: 'Olá bom dia tudo bem  ',
  //     user: 'user',
  //   },
  //   {
  //     id: '4',
  //     message: 'Olá bom dia tudo bem  ',
  //     user: 'bot',
  //   },
  //   {
  //     id: '4',
  //     message:
  //       '1. Crie um orçamento mensal detalhado para controlar seus gastos e identificar onde pode economizar.',
  //     user: 'bot',
  //     description:
  //       'Como Desenvolvedor, aproveite suas habilidades para pesquisar sobre investimentos e alternativas de renda extra.',
  //   },
  //   {
  //     id: '4',
  //     message:
  //       '1. Crie um orçamento mensal detalhado para controlar seus gastos e identificar onde pode economizar.',
  //     user: 'bot',
  //     description:
  //       'Como Desenvolvedor, aproveite suas habilidades para pesquisar sobre investimentos e alternativas de renda extra.',
  //   },
  //   {
  //     id: '4',
  //     message:
  //       '1. Crie um orçamento mensal detalhado para controlar seus gastos e identificar onde pode economizar.',
  //     user: 'bot',
  //     description:
  //       'Como Desenvolvedor, aproveite suas habilidades para pesquisar sobre investimentos e alternativas de renda extra.',
  //   },
  // ]

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

  return (
    <S.Container>
      <S.ScrollArea ref={scrollRef}>
        {messages.map(eachMessage => (
          <ChatMessage data={eachMessage} key={eachMessage.id} />
        ))}
      </S.ScrollArea>

      <Composer />
    </S.Container>
  )
}
