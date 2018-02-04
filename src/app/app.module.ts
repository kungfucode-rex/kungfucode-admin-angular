import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CommonComponents } from './modules/components/common-components';
import { counterReducer } from '../store';
import { AppRouterModule } from './modules/router/app-router.module';


@NgModule({
  // 组件　指令　管道
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // 模块
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRouterModule,
    CommonComponents,
    StoreModule.forRoot({ count: counterReducer }),
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
