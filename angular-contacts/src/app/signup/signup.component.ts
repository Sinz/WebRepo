/*
 * @Since: 2020-09-26 00:53:31
 * @LastEditTime: 2020-09-26 23:28:22
 * @LastEditors: Zhao.J
 * @FilePath: \angular-contacts\src\app\signup\signup.component.ts
 * @Description: 
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = {
    email: '',
    password: ''
  }

  error_email_msg = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  signup() {
    // 1. 表单注册
    // 2. 获取表单数据
    // 3. 发起http 请求和服务端交互
    // 4. 根据响应结果做交互处理

    const formData = this.signupForm;
    this.http.post(
      'http://localhost:3000/users',
      formData
      ).toPromise().then(data => {console.log(data);this.error_email_msg = '';this.router.navigate(['/'])})
      .catch(err => {
      if(err.status === 409){
        this.error_email_msg = '邮箱已被注册'
      }
    });
  }

}
