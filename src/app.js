import { LightningElement } from "lwc";

export default class App extends LightningElement {
nome;
altura;
peso;
result;


handleOnClick(){
  this.result = parseFloat(this.peso / (this.altura * this.altura));
}

handleOnChangeNome(event){
  this.nome = event.detail.value;
  console.log(this.nome);
}

handleOnChangeAltura(event){
  this.altura = event.detail.value;
}

handleOnChangePeso(event){
  this.peso = event.detail.value;
}



}
