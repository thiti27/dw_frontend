import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't1';


  fieldArray: Array<any> = [
    {
      'name': 'Default Name 1'
    },

  ];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;

  addFieldValue() {
    if (this.fieldArray.length <= 4) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {

    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
    alert(JSON.stringify(this.fieldArray))
  }
}
