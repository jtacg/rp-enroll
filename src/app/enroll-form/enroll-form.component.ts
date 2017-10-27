import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.scss']
})
export class EnrollFormComponent implements OnInit {
private showRightRail: boolean

  constructor(
    public appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.appComponent.showRightRail = true
  }

}
