import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineListComponent } from './medicine-list.component';
import { MedicineDetailComponent } from './medicine-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MedicineListComponent,
    MedicineDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'medicines', component: MedicineListComponent },
      { path: 'medicines/:id', component: MedicineDetailComponent }
    ]),
    SharedModule,
  ]
})
export class MedicineModule { }
