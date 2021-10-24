import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data parent to child component';
  data={
    name: 'Suc',
    brand: 'Cola',
    price: 3
  };
}
