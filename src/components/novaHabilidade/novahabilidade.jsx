import estiloNovaHabilidade from "./novahabilidade.module.css";
import Image from "next/image";
import dadosHabilidades from "../dados/dadosHabili";
import React , {useState , useRef , useEffect} from "react";



export default function NovaHabili() {

    let array = dadosHabilidades;

    const cardRef = useRef([])

    const [condicao , setCondicao] = useState()

    const [condicaoCard , setCondicaoCard] = useState(Array(array.length))




    const cardSection = useRef()
    
    
  

    useEffect(()=>{


     const myObserver2 = new IntersectionObserver((elemento)=>{

                elemento.forEach((elemento)=>{

                    const index = cardRef.current.indexOf(elemento.target)

                    if(elemento.isIntersecting){


                        setCondicaoCard((prevArray)=>{

                                const res = [...prevArray]

                                res[index] = true

                                return res
                        })

                            
                        

                    }else {

                        
                        setCondicaoCard((prevArray)=>{

                            const res = [...prevArray]

                            res[index] = false

                            return res
                    })


                    }

                })

        })


        cardRef.current.forEach((card)=>{

                myObserver2.observe(card)
        })

        
       

    }, [])




    return (

        <section  className={estiloNovaHabilidade.boxPai} ref={cardSection}>


        <section  className={`${estiloNovaHabilidade.boxFilho} ${condicao ? estiloNovaHabilidade.apareceu : estiloNovaHabilidade.escondeu}`}  >

                    {
                        array.map((array , index)=>

                            <div key={index} className={`${estiloNovaHabilidade.Moldura} ${condicaoCard[index] ? estiloNovaHabilidade.cardApareceu : estiloNovaHabilidade.cardEscondeu}`} ref={(el) => (cardRef.current[index]) = el} >

                                <Image className={estiloNovaHabilidade.icon} src={array.img} alt={` imagem ${index}`}/>

                                <div>

                                </div>

                            </div>

                        )
                    }



        </section>


       


        </section>







      

    )
}