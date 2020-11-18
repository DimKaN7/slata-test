import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { CandidateService } from './services/candidate.service';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateInfoComponent,
    CandidatesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
