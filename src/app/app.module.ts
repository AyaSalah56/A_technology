import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipsModule } from 'primeng/chips';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import{TranslateHttpLoader} from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChipsModule ,
    HttpClientModule ,
    DynamicDialogModule ,
    TranslateModule.forRoot(
      {
        loader:{
          provide: TranslateLoader,
          useFactory:HttpLoaderFactory,
          deps:[HttpClient]
        }
      }
    )
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }