import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nonAccessibleForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['']
  });

  constructor(private fb: FormBuilder) {}

  submit(form: FormGroup) {
    console.log(form.value);
  }
}
