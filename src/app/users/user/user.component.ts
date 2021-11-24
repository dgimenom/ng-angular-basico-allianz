import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: string; name: string};
  allowEdit = false;
  fragment: string;

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

    // this.route.snapshot.queryParams['allowEdit'];

    this.route.queryParams.subscribe(params => {
      this.allowEdit = params['allowEdit'] === '1';
    });

    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  ngOnDestroy() {
  }

}
