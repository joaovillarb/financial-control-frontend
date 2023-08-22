import {HomeComponent} from './home.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {ResumeComponent} from './resume/resume.component';
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";

@NgModule({
  declarations: [HomeComponent, ResumeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatListModule,
    MatLineModule
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {
}
