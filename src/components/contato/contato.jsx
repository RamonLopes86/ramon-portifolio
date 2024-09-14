import estiloContato from './contato.module.css';
import Image from 'next/image';
import avatar from "../../../public/avatarRemovido.png"
import React , {useState , useRef , useEffect} from 'react';



export default function Contato(props){


    const boxImgRef = useRef()
    const boxFormRef = useRef()

   

    const [ useImg , setUseImg] = useState(estiloContato.off)
    const [useForm , setUseForm] = useState(estiloContato.off)


    useEffect(()=>{


        const myObserver = new IntersectionObserver((elemento)=>{

            elemento.forEach((elemento)=>{

                if(elemento.isIntersecting){

                   if(elemento.target === boxFormRef.current){

                        setUseForm(estiloContato.on)

                   }else if(elemento.target === boxImgRef.current){

                        setUseImg(estiloContato.on)
                   }

                }else{

                    if(elemento.target === boxFormRef.current){

                        setUseForm(estiloContato.off)
                   }else if(elemento.target === boxImgRef.current){

                        setUseImg(estiloContato.off)
                   }
                   
                  
                }

            })


        })


        myObserver.observe(boxFormRef.current)
        myObserver.observe(boxImgRef.current)
        

    },[])






    function ButtonDeafult(ev){

         ev.preventDefault()   

    }

    return(

            <section id='idcontatos' className={`${estiloContato.boxPai} ${props.modoDiaCont}`}>

                    <h1>Entre em contato</h1>

                    <div  className={`${estiloContato.boxFilho}`}>

                        

                        <Image ref={boxImgRef} className={`${estiloContato.img} ${useImg}`} src={avatar}/>


                        <form ref={boxFormRef}  action="#" className={`${estiloContato.formulario} ${useForm}`}>

                            <input type="text" name="nome" id="idnome" autoComplete='off' placeholder='nome' />
                            <input type="email" name="mail" id="idmail" autoComplete='off' placeholder='email' />
                            <textarea placeholder='mensagem' name="msg" id="idmsg"></textarea>

                            <button onClick={ButtonDeafult}>enviar</button>

                            

                        </form>


                    </div>

            </section>

    )


}