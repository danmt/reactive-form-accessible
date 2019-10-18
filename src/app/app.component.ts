import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  developerApplicationForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    country: [''],
    whyAreYouApplying: [''],
    experienceInYears: [''],
    salaryExpectation: [''],
    workingHours: this.fb.group({
      startAt: [''],
      endAt: ['']
    }),
    frontend: this.fb.group({
      angular: [''],
      react: [''],
      vue: ['']
    }),
    backend: this.fb.group({
      nodeJs: [''],
      nestJs: [''],
      expressJs: ['']
    }),
    dataBase: this.fb.group({
      sql: [''],
      mongoDb: [''],
      dynamoDb: ['']
    }),
    extras: this.fb.group({
      rxjs: [false],
      redux: [false],
      graphQl: [false],
      restApi: [false]
    })
  });

  constructor(private fb: FormBuilder) {}

  submit(form: FormGroup) {
    console.log(form.value);
  }
}
