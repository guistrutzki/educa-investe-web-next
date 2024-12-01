"use client";
import * as S from "./Composer.styles";
export const Composer = () => {
  return (
    <S.Container>
      <S.Field type="text" placeholder="Digite sua resposta aqui" />
      <S.Button>
        <S.SendIcon src="/images/send-icon.svg" />
      </S.Button>
    </S.Container>
  );
};