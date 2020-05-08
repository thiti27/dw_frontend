import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/rest.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {


  user = {
    f_name: "",
    l_name: "",
    phone: "",
    email: "",
    token: "",
  }

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

  async save() {
    let formData = new FormData();
    formData.append("f_name", this.user.f_name);
    formData.append("l_name", this.user.l_name)
    formData.append("phone", this.user.phone)
    formData.append("email", this.user.email);
    formData.append("token", this.user.token);
    formData.append("active", "1");
    await this.rest.addUser(formData).toPromise()
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

  back() {
    this.location.back();
  }


}
