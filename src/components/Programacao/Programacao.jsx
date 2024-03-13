import React, {useState} from "react";
import Dexter from "./ImgProgramacao/dexter.png"
import Vaca from "./ImgProgramacao/vaca.png"
import Du from "./ImgProgramacao/du.png"
import Coragem from "./ImgProgramacao/coragem.png"
import Jorel from "./ImgProgramacao/jorel.png"
import Monica from "./ImgProgramacao/monica.png"
import Steven from "./ImgProgramacao/steven.png"
import Billy from "./ImgProgramacao/billy.png"
import * as S from "./StyleProgramacao.jsx"


function Programacao(){

    const [desenhos, setDesenhos] = useState([
        {nome: "O laboratorio de Dexter", hora: "7:00", imagem: Dexter},
        {nome: "A vaca e o frango", hora: "8:00", imagem: Vaca},
        {nome: "Du, Dudu e Edu", hora: "9:00", imagem: Du},
        {nome: "Coragem, o cão Covarde", hora: "10:00", imagem: Coragem},
        {nome: "Irmão do Jorel", hora: "11:00", imagem: Jorel},
        {nome: "Turma da Monica Jovem", hora: "12:00", imagem: Monica},
        {nome: "Steven Universo", hora: "13:00", imagem: Steven},
        {nome: "Billy e Mandy", hora: "14:00", imagem: Billy}
        ])

    return(
        <S.Section>
            {desenhos.map((item) =>(
                <S.Div>
                    <S.H2>{item.hora}</S.H2>
                    <S.H2>{item.nome}</S.H2>
                    <img src={item.imagem} alt={item.nome}/>
                </S.Div>
            ))}
        </S.Section>
    )
}

export default Programacao