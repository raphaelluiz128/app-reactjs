import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/css/coast-plan-form.css';
import '../src/css/tag-h.css';
import '../src/css/estilos.css';
import '../src/css/Footer-Clean.css';
import '../src/fonts/ionicons.min.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className= "navbar-brand" href="#">
        <i className="fas fa-stroopwafel"></i>
        Telzir</a>
        <button className="navbar-toggler" type= "button" data-toggle= "collapse"
        data-target= "#navbarMainToggler" aria-controls="navbarMainToggler" aria-expanded="false"
        aria-label= "Toggle navigation">
        <span className="navbar-toggler-icon"></span></button>
        
      
      <div className="collapse navbar-collapse" id="navbarMainToggler">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link" href="#">Home</a>
          <a className="nav-item nav-link" href="#">Channel</a>
          <a className="nav-item nav-link" href="#">Login</a>
         </div>
      
 	
      </div> 
      
        </nav>    

<div >

<img id="imgheader" src="img/header7.jpg"/>

</div>



        <div id="servicos">
        <h2>SERVIÇOS</h2>
        <div>
            <img src="/img/configs.png" alt="Engrenagens"></img>
            <h3>Fácil Integração</h3>
            <p>Integra facilmente seu site a qualquer gerenciador de conteúdo.</p>
        </div>
        <div>
            <img src="/img/hospedagem.png" alt="Servidor"></img>
            <h3>Hospedagem Moderna</h3>
            <p>Não deixe seus clientes na mão. Tenha seu site 24hrs no ar.</p>
        </div>
        <div>
            <img src="/img/site.png" alt="Navegador"></img>
            <h3>Melhores Práticas</h3>
            <p>Código legível, desenvolvido com as melhores práticas.</p>
        </div>
       
</div>





<div class="row register-form register-form-top ">
        <div class="col-md-8 offset-md-2">
  <form class="custom-form">
  <h1 className=".text-*-center .h1E">Simulação de nossos planos, preencha os dados abaixo:</h1>
  <div class="form-row form-group">

    <div class="col-sm-4 label-column">
    
    <label for="origem" class="col-form-label">ORIGEM</label>
    </div>
    <div class="col-sm-4 select-column">
      <select class="form-control" name="sOrigem" id="sOrigem">
        <option value=""></option>
      </select>
    </div>
 



</div>
  </form>

  	</div>
    </div>

 


    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-8 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                   
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                        <p class="copyright">Company Name © 2017</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>



      </div>
    );
  }
}

export default App;
