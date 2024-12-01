import * as S from './InitialScreen.styles'

export const InitialScreen = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LogoImg src="/images/app-logo-icon.png" />
        <S.Message>
          Olá! Bem-vindo(a) ao nosso assistente financeiro. Vamos organizar suas
          finanças, alcançar seus objetivos e superar desafios como dívidas e
          investimentos juntos!
        </S.Message>
      </S.ContentWrapper>

      <S.Button>Conversar com o assistente</S.Button>
    </S.Container>
  )
}
