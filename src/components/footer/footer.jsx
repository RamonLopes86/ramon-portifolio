import estiloFooter from './footer.module.css';
import Image from 'next/image';
import lkd from '../../../public/lkdBlack.png'
import git from '../../../public/gitHub.png'
import mail from '../../../public/mail.png'
import Link from 'next/link';



export default function Footer(props) {





    return (

        <section className={`${estiloFooter.boxPai} ${props.modoDiaRodape}`}>

            <span> <strong>&copy;</strong>  Ramon Lopes  2024 , todos os direitos reservados</span>

            <div className={estiloFooter.boxImg}>

                <Link href={'https://www.linkedin.com/feed/'} target='_blank' ><Image alt='imagem' src={lkd} className={estiloFooter.icon} /></Link>
                <Link href={'mailto:ramondasilvalopes@hotmail.com'}><Image alt='imagem' src={mail} className={estiloFooter.icon} /></Link>
                <Link href={'https://github.com/RamonLopes86'} target='_blank'><Image alt='imagem' src={git} className={estiloFooter.icon} /></Link>
                
               

            </div>


        </section>
           
            


    )
}


