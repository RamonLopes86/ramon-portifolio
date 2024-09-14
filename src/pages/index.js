import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import wapp from '../../public/whatsapp.png'
import noite from '../../public/lua.png'
import dia from '../../public/sol.png'

import styles from "@/styles/Home.module.css";
import Topo from "@/components/topo/topo";
import Apresentacao from "@/components/apresentacao/apresentacao";
import Quem from "@/components/quemSou/quemSou";
import Habilidade from "@/components/habilidades/habilidades";
import Educacao from "@/components/educacao/educacao";
import Projetos from "@/components/Projetos/projetos";
import Contato from "@/components/contato/contato";
import Footer from "@/components/footer/footer";




import React,{useState , useRef , useEffect} from "react";




export default function Home() {


  const[animar , setAnimar] = useState(styles.invisible)

  const [menuEscondido , setMenuEscondido] = useState(styles.recolherMenu)

  const [animaBotao , setAnimaBotao] = useState(styles.animaBotaoOff)

  const [quemAnima , setQuemAnima] = useState()

  const [titleAnima , setTitleAnima] = useState(styles.opacidadeZero)

  const [skill , setSkill] = useState(styles.quemInvisible)

  const blocoRef = useRef()

  

  const quemRef = useRef()
  
  const titleRef = useRef()

  const skillref=useRef()

  

  const [condicao , setCondicao] = useState(false)


  const [modoDiaTopo , setModoDiaTopo] = useState()

  const [modoDiaApres , setModoDiaApres] = useState()

  const [modoDiaQuem , setModoDiaQuem] = useState()

  const [modoDiaHab , setModoDiaHab] = useState()

  const [modoDiaEdu , setModoDiaEdu] = useState()

  const [modoDiaProj , setModoDiaProj] = useState()

  const [modoDiaCont , setModoDiaCont] = useState()

  const [modoDiaRodape , setModoDiaRodape] = useState()

  const [modoDiaEscondido , setModoDiaEscondido] = useState()

  const [imgDark , setImgDark] = useState(noite)


  function mudarModo(){

    if(condicao){

      setModoDiaTopo(styles.mdDia)
      setModoDiaQuem(styles.mdQuemDia)
      setModoDiaApres(styles.mdApresDia)
      setModoDiaHab(styles.mdDiaHab)
      setModoDiaEdu(styles.mdDiaEdu)
      setModoDiaProj(styles.mdDiaProj)
      setModoDiaCont(styles.mdDiaCont)
      setModoDiaRodape(styles.mdDiaRodape)
      setModoDiaEscondido(styles.mdDiaEscondida)
      setImgDark(noite)
      setCondicao(false)

    }else{

      setModoDiaTopo(styles.mdNoite)
      setModoDiaApres(styles.mdApresNoite)
      setModoDiaHab(styles.mdNoiteHab)
      setModoDiaEdu(styles.mdNoiteEdu)
      setModoDiaQuem(styles.mdQuemNoite)
      setModoDiaProj(styles.mdNoiteProj)
      setModoDiaCont(styles.mdNoiteCont)
      setModoDiaRodape(styles.mdNoiteRodape)
      setModoDiaEscondido(styles.mdNoiteEscondida)
      setImgDark(dia)
      setCondicao(true)
    }
     


  }

useEffect(()=>{

  mudarModo()

},[])

  function mostrarMenu(){

    setMenuEscondido(styles.mostrarMenu)
    setAnimaBotao(styles.animaBotao)
    

  }

  function esconderMenu(){

    setMenuEscondido(styles.recolherMenu)
    setAnimaBotao(styles.animaBotaoOff)

  }

  



  function handleClick(){

   const elemento =  document.getElementById('idportifolio')

   elemento.scrollIntoView({behavior:'smooth'})

  }
    
  function windowOut(){

    if(window.innerWidth >500){


      setMenuEscondido(styles.recolherMenu)
    }

  }

  useEffect(()=>{

    window.addEventListener('resize' , windowOut)

  },[])
  
  


  useEffect(()=>{

    const myObserver = new IntersectionObserver((elemento)=>{

            elemento.forEach((elemento)=>{

                if(elemento.isIntersecting){

                  if(elemento.target === blocoRef.current){

                      setAnimar(styles.visible)
                      

                  }
                  
                  if(elemento.target === quemRef.current){

                    setQuemAnima(styles.quemVisible)

                  }
                

                   

                }else{
                  

                  if(elemento.target === blocoRef.current){

                    setAnimar(styles.invisible)

                  }
                 
                  if(elemento.target === quemRef.current){

                      setQuemAnima(styles.quemInvisible)
                  }

                }
                
                
                

            })



    })


    myObserver.observe(blocoRef.current)
    myObserver.observe(quemRef.current)



  },[])


  useEffect(()=>{

    const myObserver2 = new IntersectionObserver((elemento)=>{


          elemento.forEach((elemento)=>{

              if(elemento.isIntersecting){

                setTitleAnima(styles.opacidadeUm)
                setSkill(styles.quemVisible)
                

              }else{

                setTitleAnima(styles.opacidadeZero)
                setSkill(styles.quemInvisible)
                
              }

          })


    })

    myObserver2.observe(titleRef.current)


  },[])





  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

          <Topo
          
          modoDiaTopo={modoDiaTopo}
          menuEscondido={menuEscondido}
          mostrarMenu = {mostrarMenu}
          esconderMenu={esconderMenu}
          animaBotao={animaBotao}
          modoDiaEscondido={modoDiaEscondido}
          />

          <Apresentacao

          hendleClick={handleClick}
          modoDiaApres={modoDiaApres}
          animar={animar}
          blocoRef = {blocoRef}
         
          />
         
        

          <Quem
          
          modoDiaQuem={modoDiaQuem}
          quemRef={quemRef}
          quemAnima={quemAnima}
          
          />

          <Habilidade

          modoDiaHab={modoDiaHab}
          titleRef={titleRef}
          animaTitle={titleAnima}
          skillref={skillref}
          skill={skill}
          

          />

       

          <Educacao
          
          modoDiaEdu={modoDiaEdu}
          
          />


          <Projetos
          
            modoDiaProj={modoDiaProj}
          />

          <Contato

            modoDiaCont={modoDiaCont}
          
          />

          <Footer

          modoDiaRodape={modoDiaRodape}
          
          />


          <Image onClick={mudarModo}  className={styles.imgDiaNoite} src={imgDark}/>

          <Link href={'http://api.whatsapp.com/send?phone=5571991265530'} target='_blank'  ><Image alt='imagem' className={styles.iconWhats} src={wapp}/></Link>

      </main>
    </>
  );
}
