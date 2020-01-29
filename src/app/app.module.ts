import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarListComponent } from './stars/star-list.component';
import { ConvertClassToColorPipe } from './shared/convert-class-to-color.pipe';
import { RightAscensionComponent } from './shared/right-ascension.component';
import { DeclinationComponent } from './shared/declination.component';

@NgModule({
  declarations: [
    AppComponent,
    StarListComponent,
    ConvertClassToColorPipe,
    RightAscensionComponent,
    DeclinationComponent
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
