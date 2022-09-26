import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BpmnDiagramModule } from './bpmn-diagram/bpmn-diagram.module';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BpmnDiagramModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
