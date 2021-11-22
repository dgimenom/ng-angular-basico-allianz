import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-server-td',
  templateUrl: './create-server-td.component.html',
  styleUrls: ['./create-server-td.component.css']
})
export class CreateServerTdComponent implements OnInit {

  @Output() cancel = new EventEmitter<boolean>();

  instanceTypeOptions = ['large', 'medium', 'small'];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  onCancel() {
    this.cancel.emit(true);
  }

  onDebug(form: NgForm) {
    console.log('form', form);
    console.log('form value', form.value);
    console.log('form valid', form.valid);    //                     form.invalid
    console.log('form touched', form.touched) // hay interaccion     form.untouched
    console.log('form dirty', form.dirty) // hay cambio valor        form.pristine
    console.log('form errors', form.errors)

    console.log('form name valid', form.controls.name.valid);    //                     form.controls.name.invalid
    console.log('form name touched', form.controls.name.touched) // hay interaccion     form.controls.name.untouched
    console.log('form name dirty', form.controls.name.dirty) // hay cambio valor        form.controls.name.pristine
    console.log('form name errors', form.controls.name.errors)

  }

}
