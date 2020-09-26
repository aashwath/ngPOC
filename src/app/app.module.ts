import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsSectionComponent } from './forms-section/forms-section.component';
import { PipeTemplateFormComponent } from './forms-section/pipe-template-form/pipe-template-form.component';
import { SignupFormComponent } from './forms-section/signup-form/signup-form.component';
import { TelephoneFormatPipe } from './forms-section/pipe-template-form/telephone-format.pipe';
import { CharacterLimitDirective } from './forms-section/character-limit.directive';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PipeTemplateFormComponent,
    FormsSectionComponent,
    TelephoneFormatPipe,
    SignupFormComponent,
    CharacterLimitDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
