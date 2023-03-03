import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular demo project';
  showgousbasha: boolean = false;

  displaygousbasha(){ 

  this.showgousbasha = true;
  }
}
