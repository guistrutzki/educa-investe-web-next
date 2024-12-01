import * as S from './ChatMessage.styles'

export type User = 'user' | 'bot'

interface ChatMessageProps {
  data: {
    message: string
    user: User
    description?: string
  }
}

export const ChatMessage = ({
  data: { message, user, description },
}: ChatMessageProps) => {
  return (
    <S.Container user={user}>
      <S.AvatarWrapper user={user}>
        <S.Avatar
          src={
            user === 'user'
              ? '/images/person-icon.svg'
              : '/images/app-logo-icon.png'
          }
        />
      </S.AvatarWrapper>

      <S.ContentWrapper user={user}>
        <S.Message user={user} istitle={!!description}>
          {message}
        </S.Message>
        {!!description && <S.Description>{description}</S.Description>}
      </S.ContentWrapper>
    </S.Container>
  )
}
