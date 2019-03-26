import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/css/coast-plan-form.css';
import '../src/css/tag-h.css';
import '../src/css/estilos.css';
import '../src/css/Footer-Clean.css';
import '../src/fonts/ionicons.min.css';



let origin='';
let destiny='';
let plan='';
let coast='';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      itemsP:[],
      itemsC:[],
      isLoaded:false,
      selectP: '',
      selectO: '',
      selectD: '',
    }

    
  }

  handleSelectChange = (event) => {

    if(event.target.name === 'sPlano'){
    this.setState({
      selectP: event.target.value
    });
    plan = event.target.value;
    }

    
    if(event.target.name === 'sOrigem'){
      this.setState({
        selectO: event.target.value
      });
      origin = event.target.value;
      }

      
    if(event.target.name === 'sDestino'){
      this.setState({
        selectD: event.target.value
      });
      destiny = event.target.value;
      }




    console.log(event.target.name);
  }

  async searchCoast(){

    if (origin === '' || destiny ==='' || plan === ''){
      alert("Selecione o plano e os códigos de origem e destino.")

    }else if(origin === destiny){
      alert("Você deve selecionar códigos de áreas distintas");
    }
else{
    try{  

  const response = await fetch('http://localhost:3300/custos', {
    method: 'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     "origem" : origin,
     "destino" : destiny
    })
  });
  let res = await response.json();
  

let totalSemP =0;
let totalComP =0;

let tempo = document.getElementById('sTempo').value;

coast = res['custos']['value'];
totalComP=0;
totalSemP=0;



if(tempo > plan){
  //aqui eu utilizo uma let para pegar o tempo excedido,
  //depois uso outra let para usar a taxa de 10% em cima do valor do custo normal,
  //e por fim multiplico a quantidade de minustos que o cliente irá pegar pelo custo com o acrescimo citado acima. 
  let pagar = tempo - plan;
  let coastCAcrescimo = (coast*10/100)+coast;
  totalComP = pagar*coastCAcrescimo;
 }

 //aqui é quando não pagará por plano, então basta pegar o tempo em minutos e multiplicar pelo custo 
totalSemP = tempo*coast;

let totalComPSt = totalComP.toFixed(2).toString();
let totalSemPSt = totalSemP.toFixed(2).toString();
let coastSt = coast.toString();
document.getElementById('sTaxa').value = 'R$'+coastSt;
document.getElementById('sePlano').value = 'R$'+totalSemPSt; 
document.getElementById('cPlano').value = 'R$'+totalComPSt;


}catch (error){
  console.log(error.message);
}
}  

}





  
  async componentDidMount(){
  

try{
 let response = await fetch('http://localhost:3300/planos', {
  method: 'GET',
});
let resP = await response.json();


response = await fetch('http://localhost:3300/custos', {
  method: 'GET',
});
let resC = await response.json();


this.setState({
isLoaded: true,

itemsP: resP.data,
itemsC: resC.data,


})

}catch(error)
  {
     console.log("error " + error);
  }
  }
  
  
  
  
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
        <div className="navbar-nav ml-auto center">
          <a className="nav-item nav-link"  href="#">Home</a>
          <a className="nav-item nav-link"  href="#">Channel</a>
          <a className="nav-item nav-link"  href="#">Login</a>
         </div>
      
 	
      </div> 
      
        </nav>    

<div >

<img id="imgheader" src="img/header7.jpg"/>

</div>



        <div id="servicos">
        <h2>Nossos planos</h2>

        <div>
            <img src="/img/configs.png" alt="Engrenagens"></img>
            <h3>Plano Fale Mais 30</h3>
            <p>Fale a vontade com um bônus de 30 minutos.</p>
        </div>
        <div>
            <img src="/img/hospedagem.png" alt="Servidor"></img>
            <h3>Plano Fale Mais 60</h3>
            <p>Fale a vontade com um bônus de 60 minutos.</p>
        </div>
        <div>
            <img src="/img/site.png" alt="Navegador"></img>
            <h3>Plano Falei mais 120</h3>
            <p>Fale a vontado com um bônus de 120 minutos..</p>
        </div>
</div>





<div className="row register-form register-form-top ">
        <div className="col-md-8 offset-md-2">
  <form className="custom-form">
  <h1 className=".text-*-center .h1E">Simulação de nossos planos, preencha os dados abaixo:</h1>
  
  
  <div className="form-row form-group">

    <div className="col-sm-2 label-column">
    
    <label htmlFor="plano" className="col-form-label">PLANO</label>
    </div>
    <div className="col-sm-2 select-column">
      <select className="form-control" name="sPlano" id="sPlano" onChange={this.handleSelectChange}>
      <option value="" >Selecionar</option>;
        {this.state.itemsP.map((e, key)=>{
          return <option key = {key} value = {e.name}>{e.name}</option>;
        })}
      </select>
      {this.state.selectPlan}
    </div>
    
    <div className="col-sm-2 label-column">
    <label htmlFor="origem" className="col-form-label">ORIGEM</label>
    </div>
    <div className="col-sm-2 select-column">
      <select className="form-control" name="sOrigem" id="sOrigem" onChange={this.handleSelectChange}>
      <option value="" >Selecionar</option>;
        {this.state.itemsC.map((e, key)=>{
          return <option key = {key} value = {e.origin}>{e.origin}</option>;
        })}
      </select>
    </div>

    <div className="col-sm-2 label-column">
  
    <label htmlFor="destino" className="col-form-label">DESTINO</label>
    </div>
    <div className="col-sm-2 select-column">
      <select className="form-control" name="sDestino" id="sDestino" onChange={this.handleSelectChange}>
      <option value="" >Selecionar</option>;
        {this.state.itemsC.map((e, key)=>{
          return <option key = {key} value = {e.origin}>{e.origin}</option>;
        })}
      </select>
    </div>



</div>




<div className="form-row form-group">

<div className="col-sm-2 label-column">
<label htmlFor="taxa" className="col-form-label">TARIFA</label>
</div>
<div className="col-sm-2 input-column">
<input type="text" className="form-control" id="sTaxa" value="" readOnly></input>
</div>

<div className="col-sm-2 label-column">
<label htmlFor="tempo de ligação" className="col-form-label">TEMPO DE LIGAÇÃO</label>
</div>
<div className="col-sm-2 input-column">
<input type="text" className="form-control" placeholder="em minutos" id="sTempo"></input>
</div>

<div className="col-sm-2 label-column">
<label htmlFor="tempo de ligação" className="col-form-label"></label>
</div>
<div className="col-sm-2 input-column">
<button type="button" className="btn btn-primary form-control" onClick={this.searchCoast}>Calcular</button>
</div>




</div>









<div className="form-row form-group">

<div className="col-sm-2 label-column">
</div>
<div className="col-sm-2 input-column">
<label htmlFor="taxa" className="col-form-label">RESULTADO</label>

</div>


<div className="col-sm-2 label-column">
<label htmlFor="sePlano" className="col-form-label">Sem o plano</label>
</div>
<div className="col-sm-2 input-column">
<input type="text" className="form-control" id="sePlano" readOnly></input>


</div>


<div className="col-sm-2 label-column">
<label htmlFor="cPlano" className="col-form-label">Com o plano</label>
</div>
<div className="col-sm-2 input-column">
<input type="text" className="form-control" id="cPlano" readOnly></input>


</div>

</div>





  </form>

  	</div>
    </div>

 


    <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                   
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a>
                        <p className="copyright">Company Name © 2017</p>
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
