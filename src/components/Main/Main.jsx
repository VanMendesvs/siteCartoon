import React, {useState} from "react";
import Scooby from "./ImgMain/scooby.png"
import Ben from "./ImgMain/ben10.png"
import Looney from "./ImgMain/looney.png"

//Segunda section uso de MAP, Metodo que mapeia (percorre) arrays
import Gum from "./ImgMain/gumball.png"
import Super from "./ImgMain/superpoderosas.png"
import TJ from "./ImgMain/tomejerry.png"


import * as S from "./StyleMain.jsx"


function Main() {
    const [galeria, setGaleria] = useState([
        Gum,
        Super,
        TJ,
    ])
    
    return (
        <main>
            <S.SectionStyle1>
                    <S.ImgStyle src={Scooby} alt="Personagens desenho do Scooby-Doo" />
                    <S.ImgStyle src={Ben} alt="Personagens desenho Ben 10" />
                    <S.ImgStyle src={Looney} alt="Personagens desenho Looney Tunes" />
            </S.SectionStyle1>
            <S.SectionStyle2>    
                   {galeria.map((item) => (<S.ImgStyle src={item} alt=""/>
                   ))}
            </S.SectionStyle2>   
           
        </main>
    )
}
export default Main

