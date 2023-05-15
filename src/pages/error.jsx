import logo from '../img/error404.webp'
require('../css/error.css')
const Error = () =>{
    return(
        <section className="error">
            <h2>
                Página no Encontrada!
            </h2>
            <img 
            src={logo}
            alt="logo"/>
        </section>
    )
}


export default Error;