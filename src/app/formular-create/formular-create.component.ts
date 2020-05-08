import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/rest.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-formular-create',
  templateUrl: './formular-create.component.html',
  styleUrls: ['./formular-create.component.css']
})
export class FormularCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private rest: RestService,
    private location: Location,
  ) {


  }

  ngOnInit(): void {


  }


  newAttribute: any = {};
  isEditItems: boolean;
  firstField = true;
  firstFieldName = 'First Item name';
  fieldArray: Array<string> = [

  ];

  buy: any = {};
  isBuyItems: boolean;
  buyFormular: Array<any> = [

  ];

  indy1Buy = [];
  indy2Buy = [];
  compareBuy = [];
  val1Buy = [];
  val2Buy = [];


  addBuyFieldValue(ind1, ind2, comp) {
    if (this.buyFormular.length <= 4) {
      this.buyFormular.push(this.buy);
      this.buy = {};
      this.indy1Buy.push(ind1)
      this.indy2Buy.push(ind2)
      this.compareBuy.push(comp)

    } else {

    }
  }

  deleteBuyFieldValue(index) {
    this.buyFormular.splice(index, 1);
    this.indy1Buy.splice(index, 1);
    this.indy2Buy.splice(index, 1);
  }

  onEditBuyCloseItems() {
    this.isBuyItems = !this.isBuyItems;
  }

  // Buy Formular

  indy1 = [];
  indy2 = [];
  compareSell = [];
  val1 = [];
  val2 = [];
  
  addFieldValue(ind1, ind2, comp) {

    if (this.fieldArray.length <= 4) {

      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {

      };
      this.indy1.push(ind1)
      this.indy2.push(ind2)
      this.compareSell.push(comp)
    } else {

    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
    this.indy1.splice(index, 1);
    this.indy2.splice(index, 1);

  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
    alert(JSON.stringify(this.fieldArray))
  }

  async save() {

    Swal.fire({
    
      title: 'ชื่อสูตร',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Save',
      showLoaderOnConfirm: true,

    }).then(async (result) => {

      if (result.value) {
        let a = await this.rest.addFormular(result.value).toPromise()

        for (let i = 0; i < this.fieldArray.length; i++) {
          this.val1.push(Object.values(this.fieldArray[i])[0]);
          this.val2.push(Object.values(this.fieldArray[i])[1]);
        }
        for (let i = 0; i < this.fieldArray.length; i++) {
          let formData = new FormData();
          formData.append("indy1", this.indy1[i]);
          formData.append("val1", this.val1[i])
          formData.append("compare", this.compareSell[i])
          formData.append("indy2", this.indy2[i]);
          formData.append("val2", this.val2[i]);
          formData.append("for_id", a.message);
          let sell = await this.rest.addSell( formData).toPromise()
        }

        for (let i = 0; i < this.buyFormular.length; i++) {
          this.val1Buy.push(Object.values(this.buyFormular[i])[0]);
          this.val2Buy.push(Object.values(this.buyFormular[i])[1]);
        }

        for (let i = 0; i < this.buyFormular.length; i++) {
          let formData = new FormData();
          formData.append("indy1", this.indy1Buy[i]);
          formData.append("val1", this.val1Buy[i])
          formData.append("compare", this.compareBuy[i])
          formData.append("indy2", this.indy2Buy[i]);
          formData.append("val2", this.val2Buy[i]);
          formData.append("for_id", a.message);
          let buy = await this.rest.addBuy( formData).toPromise()
        }

        Swal.fire({
          title: 'Create successfully',
          text: 'Click close button to back to the Post page',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: "Close",
          confirmButtonColor: "#3085d6",
        }).then(result => {
          this.location.back();
        });

       
      }

    })
  }

  EMA() {
    this.addFieldValue('EMA', 'EMA', '<');
  }
  SMA() {
    this.addFieldValue('SMA', 'SMA', '<');
  }
  RSI() {

    this.addFieldValue('RSI', 'VALUE', '<');
  }
  MACD() {

    this.addFieldValue('MACD', 'VALUE', '<');
  }

  // Buy Indicator

  EMAB() {
    this.addBuyFieldValue('EMA', 'EMA', '>');
  }
  SMAB() {
    this.addBuyFieldValue('SMA', 'SMA', '>');
  }
  RSIB() {

    this.addBuyFieldValue('RSI', 'VALUE', '>');
  }
  MACDB() {
    this.addBuyFieldValue('MACD', 'VALUE', '>');
  }




}


