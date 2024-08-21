import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public dateTime = new Date();


  public curHr = this.dateTime.getHours()

  public greetin = [{
    "morning": "Go"
  }]
}
