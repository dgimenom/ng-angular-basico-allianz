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
    console.log('form valid', form.valid);    // form.invalid
    console.log('form touched', form.touched) //

  }

}
