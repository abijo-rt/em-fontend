import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),BrowserAnimationsModule,BrowserModule,NgModule]
};
