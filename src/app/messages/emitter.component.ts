import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  msg = '';

  constructor(private service: MessagesService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.service.sendData(this.msg);
  }
}
