import { Component } from "@angular/core";
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';


import "hammerjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit{
  leads = LEADERS;

 

  constructor(private leadService: LeaderService) {}

  ngOnInit() {
    this.leads = this.leadService.getLeader();
  }

 
}
