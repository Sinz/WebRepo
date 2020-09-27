import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
/*
 * @Since: 2020-09-26 00:52:57
 * @LastEditTime: 2020-09-27 21:14:08
 * @LastEditors: Zhao.J
 * @FilePath: \angular-contacts\src\app\navbar\navbar.component.ts
 * @Description: 
 */
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = JSON.parse(window.localStorage.getItem('user_info') || '{}');

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  signout() {
    this.http.delete('http://localhost:3000/session')
    .toPromise().then(data => {
      window.localStorage.removeItem('auth_token');
      this.router.navigate(['/signin']);
    })
    .catch(err => {
      window.alert('退出失败，请稍后再试')
    })
  }

}
