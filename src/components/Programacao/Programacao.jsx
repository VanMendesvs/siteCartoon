import React, {useState} from "react";
import Dexter from "./ImgProgramacao/dexter.png"
import Vaca from "./ImgProgramacao/vaca.png"
import Du from "./ImgProgramacao/du.png"
import Coragem from "./ImgProgramacao/coragem.png"

function Programacao(){

    const [desenhos, setDesenhos] = useState([
        {nome: "O laboratorio de Dexter", hora: "7:00", imagem: Dexter},
        {nome: "A vaca e o frango", hora: "8:00", imagem: Vaca},
        {nome: "Du, Dudu e Edu", hora: "9:00", imagem: Du},
        {nome: "Coragem, o cão Covarde", hora: "10:00", imagem: Coragem},
        ])

    return(
        <section>
            {desenhos.map((item) =>(
                <div>
                    <h2>{item.nome}</h2>
                    <h2>{item.hora}</h2>
                    <img src={item.imagem} alt=""/>
                </div>
            ))}
        </section>
    )
}

export default Programacao