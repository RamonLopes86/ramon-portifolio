import estiloApresentacao from "./apresentacao.module.css";
import Image from "next/image";
import ramon from "../../../public/ramon1.jpg"
import Link from "next/link";
// import github from "../../../public/placa-do-github.png"
// import lkd from "../../../public/lkdSem.png"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub , FaInstagram , FaWhatsapp } from "react-icons/fa";




export default function Apresentacao(props){

    


    return(

        <section id="idhome" className={`${estiloApresentacao.boxPai} ${props.modoDiaApres}`} ref={props.blocoRef}>

                <div className={`${estiloApresentacao.boxTexto} ${props.animar}`}   >

                    <div className={estiloApresentacao.tx}>

                        <p className={estiloApresentacao.txDev}>Developer Front End</p>

                        <h1>Ramon Lopes</h1>

                        <p className={estiloApresentacao.txDes}>Ola, seja bem vindo(a), embarque em uma experiência incrível!Fiquem a vontade para explorar e conheçer melhor o meu trabalho.</p>

                        <div className={`${estiloApresentacao.boxBotoes} `}>

                            <Link className={estiloApresentacao.link} href={'https://wa.me/5571991265530?text= Ola...'} target="_Blank" >
                            
                                <button  ref={props.btnCvRef} className={`${estiloApresentacao.btnCv}`}>Fale Comigo <FaWhatsapp className={estiloApresentacao.iconWpp}/></button>

                            </Link>
                            
                           <button onClick={props.hendleClick}  className={estiloApresentacao.btnProj}>Meus Projetos</button>

                            
                        </div>



                        <div className={estiloApresentacao.boxRedes}>

                            <p>Minhas Redes :</p>
                            

                            <Link href={'https://github.com/RamonLopes86'} target="_blank">
                            
                                <FaGithub className={estiloApresentacao.icon} />
                            
                            </Link>

                            <Link href={'https://www.linkedin.com/in/ramon-lopes-455862318/'} target="_blank"> 
                            
                            <IoLogoLinkedin className={estiloApresentacao.icon} />
                            
                            </Link>

                            <Link href={''}>

                                <FaInstagram className={estiloApresentacao.icon}/>
                            </Link>

                        </div>


                        

                    </div>


                </div>  

                <div  className={`${estiloApresentacao.boxImagem} ${props.animar}`}>

                    <Image className={estiloApresentacao.imgRamon} src={ramon}/>


                </div>

        </section>
    )
}