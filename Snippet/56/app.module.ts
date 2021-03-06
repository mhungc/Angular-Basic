import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MedicineListComponent } from './medicines/medicine-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicineDetailComponent } from './medicines/medicine-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { MedicineModule } from './medicines/medicine.module';
import { AuthGuard } from './medicines/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'medicines',  canActivate:[AuthGuard] , loadChildren: './medicines/medicine.module#MedicineModule' },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
