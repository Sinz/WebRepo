/*
 * @Since: 2020-09-22 23:15:24
 * @LastEditTime: 2020-09-24 01:38:48
 * @LastEditors: Zhao.J
 * @FilePath: \anulardemo\demo\src\app\app.module.ts
 * @Description: 模块
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { FormsModule } from '@angular/forms';

@NgModule({

  // 组装模块资源： 组件，指令，服务
  declarations: [
    AppComponent,
    FooComponent
  ],
  imports: [ // 依赖模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 指定启动的根组件
})
export class AppModule { }
