import { Link } from 'react-router-dom'
import '../scss/ui/_contacto.scss'
import MenuHamburguesa from '../components/MenuHamburguesa'

const Contact = () => {


  return (
    <div className='over'>
        
        <div className="contacto">
       
                        <MenuHamburguesa /> 

                     
            
                        <div className="esquinac"> 
                              <div className="esquinac__encabezadoc">
                                <hr className="esquinac__lineac" />
                                <p className="esquinac__parrafoc">/04</p>
                            </div> 
                      </div> 

      
                    <div className="texto">
                        <p className="texto__parrafoc1">
                            me puedes contactar por <Link className="texto__enlacesc" target="_blank" to="mailto:facucostafotografia@gmail.com">mail</Link>,
                            <Link className="texto__enlacesc" target="_blank" to="https://www.linkedin.com/in/facundo-costa-b20493256/">{' '}linkedin</Link>{' '}
                            o <Link className="texto__enlacesc" to="tel:+34624453418" target="_blank">phone</Link>.
                        </p>
                    </div>

        </div>
    </div>
  )
}

export default Contact