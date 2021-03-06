import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  form: FormGroup;
  
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      produto: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      quantidades:[null, [Validators.min(1)]]
    })
  }

  hasError(field: string){
    return this.form.get(field).errors;
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.valid){
      console.log(this.form)
    }
  }
}
