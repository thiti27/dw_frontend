import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
    this.mDataArray = await this.rest.showUser().toPromise();

  }

  editItem(id){
    this.router.navigate(["user/edit/" + id]);
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
        await  this.rest.delUser(id).toPromise();
        this.mDataArray = await this.rest.showUser().toPromise();
      }
    })


  
  }

  async onSearch(keyword){
    if (keyword != ""){
      this.mDataArray = await this.rest.getUserByKeyword(keyword).toPromise();
    }else{
      this.mDataArray = await this.rest.showUser().toPromise();
    }
    
  }
  async unActive(id){

    await  this.rest.updateUserActive(id).toPromise();
    this.mDataArray = await this.rest.showUser().toPromise();
  }
  async active(id){
    await  this.rest.updateUserUnActive(id).toPromise();
    this.mDataArray = await this.rest.showUser().toPromise();
  }


}
