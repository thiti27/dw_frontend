import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularCreateComponent } from './formular-create/formular-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormularComponent } from './formular/formular.component';
import { FormularEditComponent } from './formular-edit/formular-edit.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { HeaderComponent } from './header/header.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsComponent } from './news/news.component';
import { SettingComponent } from './setting/setting.component';
import { ChartComponent } from './chart/chart.component';
import { ChartJSComponent } from './chart-js/chart-js.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { BacktestComponent } from './backtest/backtest.component';
import { TestComponent } from './test/test.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    FormularCreateComponent,
    FormularComponent,
    FormularEditComponent,
    UserComponent,
    UserCreateComponent,
    HeaderComponent,
    UserEditComponent,
    NewsCreateComponent,
    NewsEditComponent,
    NewsComponent,
    SettingComponent,
    ChartComponent,
    ChartJSComponent,
    BacktestComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUnuPXweOavCoI5FlyO5z4UXf_6y74Zfg'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
