import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ny-org-saludos',
  templateUrl: './saludos.component.html',
  styleUrls: ['./saludos.component.css']
})



export class SaludosComponent{
  @Input() nombre:string = 'Eduardo';
  @Output() saludar: EventEmitter<String> = new EventEmitter<String>();

  public nombres: Array<String>= [];
  public nombrelista: string="Eduardo";
  
   

  constructor() { 
  }

  onClick(){
    this.saludar.emit('Hola desde el componente hijo!');
  }


  onButtonClick(){
    this.nombres.push(this.nombrelista);
    this.nombrelista;
    
    console.log(this.nombres);
  }

}
