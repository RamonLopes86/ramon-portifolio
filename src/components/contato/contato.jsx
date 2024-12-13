import estiloContato from './contato.module.css';
import Image from 'next/image';
import ramon from '../../../public/ramon2.jpg'
import { FaWhatsapp } from 'react-icons/fa';
import React , {useState , useRef , useEffect} from 'react';





export default function Contato(props){


    const boxImgRef = useRef()
    const boxFormRef = useRef()

   

    const [ useImg , setUseImg] = useState(estiloContato.off)
    const [useForm , setUseForm] = useState(estiloContato.off)

    const [texArea , setTexArea] = useState('')


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
        
        const condMsg = encodeURIComponent(texArea)

        const number = '71991265530'
        const url = `https://wa.me/${number}?text=${condMsg}`

        window.open(url)

    }

    

        




    return(

            <section id='idcontatos' className={`${estiloContato.boxPai} ${props.modoDiaCont}`}>

                    <h1>Entre em contato</h1>

                    <div  className={`${estiloContato.boxFilho}`}>

                        

                        <Image ref={boxImgRef} className={`${estiloContato.img} ${useImg}`} src={ramon}/>


                        <form ref={boxFormRef}  action="#" className={`${estiloContato.formulario} ${useForm}`}>


                        <textarea  value={texArea} onChange={({target})=> setTexArea(target.value)}  placeholder='digite aqui sua mensagem...' name="msg" id="idmsg">

                        </textarea>



                         
                         <button onClick={ButtonDeafult}>Envie sua Mensagem <FaWhatsapp className={estiloContato.icon}/> </button>

                            

                        </form>


                    </div>

            </section>

    )


}