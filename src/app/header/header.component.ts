import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import "hammerjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {

  cconstructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openLoginForm() {
    dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }



}
