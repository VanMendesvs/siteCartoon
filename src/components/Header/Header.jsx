import React from "react";
import Logo from "./ImgHeader/logo.png"
import Joystick from "./ImgHeader/joystick.png"
import Programa from "./ImgHeader/programacao.png"

import * as S from "./StyleHeader.jsx"

function Header() {
    return (
        <S.HeaderStyle>
            <S.ImgStyle src={Logo} alt="Imagem Logotipo Cartonn Network" />
            <S.SectionStyle>
                <S.DivStyle>
                    <S.ImgStyle1 src={Joystick} alt="Imagem do Joytick" />
                    <S.H2Style>JOGOS</S.H2Style>
                </S.DivStyle>
                <S.DivStyle>
                    <S.ImgStyle2 src={Programa} alt="Imagem de Relogio" />
                    <S.H2Style>PROGRAMAÇÃO</S.H2Style>
                </S.DivStyle>
            </S.SectionStyle>

        </S.HeaderStyle>
    )
}
export default Header