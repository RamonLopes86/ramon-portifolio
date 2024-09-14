import estiloEdu from "./educacao.module.css";
import Image from "next/image";
import computador from "../../../public/computadores.png"
import dados from "../dados/dados";
import React, { useState, useRef, useEffect } from "react";




export default function Educacao(props) {

    let array = dados;

    const [observado, setObservado] = useState(Array(array.length))


    const boxRef = useRef([])
    


    useEffect(() => {

        const myObserver = new IntersectionObserver((elemento) => {

            elemento.forEach((elemento) => {

                const index = boxRef.current.indexOf(elemento.target)


                if (elemento.isIntersecting) {


                    setObservado((novoObserve)=>{

                        const Resultado = [...novoObserve]

                        Resultado[index] = true

                        return Resultado

                    })

                    



                } else {


                    setObservado((novoObserve)=>{

                        const Resultado = [...novoObserve]

                        Resultado[index] = false

                        return Resultado

                    }) 



                }

            })

        })


        boxRef.current.forEach((ref) => {

            myObserver.observe(ref)

        })


        return () => {

            myObserver.disconnect()

        }


    }, [])



    return (

        <section id="educacao" className={`${estiloEdu.boxPai} ${props.modoDiaEdu}`}>

            <h1 className={estiloEdu.titulo}>Educação</h1>


            <section className={estiloEdu.boxBorda}>

                {

                    array.map((array, index) =>



                        <div className={`${estiloEdu.moldura} ${observado[index] ? estiloEdu.visible : estiloEdu.invisible} `} key={index} ref={(el) => (boxRef.current[index] = el)} >


                            <div className={estiloEdu.boxImg}>
                                <Image className={estiloEdu.imgPc} src={computador} alt="imagem de um PC" />
                            </div>

                            <span>{array.periodo}</span>
                            <h1>{array.titulo}</h1>
                            <p>{array.texto}</p>

                        </div>

                    )


                }



            </section>


        </section>

    )

}