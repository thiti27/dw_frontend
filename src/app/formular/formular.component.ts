import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common'
@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {
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
    this.mDataArray = await this.rest.showFormular().toPromise();

  }

  editItem(id){
    this.router.navigate(["formular/edit/" + id]);
  }
  async deleteItem(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        await  this.rest.delFormular(id).toPromise();
        this.mDataArray = await this.rest.showFormular().toPromise();
      }
    })


  
  }
  async choose(id){
    await  this.rest.setChoose(id).toPromise();
    this.mDataArray = await this.rest.showFormular().toPromise();
  }

  async onSearch(keyword){
    if (keyword != ""){
      this.mDataArray = await this.rest.getByKeyword(keyword).toPromise();
    }else{
      this.mDataArray = await this.rest.showFormular().toPromise();
    }
    
  }




}
