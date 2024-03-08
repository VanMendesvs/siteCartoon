import React from "react";
import Warner from "./ImgFooter/warner.png"
import Git from "./ImgFooter/git.png"
import Linkedin from "./ImgFooter/linkedin.png"

import * as S from "./StyleFooter"

function Footer(){
    return(
        <S.FooterStyle>
            <S.SectionStyle>
                <S.ImgStyle src={Warner} alt="Logo WarnerBross"/>
                <S.DivStyle>
                <S.H2Style>Sobre nós</S.H2Style>
                <S.H2Style>Produtos</S.H2Style>
                <S.H2Style>Personagem</S.H2Style>
                </S.DivStyle>
                <S.DivStyle1>
                    <img src={Git} alt="Icone do GitHub"/>
                    <img src={Linkedin} alt="Icone do Linkedin"/>
                </S.DivStyle1>
            </S.SectionStyle>
        </S.FooterStyle>
    )
}

export default Footer