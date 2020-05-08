import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  mDataArray: any[] = [];
  baseUrl = environment.baseUrl;
  node_static_url = environment.backendUrl;


  constructor(
    private router: Router,
    private http: HttpClient,
    private rest: RestService,
    private location: Location,
  ) {}

  async ngOnInit() {
    this.mDataArray = await this.rest.showNews().toPromise();
    alert(JSON.stringify(this.mDataArray))
  }


  async onSearch(keyword){
    if (keyword != ""){
      this.mDataArray = await this.rest.getNewsByKeyword(keyword).toPromise();
    }else{
      this.mDataArray = await this.rest.showNews().toPromise();
    }
    
  }

  view(id){
    Swal.fire({
      imageUrl: this.node_static_url+'/images/'+id,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }



}
