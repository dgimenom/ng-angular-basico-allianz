import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToServers() {
    // Url parts [ '/servers', id, 'edit']  => '/server/1/edit'
    this.router.navigate(['/servers']);
  }

  goToUsers() {
    this.router.navigateByUrl('/users');
  }

}
