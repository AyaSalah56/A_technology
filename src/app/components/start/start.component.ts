import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(public dialogService: DialogService) { }

  show() {
    this.dialogService.open(HomeComponent, {
      header: 'Select a Product',
      rtl:true,
      showHeader: false ,
      contentStyle: {
        "padding" : '0' ,
        "border-radius": "6px"
      } ,
      modal : true ,
      breakpoints : {
        '960px': '75vw',
         '640px': '90vw' ,
     } 
    });
  }
}
