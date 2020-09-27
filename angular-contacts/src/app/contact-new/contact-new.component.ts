import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
/*
 * @Since: 2020-09-26 00:54:26
 * @LastEditTime: 2020-09-27 22:56:11
 * @LastEditors: Zhao.J
 * @FilePath: \angular-contacts\src\app\contact-new\contact-new.component.ts
 * @Description: 
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  formData = {
    name:'' ,
    email:'',
    phone:''
  }

  constructor(
    private http:HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addContact() {
    this.http.post('http://localhost:3000/contacts',this.formData)
    .toPromise()
    .then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
    if (window.confirm('添加成功，还要继续吗?')){
      this.formData = {
        name:'' ,
        email:'',
        phone:''
      }
      return
    }else {
      this.router.navigate(['/']);
    }
  }

}
