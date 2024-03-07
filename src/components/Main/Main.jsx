import React from "react";
import Scooby from "./ImgMain/scooby.png"
import Ben from "./ImgMain/ben10.png"
import Looney from "./ImgMain/looney.png"
import Gum from "./ImgMain/gumball.png"
import Super from "./ImgMain/superpoderosas.png"
import TJ from "./ImgMain/tomejerry.png"

import * as S from "./StyleMain.jsx"

function Main() {
    return (
        <S.MainStyle>
            <section>
                <S.DivStyle>
                    <S.ImgStyle src={Scooby} alt="Personagens desenho do Scooby-Doo" />
                    <S.ImgStyle src={Ben} alt="Personagens desenho Ben 10" />
                    <S.ImgStyle src={Looney} alt="Personagens desenho Looney Tunes" />
                </S.DivStyle>
                <S.DivStyle1>
                    <S.ImgStyle src={Gum} alt="Personagens desenho GumBall"/>
                    <S.ImgStyle src={Super} alt="Personagens desenho SuperPoderosas"/>
                    <S.ImgStyle src={TJ} alt="Personagens desenho Tom e Jerry"/>
                </S.DivStyle1>
            </section>
        </S.MainStyle>
    )
}

export default Main

