import { WelcomeDesktop } from '@/components/molecules/WelcomeDesktop'
import { MobileFrame } from '@/components/organisms/MobileFrame/MobileFrame'

import * as S from './page.styles'

export default function Home() {
  return (
    <S.Container>
      <WelcomeDesktop />
      <MobileFrame />
    </S.Container>
  )
}
