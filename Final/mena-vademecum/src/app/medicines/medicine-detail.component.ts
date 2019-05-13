import { Component, OnInit } from '@angular/core';
import { IMedicine } from './medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from './medicine.service';

@Component({

  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {
  pageTitle = 'Medicine Detail';
  medicine: IMedicine | undefined;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private medicineService: MedicineService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getMedicine(id);
    }
  }

  getMedicine(id: number) {
    this.medicineService.getMedicine(id).subscribe(
      product => this.medicine = product,
      error => this.errorMessage = <any>error);
  }

  onBack():void{
    this.router.navigate(['/medicines']);
  }

}
