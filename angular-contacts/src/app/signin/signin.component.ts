/*
 * @Since: 2020-09-26 00:53:15
 * @LastEditTime: 2020-09-27 00:28:40
 * @LastEditors: Zhao.J
 * @FilePath: \angular-contacts\src\app\signin\signin.component.ts
 * @Description: 
 */
import { Router } from '@angular/Router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signForm = {
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

  signin() {
    // 1. 表单注册
    // 2. 获取表单数据
    // 3. 发起http 请求和服务端交互
    // 4. 根据响应结果做交互处理

    const formData = this.signForm;
    this.http.post(
      'http://localhost:3000/session',
      formData
      ).toPromise().then((data: any) => {console.log(data);this.error_email_msg = '';
      window.localStorage.setItem('auth_token',data.token);
      window.localStorage.setItem('user_info',JSON.stringify(data.user));
      this.router.navigate(['/'])
    })
      .catch(err => {
      if(err.status === 401){
        this.error_email_msg = '账号或密码不正确'
      }
    });
  }

}
