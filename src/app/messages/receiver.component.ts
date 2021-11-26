import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit, OnDestroy {
  message$ = this.service.message$;

  constructor(private service: MessagesService) { }

  ngOnInit(): void {
    /*
    this.service.message$.subscribe(message => {
      this.message = message;
    });
    */
  }

  ngOnDestroy() {
    console.log('onDestroy ReceiverComponent');
  }

}
