import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})

export class FormAppComponent implements OnInit {

   contacto: FormGroup;
   submitted = false;
   titulo = 'Validacion de formulario con la directiva ngif';
   loading: any; 
   
	
	 constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.contacto = this.formBuilder.group({
            nya: ['', Validators.required],
            fech: ['', Validators.required],             
            email: ['', [Validators.required, Validators.email]],
            asunto: ['', Validators.required],
            gen: ['', Validators.required, Validators,],
            mensaje: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.contacto.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.contacto.invalid) {
            return;
        }

        alert('FORMULARIO VALIDADO POR LA DIRECTIVA NGIF !')
    }
}
