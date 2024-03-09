import React from "react";
import Logo from "./ImgHeader/logo.png"
import Joystick from "./ImgHeader/joystick.png"
import Programa from "./ImgHeader/programacao.png"

import * as S from "./StyleHeader.jsx"

function Header() {
    return (
        <S.HeaderStyle>
            <img src={Logo} alt="Imagem Logotipo Cartonn Network" />
            <S.Section>
                <S.Div>
                    <S.Img src={Joystick} alt="Imagem do Joytick" />
                    <S.H2>JOGOS</S.H2>
                </S.Div>

                <S.Div>
                    <S.Img src={Programa} alt="Imagem de Relogio" />
                    <S.H2>PROGRAMAÇÃO</S.H2>
                </S.Div>
            </S.Section>

        </S.HeaderStyle>
    )
}
export default Header