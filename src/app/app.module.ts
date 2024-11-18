// src/app/app.module.ts
import { NgModule } from '@angular/core';          // Importuje dekorator NgModule
import { BrowserModule } from '@angular/platform-browser';  // Importuje moduł, który pozwala aplikacji działać w przeglądarce
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app/app-routing.module';    // Importuje główny komponent aplikacji

@NgModule({
  imports: [
    BrowserModule, AppComponent, AppRoutingModule  // Importuje moduł do uruchomienia aplikacji w przeglądarce
  ],
  providers: [],      // Tutaj możesz zarejestrować usługi
})
export class AppModule { }
