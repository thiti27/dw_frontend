import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private hostUrl = environment.backendUrl;
  private authenApiUrl = `${this.hostUrl}api/data`;
  private formularApi = `${this.hostUrl}api/formular`;
  private UserApi = `${this.hostUrl}api/user`;
  private NewsApi = `${this.hostUrl}api/news`;
  private SignalApi = `${this.hostUrl}api/signal`;
  allData = [];
  constructor(private http: HttpClient) { }


  addFormular(name) {
    let data = {
      "name": name
    }
    const url = `${this.formularApi}/add`;
    return this.http.post<any>(url, data);
  }
  addSell(data) {
    const url = `${this.formularApi}/sell`;
    return this.http.post<any>(url, data);
  }
  addBuy(data) {
    const url = `${this.formularApi}/buy`;
    return this.http.post<any>(url, data);
  }

  showFormular() {
    const url = `${this.formularApi}/getAll`;
    return this.http.get<any[]>(url, { headers: this.headers })
  }
  getFormularBuyId(id: string) {
    const url = `${this.formularApi}/buy/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }
  getFormularSellId(id: string) {
    const url = `${this.formularApi}/sell/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }
  updateName(id, name) {
    let data = {
      "id": id,
      "name": name
    }
    const url = `${this.formularApi}/name`;
    return this.http.put<any>(url, data);
  }
  getNameFormularBuyId(id: string) {
    const url = `${this.formularApi}/name/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }
  deleteBeforeUpdate(id: string) {
    const url = `${this.formularApi}/clear/${id}`;
    alert(url)
    return this.http.delete<void>(url, { headers: this.headers });
  }
  updateAll(id) {
    const url = `${this.formularApi}/updateAll/${id}`;
    return this.http.delete<any>(url);
  }
  delFormular(id) {
    const url = `${this.formularApi}/deleteAll/${id}`;
    return this.http.delete<any>(url);
  }

  setChoose(id) {
    let data = {
      "id": id,
    }
    const url = `${this.formularApi}/choose`;
    return this.http.put<any>(url,data);
  }
  getByKeyword(keyword : String) {
  
    const url = `${this.formularApi}/keyword/${keyword}`;
    return this.http.get<any[]>(url);    
  }
  addUser(data) {
    const url = `${this.UserApi}/add`;
    return this.http.post<any>(url, data);
  }
  showUser() {
    const url = `${this.UserApi}/show`;
    return this.http.get<any[]>(url, { headers: this.headers })
  }
  getUserById(id) {
    const url = `${this.UserApi}/data/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }
  updateUserActive(id){   
    let data = {
      "id": id,
    }
    const url = `${this.UserApi}/active`; 
    return this.http.put<any>(url,data);
  }
  updateUserUnActive(id){   
  
    let data = {
      "id": id,
    }       
    const url = `${this.UserApi}/unActive`; 
    return this.http.put<any>(url,data);
  }
  getUserByKeyword(keyword : String) {
    const url = `${this.UserApi}/keyword/${keyword}`;
    return this.http.get<any[]>(url);    
  }
  delUser(id) {
    const url = `${this.UserApi}/delete/${id}`;
    return this.http.delete<any>(url);
  }
  addNews(data) {
    const url = `${this.NewsApi}/add`;
    return this.http.post<any>(url, data);
  }
  showNews() {
    const url = `${this.NewsApi}/show`;
    return this.http.get<any[]>(url, { headers: this.headers })
  }
  getNewsByKeyword(keyword : String) {
    const url = `${this.NewsApi}/keyword/${keyword}`;
    return this.http.get<any[]>(url);    
  }
  showBacktest() {
    const url = `${this.SignalApi}/show`;
    return this.http.get<any[]>(url, { headers: this.headers })
  }
}
