import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { SidenavModule, ToolbarModule, DashboardModule } from './features';
import {
  StoreModule,
  StoreDebugModule,
  CpuModule,
  MemoryModule,
  SystemModule,
  ProcessesModule,
  BatteryModule,
  NetworkModule,
  LoadModule,
} from './shared';

import 'hammerjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    CoreModule,
    SidenavModule,
    ToolbarModule,
    DashboardModule,

    StoreModule.forRoot(),
    StoreDebugModule,

    CpuModule,
    MemoryModule,
    SystemModule,
    ProcessesModule,
    BatteryModule,
    NetworkModule,
    LoadModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
