import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShopingPageComponent } from './pages/shoping-page/shoping-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogedInPageComponent } from './pages/loged-in-page/loged-in-page.component';
import { RegularPageComponent } from './pages/regular-page/regular-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LogedInNavComponent } from './components/loged-in-nav/loged-in-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    ShopingPageComponent,
    OrderPageComponent,
    LogInComponent,
    AboutUsComponent,
    StatisticsComponent,
    CarouselComponent,
    HomeNavComponent,
    RegisterComponent,
    LogedInPageComponent,
    RegularPageComponent,
    MainPageComponent,
    LogedInNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
