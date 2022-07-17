import React from 'react'
import imagem from '../assets/img/doguito.svg'
import '../assets/css/componentes/cabecalho.css'


const Cabecalho = () => {
     return (
          <header className='cabecalho container'>
               <div className='menu-hamburguer'>
                    <span className='menu-hamburguer__icone'></span>
               </div>

               <div className='cabecalho-container'> 
                    <a href="/" className='fles flex--centro'>
                         <img className='cabecalho__logo' src={ imagem } alt="Logo doguito" />
                         <h1 className='cabecalho__tituloo'>PetShop</h1>
                    </a>
               </div>

               <nav className='menu-cabecalho'>
                    <ul className='menu-itens'>

                         <li>
                              <a href="#" className='menu-iten menu-item--entrar'>Entrar</a>
                         </li>
                         <li>
                              <a href="#" className='menu-iten '>Produtos</a>
                         </li>
                         <li>
                              <a href="/" className='menu-iten '>Blog</a>
                         </li>
                         <li>
                              <a href="/sobre" className='menu-iten '>Sobre</a>
                         </li>

                    </ul>
               </nav>

               <div className='menu-cabecalho-background'></div>

          </header>

     )
}

export default Cabecalho