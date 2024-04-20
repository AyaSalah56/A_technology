import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  styleClass: string | undefined;
  sliderValue: number = 50;
  max: number = 4 ;
  value:string = 'rtl' ; 
  direction:boolean = true ;
  chipsArray: string[] = []; 
  placeholder:string = "إبحث عن عميل : مثال اسم العميل , رقم الهاتف" ;
  info_placeholder : string = "معلومات إضافية'"
  addchip(event: any) {
    if (this.chipsArray.length == this.max) {
      this.chipsArray.push('+' + this.chipsArray.length);
    }
  }
  constructor(private _DynamicDialogRef: DynamicDialogRef , private _translate:TranslateService) {
  }

  closeDialog()
  {
    this._DynamicDialogRef.close() ;
  }

  translate(lang:string)
  {
    this._translate.use(lang);
    if(this.direction == true)
      {
        this.direction = false ;
        this.value = 'ltr'
      }
      else
      {
        this.direction = true ;
        this.value = 'rtl'
      }
  }
}

