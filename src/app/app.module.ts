import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { SidenavModule, ToolbarModule, ChartModule } from './features';
import { StoreModule, UsageModule, OperatingSystemModule } from './shared';

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
    ChartModule,
    StoreModule.forRoot(),
    UsageModule,
    OperatingSystemModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
