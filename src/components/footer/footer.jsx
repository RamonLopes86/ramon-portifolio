import estiloFooter from './footer.module.css';
import Link from 'next/link';
import { FaLinkedin , FaGithubAlt  } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";



export default function Footer(props) {





    return (

        <section className={`${estiloFooter.boxPai} ${props.modoDiaRodape}`}>

            <span> <strong>&copy;</strong>  Ramon Lopes  2024 , todos os direitos reservados</span>

            <div className={estiloFooter.boxImg}>

                <Link href={'https://www.linkedin.com/feed/'} target='_blank' ><FaLinkedin className={estiloFooter.icon}/></Link>
                <Link href={'mailto:ramondasilvalopes@hotmail.com'}><CiMail className={estiloFooter.icon}/></Link>
                <Link href={'https://github.com/RamonLopes86'} target='_blank'><FaGithubAlt className={estiloFooter.icon}/></Link>
                
               

            </div>


        </section>
           
            


    )
}


