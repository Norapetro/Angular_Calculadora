import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numeroA: any;
  numeroB: any;
  resultado: number = 0;

  suma() {
    this.resultado = Number(this.numeroA) + Number(this.numeroB);
  }

  resta() {
    this.resultado = Number(this.numeroA) - Number(this.numeroB);
  }

  multiplicacion() {
    this.resultado = Number(this.numeroA) * Number(this.numeroB);
  }

  division() {
    this.resultado = Number(this.numeroA) / Number(this.numeroB);
  }

  potencia() {
    this.resultado = Math.pow(Number(this.numeroA), Number(this.numeroB));
  }
}
