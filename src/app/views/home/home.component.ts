import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Observable } from 'rxjs';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { People } from '../../models/People.model';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SpinnerComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.people$ = this.peopleService.getPeople();
  }

  peopleService = inject(PeopleService)

  people$!: Observable<People[]>;

  faTrashCan = faTrashCan;

  roleOptions: string[] = [
    'Developer',
    'QA Tester',
    'Product Owner',
    'Scrum Master',
    'UX Designer',
    'UI Designer',
    'Business Analyst',
    'Data Analyst',
    'Data Scientist',
    'DevOps Engineer',
    'Cloud Engineer',
    'Security Engineer',
  ]

  peopleForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl('', [Validators.required]),
  });

  @ViewChild('formDirective')
  private formDirective: NgForm | undefined;

  get name() {
    return this.peopleForm.get('name')!;
  }

  get role() {
    return this.peopleForm.get('role')!;
  }

  getNameErrorMessage(): string {
    console.log(this.name.errors)

    if (this.name.hasError('required')) {
      return 'Insira um nome!';
    }

    return this.name.hasError('minlength') ? 'Insira um nome de no mín. 3 letras!' : '';
  }

  getRoleErrorMessage(): string {
    return this.role.hasError('required') ? 'Insira um cargo!' : '';
  }

  remove(id: number | string): void {
    this.peopleService.deletePeople(id)
                      .subscribe({
                        next: () => {
                          this.people$ = this.peopleService.getPeople();
                        }
                      })

  }

  onSubmit(): void {
    if (this.peopleForm.valid) {
      const value: People = {
        id: '',
        name: this.name.value,
        role: this.role.value,
      }

      this.peopleForm.reset();
      this.formDirective!.resetForm();

      this.peopleService.addPeople(value)
                        .subscribe({
                          next: () => {
                            this.people$ = this.peopleService.getPeople();
                          }
                        })
    }
  }
}
