import React from "react";
import Warner from "./ImgFooter/warner.png"
import Git from "./ImgFooter/git.png"
import Linkedin from "./ImgFooter/linkedin.png"

import * as S from "./StyleFooter"

function Footer(){
    return(
        <S.FooterStyle>
            <section>
                <S.DivStyle>
                    <S.ImgStyle src={Warner} alt="Logo WarnerBross"/>
                    <S.H2Style>Sobre nós</S.H2Style>
                    <S.H2Style>Produtos</S.H2Style>
                       <S.H2Style>Personagem</S.H2Style>
                        <img src={Git} alt="Icone do GitHub"/>
                        <img src={Linkedin} alt="Icone do Linkedin"/>
                </S.DivStyle>
                <S.DivStyle1>
                    <h2>© 2024 Cartoon Network</h2>
                </S.DivStyle1>
                
            </section>
        </S.FooterStyle>
    )
}

export default Footer