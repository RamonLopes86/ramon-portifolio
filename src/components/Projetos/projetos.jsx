import estiloProj from "./projetos.module.css";
import React , {useState , useRef , useEffect} from "react";
import {projetos} from "../dados/dadosProjetos";
import Image from "next/image";
import Link from "next/link";
import gitHub from "../../../public/github.png"




export default function Projetos(props){

   
    

    const boxRef = useRef()

    const [anima , setAnima] = useState(false)




    useEffect(()=>{

        const myObserver = new IntersectionObserver((elemento)=>{

            elemento.forEach((elemento)=>{

                if(elemento.isIntersecting){

                    setAnima(true)
                    

                }else{
                    setAnima(false)
                 
                }

            })

        })



        myObserver.observe(boxRef.current)

    },[])



    // function moveParaDireita(){

    //     boxRef.current.scrollLeft += boxRef.current.offsetWidth 
    // }


    // function moveParaEsquerda(){

    //     boxRef.current.scrollLeft =  boxRef.current.scrollLeft - boxRef.current.offsetWidth
    // }
      



    return(

        <section id="idportifolio" className={`${estiloProj.boxPai} ${props.modoDiaProj}`}>

                <span>Navegue pelos meus projetos</span>


                <h1 className={estiloProj.titulo}>Meus Projetos</h1>

              

                    <div ref={boxRef} className={`${estiloProj.boxProjetos}` }  >
                        {
                            projetos.map((itens, index)=>
                    
                    
                                <Link href={itens.link} target="_Blank">
                                    <div style={{backgroundImage:`url(${itens.img})`}}  key={index} className={`${estiloProj.moldura} ${anima ? estiloProj.on : estiloProj.off}` }>
                                    
                                    </div>
                                </Link>
                                  
                    
                    
                    
                            )
                        }
                    
                               
                    </div>
              



        </section>
    )
}