import * as S from './WelcomeDesktop.styles'

export const WelcomeDesktop = () => {
  return (
    <S.Container>
      <S.LogoImage src="/images/app-logo-bg.png" alt="Welcome Desktop" />
      <S.Title>Planeje suas finanças com recomendações Inteligentes</S.Title>
      <S.Description>
        Teste agora e começe a transformar suas finanças!
      </S.Description>
    </S.Container>
  )
}
