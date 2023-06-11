import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = 'salut'
  ngOnInit(): void {

    console.log(this.message)
  }
  title = 'bank-UI-interface';

}

