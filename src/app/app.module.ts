import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarListComponent } from './stars/star-list.component';
import { ConvertClassToColorPipe } from './shared/convert-class-to-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StarListComponent,
    ConvertClassToColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
