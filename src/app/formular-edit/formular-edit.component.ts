import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/rest.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-formular-edit',
  templateUrl: './formular-edit.component.html',
  styleUrls: ['./formular-edit.component.css']
})
export class FormularEditComponent implements OnInit {
  dataBuy: any[] = [];
  dataSell: any[] = [];
  baseUrl = environment.baseUrl;
  node_static_url = environment.backendUrl;

  idFormular : string;
  dataval1Buy = [];
  dataval2Buy = [];
  dataval1Sell = [];
  dataval2Sell = [];
  nameFormular : string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private rest: RestService,
    private location: Location,
  ) {


  }

  async ngOnInit() {

    this.route.params.subscribe(async params=>{
      let id = params["id"]
     this.idFormular = id
     this.nameFormular= await this.rest.getNameFormularBuyId(id).toPromise();  
     this.dataBuy = await this.rest.getFormularBuyId(id).toPromise();  
     this.dataSell = await this.rest.getFormularSellId(id).toPromise();  
    

     for (let i = 0; i < this.dataBuy.length; i++) {
      this.addBuyFieldValue( this.dataBuy[i].indy1, this.dataBuy[i].indy2, this.dataBuy[i].compare) 
      this.dataval1Buy.push(this.dataBuy[i].val1)
      this.dataval2Buy.push(this.dataBuy[i].val2)
     }

     for (let i = 0; i < this.dataSell.length; i++) {
      this.addFieldValue( this.dataSell[i].indy1, this.dataSell[i].indy2, this.dataSell[i].compare) 
      this.dataval1Sell.push(this.dataSell[i].val1)
      this.dataval2Sell.push(this.dataSell[i].val2)
     }



    })


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
    this.dataval1Buy.splice(index, 1);
    this.dataval2Buy.splice(index, 1);
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
    this.dataval1Sell.splice(index, 1);
    this.dataval2Sell.splice(index, 1);

  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
    alert(JSON.stringify(this.fieldArray))
  }

  async save() {
    
    Swal.fire({
      title: 'ชื่อสูตร',
      input:  'text',
      inputValue:  this.nameFormular,
      showCancelButton: true,
      confirmButtonText: 'Save',
      showLoaderOnConfirm: true,
    }).then(async (result) => {
      if (result.value) {
        await this.rest.updateName(this.idFormular,result.value).toPromise()
        await this.rest.updateAll(this.idFormular).toPromise()
      
          for (let i = 0; i < this.fieldArray.length; i++) {
          let formData = new FormData();
          formData.append("indy1", this.indy1[i]);
          formData.append("val1", this.dataval1Sell[i])
          formData.append("compare", this.compareSell[i])
          formData.append("indy2", this.indy2[i]);
          formData.append("val2", this.dataval2Sell[i]);
          formData.append("for_id", this.idFormular);
          await this.rest.addSell( formData).toPromise()
        }


        for (let i = 0; i < this.buyFormular.length; i++) {
          let formData = new FormData();
          formData.append("indy1", this.indy1Buy[i]);
          formData.append("val1", this.dataval1Buy[i])
          formData.append("compare", this.compareBuy[i])
          formData.append("indy2", this.indy2Buy[i]);
          formData.append("val2", this.dataval2Buy[i]);
          formData.append("for_id", this.idFormular );
          await this.rest.addBuy( formData).toPromise()
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


