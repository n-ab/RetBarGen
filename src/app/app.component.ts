import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  color_choices = ['seagreen', 'silver', 'tan', 'violet', 'orangered', 'olive', 'oldlace', 'navy', 'midnightblue', 'mediumpurple'];
  rannum = Math.floor(Math.random()*10);
  rannum2= Math.floor(Math.random()*10);
  rannum3= Math.floor(Math.random()*10);
  rannum4= Math.floor(Math.random()*10);
  rannum5= Math.floor(Math.random()*10);
  rannum6= Math.floor(Math.random()*10);
  rannum7= Math.floor(Math.random()*10);
  rannum8= Math.floor(Math.random()*10);
  rannum9= Math.floor(Math.random()*10);
  rannum10= Math.floor(Math.random()*10);
}
