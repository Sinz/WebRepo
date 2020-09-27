import { HttpClient, HttpHeaders } from '@angular/common/http';
/*
 * @Since: 2020-09-26 00:54:13
 * @LastEditTime: 2020-09-27 22:47:35
 * @LastEditors: Zhao.J
 * @FilePath: \angular-contacts\src\app\contact-list\contact-list.component.ts
 * @Description: 
 */
import { Router } from '@angular/Router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:any = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  


  deleteContactById(id , e) {
    e.preventDefault();
    if (!window.confirm('确定删除吗?')){
      return
    }
    this.http.delete('http://localhost:3000/contacts/'+id)
      .toPromise()
      .then(data => {
        console.log(data);
      }).catch(error => {
        console.log(error);
      })
      this.ngOnInit();
  }

  // 列表初始化
  getContacts() {
    this.http.get('http://localhost:3000/contacts')
    .toPromise().then(data => {
      this.contacts = data;
      console.log(data);
      
    }).catch(error => {
      console.log(error);
    })
  }

}
