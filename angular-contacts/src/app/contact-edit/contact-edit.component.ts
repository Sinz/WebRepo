import { HttpClient } from '@angular/common/http';
/*
 * @Since: 2020-09-26 00:54:36
 * @LastEditTime: 2020-09-27 23:39:50
 * @LastEditors: Zhao.J
 * @FilePath: \angular-contacts\src\app\contact-edit\contact-edit.component.ts
 * @Description: 
 */
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  formData:any = {
    name:'' ,
    email:'',
    phone:'',
    id: 0
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const contactId = this.activatedRoute.snapshot.params.id;
    this.getContactById(contactId);
  }

  editContact() {
    if (!window.confirm('确定保存吗?')){
      return
    }
    const id = this.formData.id
    this.http.patch('http://localhost:3000/contacts/'+id , this.formData)
    .toPromise()
    .then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
    this.router.navigate(['/']);
  }

  getContactById(id) {

    this.http.get('http://localhost:3000/contacts/'+id)
    .toPromise()
    .then(data => {
      this.formData = data;
    }).catch(error => {
      console.log(error);
    })
  }

}
