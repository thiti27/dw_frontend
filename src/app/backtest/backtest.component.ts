import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common'

@Component({
  selector: 'app-backtest',
  templateUrl: './backtest.component.html',
  styleUrls: ['./backtest.component.css']
})
export class BacktestComponent implements OnInit {
  mDataArray: any[] = [];
  baseUrl = environment.baseUrl;
  node_static_url = environment.backendUrl;
  name = [];
  a = [];
  b = [];
  c = [];
  d = [];
  e = [];
  f = [];
  g = [];
  h = [];
  k = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private rest: RestService,
    private location: Location,
  ) { }

  async ngOnInit() {
    let test = await this.rest.showBacktest().toPromise();
    this.name = test["name"]
    this.a = test["a"]
    this.b = test["b"]
    this.c = test["c"]
    this.d = test["d"]
    this.e = test["e"]
    this.f = test["f"]
    this.g = test["g"]
    this.h = test["h"]
    this.k = test["k"]


  }


  // async onSearch(keyword){
  //   if (keyword != ""){
  //     this.mDataArray = await this.rest.getNewsByKeyword(keyword).toPromise();
  //   }else{
  //     this.mDataArray = await this.rest.showNews().toPromise();
  //   }

  // }

}
