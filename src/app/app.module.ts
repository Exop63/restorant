/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { ApiKeyInterceptor } from './interceptors/interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),  
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
    { provide: "apiUrl", useValue: "https://smarty.kerzz.com:4004/api/" },
    {
      provide: "apiKey", useValue: (req: HttpRequest<any>) => {
        let Headers: HttpHeaders = new HttpHeaders({ apiKey: "bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2" });
        var clone = req.clone({
          headers: Headers,
        });
        return clone;
      },
    }
  ],
})
export class AppModule {
}
