import { useState } from 'react'
import * as S from './Composer.styles'

interface ComposerProps {
  onSend: (text: string) => void
}

export const Composer = ({ onSend }: ComposerProps) => {
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = () => {
    if (!text) return

    onSend(text)
    setText('')
  }

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Field
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Digite sua resposta aqui"
        />
        <S.Button type="button" onClick={handleSubmit}>
          <S.SendIcon src="/images/send-icon.svg" />
        </S.Button>
      </S.InputWrapper>
    </S.Container>
  )
}
