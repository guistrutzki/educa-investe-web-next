import { useEffect } from 'react'
import * as S from './ChatScrollList.styles'
import { ChatMessage, type User } from '@/components/molecules/ChatMessage'

type Message = {
  id: string
  user: User
  message: string
  description?: string
}

export const ChatScrollList = () => {
  useEffect(() => {
    console.log('ChatScrollList mounted')
  }, [])

  const fakeMessages: Message[] = [
    {
      id: '1',
      message:
        'Olá, seja bem-vindo(a)! Sou seu assistente financeiro e estou aqui para ajudar você a organizar suas finanças e superar seus desafios.',
      user: 'bot',
    },
    {
      id: '2',
      message: 'Me diga qual a sua idade?',
      user: 'bot',
    },
    {
      id: '3',
      message: '30 anos',
      user: 'user',
    },
    {
      id: '4',
      message: 'Aqui vai algumas recomendações para você:',
      user: 'bot',
    },
    {
      id: '4',
      message:
        '1. Crie um orçamento mensal detalhado para controlar seus gastos e identificar onde pode economizar.',
      user: 'bot',
      description:
        'Como Desenvolvedor, aproveite suas habilidades para pesquisar sobre investimentos e alternativas de renda extra.',
    },
  ]

  return (
    <S.Container>
      {fakeMessages.map(eachMessage => (
        <ChatMessage data={eachMessage} key={eachMessage.id} />
      ))}
    </S.Container>
  )
}
