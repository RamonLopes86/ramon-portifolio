import estiloQuem from "./quemsou.module.css";
import Image from "next/image";
import ft from "../../../public/ramon2.jpg"


export default function Quem(props) {

    


    return (

        <section id='quemSouEu' className={`${estiloQuem.boxPai} ${props.modoDiaQuem} `}  >

            

            <div className={`${estiloQuem.boxFilho} `} ref={props.quemRef}>

                <Image alt="imagem" className={`${estiloQuem.img} ${props.quemAnima}`} src={ft} />

                <div className={`${estiloQuem.boxTx} ${props.quemAnima}`}>
                    
                    <span>Quem sou eu ?</span>
                    <h1>Ramon Lopes</h1>
                    <p>Desenvolvedor / Programador</p>
                    <p>

                        Olá , me chamo Ramon Lopes , com formação em Análise e desenvolvimento de sistemas. Durante minha trajetória acadêmica, tive o prazer de conhecer a área de programação, a qual rapidamente despertou minha paixão. Desde então, tenho me dedicado ao aprimoramento contínuo  me tornarando um profissional  capacitado, com conhecimentos sólidos em HTML, CSS, JavaScript, React, ReactNative , Nodejs, SQL , MySQL, Figma , WordPress. Ao longo dos meus estudos, tive a oportunidade de desenvolver projetos desafiadores, aplicando esses conhecimentos e  contribuindo para o desenvolvimento de soluções inovadoras ,  impactando  positivamente o dia a dia das pessoas, oferecendo soluções que tragam mais praticidade e eficiência na suas vidas e no seu trabalho.
                       
                    </p>
                
                </div>
            </div>


        </section>



    )   

}




