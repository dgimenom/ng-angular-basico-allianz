import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  title = 'Error';
  message = 'Se ha prducido un error inesperado';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const code = this.route.snapshot.data['code'];
    if (code === 404) {
      this.title = 'Error 404';
      this.message = 'Página no encontrada';
    }
  }

}
