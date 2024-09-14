import estiloTopo from "../topo/topo.module.css"
import Image from "next/image";
import menu from "../../../public/menu.png"
import fechar from "../../../public/close.png"
import Link from "next/link";
import React , {useState} from "react";


export default function Topo(props){

    

    const [vl , setVl] = useState()
    

    function ClickMenu(nome){

        setVl(nome)

    }

    return(

        <section   className={`${estiloTopo.boxMaior} ${props.modoDiaTopo}`}>


             <h1>Ramon<span>.dev</span></h1>    


             <nav className={estiloTopo.navOn}>
                
                <ul>
                    <Link onClick={()=> ClickMenu('home')} className={`${estiloTopo.link} ${vl ==='home' ? estiloTopo.btnClicado : estiloTopo.btnNull} `} href={'#idhome'}><li>Home</li></Link>
                    <Link onClick={()=>ClickMenu('sobre mim')}  className={`${estiloTopo.link} ${vl==='sobre mim'  ? estiloTopo.btnClicado : estiloTopo.btnNull}`} href={'#quemSouEu'}><li>Sobre mim</li></Link>
                    <Link onClick={()=> ClickMenu('habilidades')} className={`${estiloTopo.link} ${vl==='habilidades'? estiloTopo.btnClicado : estiloTopo.btnNull}`} href={'#idskills'}><li>Habilidades</li></Link>
                    <Link onClick={()=>ClickMenu('educacao')} className={`${estiloTopo.link} ${vl === 'educacao'? estiloTopo.btnClicado : estiloTopo.btnNull }`} href={'#educacao'}><li>Educação</li></Link>
                    <Link onClick={()=> ClickMenu('portifolio')} className={`${estiloTopo.link} ${vl === 'portifolio' ? estiloTopo.btnClicado : estiloTopo.btnNull}`} href={'#idportifolio'}><li>Portifólio</li></Link>
                    <Link onClick={()=> ClickMenu('contatos')} className={`${estiloTopo.link} ${vl === 'contatos'? estiloTopo.btnClicado : estiloTopo.btnNull }`} href={'#idcontatos'}><li>Contatos</li></Link>

                </ul>
                   
             </nav>  
                 

                   


            <div className={estiloTopo.boxMenu} onClick={props.mostrarMenu} >
                <Image className={estiloTopo.imgMenu} src={menu} />
            </div>

            <div className={`${estiloTopo.navEscondida} ${props.menuEscondido} ${props.modoDiaEscondido}`}>

                <div className={estiloTopo.boxFechar}>
                    <Image onClick={props.esconderMenu} className={`${estiloTopo.imgFechar} ${props.animaBotao}`} src={fechar}/>
                </div>

                <nav className={estiloTopo.navOff}>
                    <ul>
                    <Link onClick={props.esconderMenu} className={estiloTopo.link} href={'#idhome'}><li>Home</li></Link>
                    <Link onClick={props.esconderMenu} className={estiloTopo.link} href={'#quemSouEu'}><li>Sobre mim</li></Link>
                    <Link onClick={props.esconderMenu} className={estiloTopo.link} href={'#idskills'}><li>Habilidades</li></Link>
                    <Link onClick={props.esconderMenu} className={estiloTopo.link} href={'#educacao'}><li>Educação</li></Link>
                    <Link onClick={props.esconderMenu} className={estiloTopo.link} href={'#idportifolio'}><li>Portifólio</li></Link>
                    <Link onClick={props.esconderMenu}className={estiloTopo.link} href={'#idcontatos'}><li>Contatos</li></Link>
                    </ul>

                   
                </nav>  

            </div>

        </section>

    )
}