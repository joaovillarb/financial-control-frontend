import {HomeComponent} from './home.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {ResumeComponent} from './resume/resume.component';
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";
import {GoalComponent} from './goal/goal.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { EditCostsComponent } from './edit-costs/edit-costs.component';

@NgModule({
  declarations: [HomeComponent, ResumeComponent, GoalComponent, EditCostsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatListModule,
    MatLineModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    CurrencyMaskModule,
    FormsModule,
    MatIconModule
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {
}
