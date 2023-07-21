import { Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-bontonsheet',
  templateUrl: './bontonsheet.component.html',
  styleUrls: ['./bontonsheet.component.css']
})
export class BontonsheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'sheetview.html',
  standalone: true,
  imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
