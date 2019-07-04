import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatToolbarModule, BrowserAnimationsModule,
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [ ]
})
export class AppModule { }
