import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Server } from '../server.model';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  @Output() cancel = new EventEmitter<boolean>();
  @Output() submit = new EventEmitter<Server>();

  form: FormGroup;
  instanceTypeOptions = ['large', 'medium', 'small'];
  positiveNumberPattern = /^[1-9][0-9]*$/;
  maxLengthAllowed = 50;

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get id(): FormControl {
    return this.form.get('id') as FormControl;
  }

  get status(): FormControl {
    return this.form.get('status') as FormControl;
  }

  get instanceType(): FormControl {
    return this.form.get('instanceType') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      name: new FormControl(
        '',
        [Validators.required, Validators.maxLength(this.maxLengthAllowed)]
      ),
      id: new FormControl(
        '',
        [Validators.required, Validators.pattern(this.positiveNumberPattern)]
      ),
      status: new FormControl('online', Validators.required),
      instanceType: new FormControl('small')
    });
  }

  onCancel() {
    this.cancel.emit(true);
  }

  onSubmit() {
    if (this.form.valid) {
      // console.log(this.form.value);
      const server = new Server(
        this.name.value,
        this.id.value,
        this.status.value,
        this.instanceType.value
      );
      this.submit.emit(server);

    } else {
      this.form.markAllAsTouched();
    }
  }

  onDebug() {
    console.log('form', this.form);
    console.log('form value', this.form.value);
    console.log('form valid', this.form.valid);
    console.log('form touched', this.form.touched);
    console.log('form dirty', this.form.dirty);
    console.log('form errors', this.form.errors);

    console.log('form name valid', this.name.valid);
    console.log('form name touched', this.name.touched);
    console.log('form name dirty', this.name.dirty);
    console.log('form name errors', this.name.errors);

    console.log('form id valid', this.id.valid);
    console.log('form id touched', this.id.touched);
    console.log('form id dirty', this.id.dirty);
    console.log('form id errors', this.id.errors);
  }

}
