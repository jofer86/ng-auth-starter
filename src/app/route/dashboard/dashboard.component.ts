import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faChartLine, faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  faHome = faHome;
  faUser = faUser;
  faChartLine = faChartLine;
  faCog = faCog;

  ngOnInit(): void {
  }

}
