import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LogedInPageComponent } from './pages/loged-in-page/loged-in-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopingPageComponent } from './pages/shoping-page/shoping-page.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'product-details',
    component: StatisticsComponent
  },
  {
    path: 'shoping-page',
    component: ShopingPageComponent
  },
  {
    path: 'order-page',
    component: OrderPageComponent
  },
  {
    path: 'register-page',
    component: RegisterComponent
  },
  {
    path: 'loged-in',
    component: LogedInPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
