import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Page ZionSST
import { HomeComponent } from './Component/PageZionSSt/home/home.component';
import { ZionSSTComponent } from './Component/PageZionSST/zion-sst/zion-sst.component';
import { WeComponent } from './Component/PageZionSSt/we/we.component';
import { FrequentQuestionsComponent } from './Component/PageZionSSt/frequent-questions/frequent-questions.component';
import { ContactUsComponent } from './Component/PageZionSSt/contact-us/contact-us.component';

//Guards
import { BusinessInformationGuard } from './guards/business-information.guard';

import { BusinessSelfAppraisalGuard } from './guards/business-self-appraisal.guard';
import { BusinessHomeGuard } from './guards/business-home.guard';
import { BusinessStateLoginGuard } from './guards/business-state-login.guard';

import { ConfirmPaymentGuard } from './guards/confirm-payment.guard';

import { StateCompanyGuard } from './guards/state-company.guard';


const routes: Routes = [
{path: '', component:HomeComponent, canActivate: [BusinessHomeGuard]},
{path: 'We', component:WeComponent, canActivate: [BusinessHomeGuard]},
{path: 'creative', component:ZionSSTComponent, canActivate: [BusinessHomeGuard]},
{path: 'frequentQuestions', component:FrequentQuestionsComponent, canActivate: [BusinessHomeGuard]},
{path: 'contactUs', component:ContactUsComponent, canActivate: [BusinessHomeGuard]},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
