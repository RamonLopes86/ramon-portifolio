import estiloProj from "./projetos.module.css";
import React , {useState , useRef , useEffect} from "react";
import projetos from "../dados/dadosProjetos";
import Image from "next/image";
import Link from "next/link";
import gitHub from "../../../public/github.png"



export default function Projetos(props){

    const arrayProj = projetos
    

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


    return(

        <section id="idportifolio" className={`${estiloProj.boxPai} ${props.modoDiaProj}`}>

                <span>Navegue pelos meus projetos</span>
                <h1 className={estiloProj.titulo}>Meus Projetos</h1>

                <div ref={boxRef} className={`${estiloProj.boxProjetos}` }  >

                    {

                        arrayProj.map((arrayProj)=>

                            
                        
                            <div key={arrayProj.id} className={`${estiloProj.moldura} ${anima ? estiloProj.on : estiloProj.off}` }>

                                

                                <Image className={estiloProj.icon} src={arrayProj.img} alt="imagens" />
                                <h1>{arrayProj.titulo}</h1>
                                <p>{arrayProj.tx}</p>
                                

                                <div className={estiloProj.boxBtn}>
                                    <Link className={estiloProj.link} href={arrayProj.lk} target="_blank"  ><button>Ver Projeto</button></Link>

                                   
                                    <Link className={estiloProj.linkGit} href={arrayProj.gitlk} target="_blank"><Image className={estiloProj.iconGit} src={gitHub} /></Link>
                                    
                                </div>

                                <section className={estiloProj.boxPaiTec}>

                                    <span>Desenvolvido com :</span>

                                    

                                    <div className={estiloProj.boxTec}>


                                        <Image alt={`imagem ${arrayProj.titulo}`}  src={arrayProj.tec} className={`${estiloProj.iconTec}  `}/>
                                        <Image alt={`imagem ${arrayProj.titulo}`} src={arrayProj.tec2} className={estiloProj.iconTec}/>
                                        <Image alt={`imagem ${arrayProj.titulo}`}  src={arrayProj.tec3} className={estiloProj.iconTec}/>
                                        <Image alt={`imagem ${arrayProj.titulo}`} src={arrayProj.tec4} className={`${estiloProj.iconTec} ${arrayProj.id === 5 || arrayProj.id === 6 || arrayProj.id === 4 || arrayProj.id === 7 || arrayProj.id === 8 || arrayProj.id === 9 ? estiloProj.imgNone : estiloProj.imgBlock}`}/>
                                    
                                    </div>
                                </section>
                                            


                            </div>
                        
                        
                        )


                    }




                </div>



        </section>
    )
}