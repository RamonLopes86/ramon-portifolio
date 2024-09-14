import estiloQuem from "./quemsou.module.css";
import Image from "next/image";
import ft from "../../../public/ramon2.jpg"


export default function Quem(props) {

    


    return (

        <section id='quemSouEu' className={`${estiloQuem.boxPai} ${props.modoDiaQuem} `}  >

            

            <div className={`${estiloQuem.boxFilho} `} ref={props.quemRef}>

                <Image className={`${estiloQuem.img} ${props.quemAnima}`} src={ft} />

                <div className={`${estiloQuem.boxTx} ${props.quemAnima}`}>
                    
                    <span>Quem sou eu ?</span>
                    <h1>Ramon Lopes</h1>
                    <p>Desenvolvedor Frontend</p>
                    <p>
                
                        Olá , me chamo Ramon ,  tenho formação em Ciências Contábeis e estou cursando Analise e desenvolvimento de Sistemas , Conheci a área de programação e simplismente me apaixonei Estou me aprimorando agora para ser um profissional da área , aprendendo e dominando de maniera bem consistente; HTML, CSS, JavaScript, React, NodeJs, MySql etc… Durante minha trajetória acadêmica, tive a oportunidade de desenvolver diversos projetos desafiadores e que tornaram meu conhecimento ainda mais sólidos. Desde então estou mergulhado de cabeça na construção desse aprendizado. O que me fascina é saber que posso colocar em prática meus conhecimentos e contribuir para o desenvolvimento de soluções inovadoras , ajudar pessoas e  trazer mais práticidade para o dia a dia delas.
                    </p>
                
                </div>
            </div>


        </section>



    )   

}




