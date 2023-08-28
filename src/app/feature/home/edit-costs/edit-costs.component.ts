import {Component, Input} from '@angular/core';
import {BudgetAccount} from "../../../core/models/budgetAccount.model";

@Component({
  selector: 'app-edit-costs',
  templateUrl: './edit-costs.component.html',
  styleUrls: ['./edit-costs.component.css']
})
export class EditCostsComponent {
  @Input() budgetList: BudgetAccount[] = [];
}
