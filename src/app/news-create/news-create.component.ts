
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common'
import Swal from 'sweetalert2'
import { RestService } from '../rest.service';


@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {
  mProduct = {
    msg: "",
    image: null
  }

  
  baseUrl = environment.backendUrl;
  public imageSrc: any = null;
  node_static_url = environment.backendUrl;
  mIsSubmitted = false;

  constructor(private rest:RestService, private location:Location) { }

  ngOnInit() {

  }

  async onAddProduct(){
    let formData = new FormData();
    formData.append("msg", this.mProduct.msg);
    formData.append('image', this.mProduct.image)

    await this.rest.addNews(formData).toPromise()
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


  onUploadImage(event) {
    this.mProduct.image = event.target.files[0];
    
    // Show preview image
    if (this.mProduct.image) {
      const reader = new FileReader();
      reader.onload = e => (this.imageSrc = reader.result);
      reader.readAsDataURL(this.mProduct.image);
    }
  }


  onClickCancel(){
    this.location.back();
  }

}
