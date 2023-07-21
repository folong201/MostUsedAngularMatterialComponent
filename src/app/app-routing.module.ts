import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButonsComponent } from './components/butons/butons.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BontonsheetComponent } from './components/bontonsheet/bontonsheet.component';
import { ButtontoogleComponent } from './components/buttontoogle/buttontoogle.component';
import { CardComponent } from './components/card/card.component';
import { ChipsComponent } from './components/chips/chips.component';

const routes: Routes = [
  { path: "buttons", component: ButonsComponent },
  { path: "autocomplete", component: AutocompleteComponent },
  { path: "botonsheet", component: BontonsheetComponent },
  { path: "tooglebutton", component: ButtontoogleComponent },
  { path: "card", component: CardComponent },
  { path: "chips", component: ChipsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


