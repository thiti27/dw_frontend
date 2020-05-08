import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularComponent } from './formular/formular.component';
import { FormularCreateComponent } from './formular-create/formular-create.component';
import { FormularEditComponent } from './formular-edit/formular-edit.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NewsComponent } from './news/news.component';
import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { SettingComponent } from './setting/setting.component';
import { ChartJSComponent } from './chart-js/chart-js.component';
import { BacktestComponent } from './backtest/backtest.component';


const routes: Routes = [
  { path: '', redirectTo: '/formular', pathMatch: 'full' },
  { path: 'formular', component: FormularComponent },
  { path: 'formular/create', component: FormularCreateComponent },
  { path: 'formular/edit/:id', component: FormularEditComponent},
  { path: 'user', component: UserComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/edit/:id', component: UserEditComponent},
  { path: 'news', component: NewsComponent },
  { path: 'news/create', component:  NewsCreateComponent },
  { path: 'news/edit/:id', component:  NewsEditComponent},
  { path: 'settings', component: SettingComponent },
  { path: 'chart', component: ChartJSComponent },
  { path: 'backtest', component: BacktestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
