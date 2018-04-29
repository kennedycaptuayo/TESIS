import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators, FormBuilder} from '@angular/forms';
import {Office} from '../models/office';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  teamForm: FormGroup;
  departments = [
    {id: '1', viewValue: 'BOGOTA DC'},
    {id: '2', viewValue: 'CUNDINAMARCA'},
    {id: '3', viewValue: 'MEDELLIN'},
    {id: '4', viewValue: 'BARRANQUILLA'},
    {id: '5', viewValue: 'CUCUTA'},
    {id: '6', viewValue: 'SANTA_MARTA'},
    {id: '7', viewValue: 'BUCARAMANGA'},
    {id: '8', viewValue: 'CALI'},
    {id: '9', viewValue: 'PASTO'},
    {id: '10', viewValue: 'VILLAVICENCIO'},
    {id: '11', viewValue: 'CARTAGENA'},
    {id: '12', viewValue: 'ARMENIA'}
  ];
  periods_array = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createTeamForm();
    this.addOffice();
  }

  createTeamForm() {
    this.teamForm = this.formBuilder.group({
      company: ['', Validators.required],
      company: ['', Validators.required],
      teamManager: '',
      offices: this.formBuilder.array([]),
      periods: ['', Validators.required],
      periodsAdditionalCost: this.formBuilder.array([]),
      products: this.formBuilder.array([])
    });
  }

  get officeFormArray(): FormArray {
    return this.teamForm.get('offices') as FormArray;
  }

  addOffice() {
    const officeFormTemp = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      departament: ['', Validators.required],
    });
    this.officeFormArray.push(officeFormTemp);
  }

  get periodsAdditionalCostFormArray(): FormArray {
    return this.teamForm.get('periodsAdditionalCost') as FormArray;
  }

  get productsFormArray(): FormArray {
    return this.teamForm.get('products') as FormArray;
  }

  addPeriodsAdditionalCost() {

    if (this.periods_array.length === 0) {
      for (let _i = 0; _i < this.teamForm.get('periods').value; _i++) {
        this.periods_array.push(_i + 1);
      }
    }

    const periodsAdditionalCostFormTemp = this.formBuilder.group({
      id: ['', Validators.required],
      cost: ['1.0']
    });

    this.periodsAdditionalCostFormArray.push(periodsAdditionalCostFormTemp);
  }

  addProduct() {
    if (this.periods_array.length === 0) {
      for (let _i = 0; _i < this.teamForm.get('periods').value; _i++) {
        this.periods_array.push(_i + 1);
      }
    }

    const productsFormTemp = this.formBuilder.group({
      quantity: [1, Validators.required],
      name: ['', Validators.required],
      days: ['', Validators.required]
    });

    this.productsFormArray.push(productsFormTemp);
  }

  onFormSubmit() {
  }
}
