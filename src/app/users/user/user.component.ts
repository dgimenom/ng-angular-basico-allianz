import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: string; name: string};

  constructor(private route: ActivatedRoute) {
    console.log('user constructor');
   }

  ngOnInit(): void {
    console.log('user onInit');
    this.route.params.subscribe(params => {
      this.user = {
        id: params.id,
        name: params.name
      }
    });
  }

  ngOnDestroy() {
  }

}
