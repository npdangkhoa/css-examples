import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BikerListComponent } from './bikers/bikers-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BikerListComponent,
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
