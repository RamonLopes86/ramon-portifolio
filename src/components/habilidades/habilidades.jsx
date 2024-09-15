import estiloHabilidade from "./habilidade.module.css";
import Image from "next/image";
import sql from "../../../public/servidor.png"
import mysql from "../../../public/mysql.png"
import js from "../../../public/js.png"
import html from "../../../public/html.png"
import css from "../../../public/css.png"
import front from '../../../public/front.png'
import iconReact from "../../../public/iconRreact.png"
import iconGit from '../../../public/gitIcon.png'
import iconNode from "../../../public/node.png"
import React, { useState, useEffect, useRef } from "react";
import dadosHabilidades from "../dados/dadosHabili";





export default function Habilidade(props) {

    let array = dadosHabilidades

    const [anima , setAnima] = useState(false)
    const [animaTitle , setAnimaTitle] = useState(false)

    const boxRef = useRef()
    const titleRef = useRef()

    useEffect(()=>{

        const myObserver = new IntersectionObserver((elemento)=>{

            elemento.forEach((elemento)=>{

               if(elemento.isIntersecting){

                if(elemento.target === titleRef.current){

                    setAnimaTitle(true)


                }else if(elemento.target === boxRef.current){


                    setAnima(true)
                }

               }else{

                if(elemento.target === titleRef.current){

                    setAnimaTitle(false)


                }else if(elemento.target === boxRef.current){


                    setAnima(false)
                }


               }

            })

        })


        myObserver.observe(boxRef.current)
        myObserver.observe(titleRef.current)

    },[])


    return (

        <>


            <section id="idskills" className={` ${estiloHabilidade.boxPai}   ${props.modoDiaHab}`} >

                
                <h1 className={animaTitle ? estiloHabilidade.titleOn : estiloHabilidade.titleOff} ref={titleRef}>Minhas Habilidades</h1>

                <section className={`${estiloHabilidade.boxFilho} ${props.modoDiaHab}`} ref={props.titleRef} >




                    <section className={`${estiloHabilidade.boxBlocos} ${props.modoDiaHab}  `} >

                        <div className={estiloHabilidade.molduraImg}>
                            <Image className={estiloHabilidade.icon} src={sql} />
                        </div>

                        <div className={estiloHabilidade.molduraImg}>
                            <Image className={estiloHabilidade.icon} src={mysql} />
                        </div>

                        <div className={estiloHabilidade.molduraImg}>
                            <Image className={estiloHabilidade.icon} src={js} />
                        </div>

                        <div className={estiloHabilidade.molduraImg}>
                            <Image className={estiloHabilidade.icon} src={html} />
                        </div>

                        <div className={estiloHabilidade.molduraImg}>
                            <Image className={estiloHabilidade.icon} src={css} />
                        </div>

                        <div className={estiloHabilidade.molduraImg}>
                            <Image className={estiloHabilidade.icon} src={iconReact} />
                        </div>

                        <div className={estiloHabilidade.molduraImg}>
                            <Image className={estiloHabilidade.icon} src={iconNode} />

                        </div>

                        <div className={estiloHabilidade.molduraImg}>
                            
                            <Image className={estiloHabilidade.icon} src={iconGit} />

                        </div>
                    </section>
                </section>

            </section>


            <section className={`${estiloHabilidade.boxEscondida}`} >

                

                <section className={`${estiloHabilidade.boxFilhoEscondida} ${props.modoDiaHab}`} ref={boxRef}>


                    <section className={`${estiloHabilidade.boxMolduraEscondida} ${anima ? estiloHabilidade.on : estiloHabilidade.off}`}>


                        {
                            array.map((array) =>

                                <div className={estiloHabilidade.Moldura}>

                                    <Image className={estiloHabilidade.iconEscondida} src={array.img} />

                                </div>



                            )


                        }


                    </section>



                </section>


            </section>




        </>







    )
}