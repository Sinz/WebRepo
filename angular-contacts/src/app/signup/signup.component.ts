/*
 * @Since: 2020-09-26 00:53:31
 * @LastEditTime: 2020-09-27 00:56:21
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

  signup() {
    // 1. 表单注册
    // 2. 获取表单数据
    // 3. 发起http 请求和服务端交互
    // 4. 根据响应结果做交互处理

    const formData = this.signForm;
    this.http.post(
      'http://localhost:3000/users',
      formData
      ).toPromise().then((data: any) => {console.log(data);this.error_email_msg = '';
      window.localStorage.setItem('auth_token',data.token);
      window.localStorage.setItem('user_info',JSON.stringify(data.user));
      this.router.navigate(['/'])
    })
      .catch(err => {
      if(err.status === 409){
        this.error_email_msg = '邮箱已被注册'
      }
    });
  }

}
