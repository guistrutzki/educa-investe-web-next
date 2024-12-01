import type { Message } from '@/components/organisms/ChatScrollList'
import { v4 } from 'uuid'

export const botMessages: Message[] = [
  {
    id: v4(),
    field: '',
    user: 'bot',
    message:
      'Olá, seja bem-vindo(a)! Sou seu assistente financeiro e estou aqui para ajudar você a organizar suas finanças e superar seus desafios.',
  },
  {
    id: v4(),
    user: 'bot',
    field: 'age',
    message: 'Me diga qual a sua idade?',
  },
  {
    id: v4(),
    user: 'bot',
    field: 'gender',
    message: 'Qual o seu sexo?',
  },
  {
    id: v4(),
    user: 'bot',
    field: 'incomeRange',
    message: 'Qual a sua renda mensal média?',
  },
  {
    id: v4(),
    user: 'bot',
    field: 'averageMonthlySpendingOnLeisure',
    message: 'Qual a sua média de custos fixos mensais?',
  },
  {
    id: v4(),
    user: 'bot',
    field: 'hasGamblingHabit',
    message: 'Você tem o costume de apostar?',
  },
  {
    id: v4(),
    user: 'bot',
    field: 'hasEmergencyFund',
    message: 'Você possui alguma reserva de emergência?',
  },
  {
    id: v4(),
    user: 'bot',
    field: 'hasDebts',
    message: 'Você possui dívidas?',
  },
]
