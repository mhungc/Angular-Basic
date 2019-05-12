import { Component, OnInit } from '@angular/core';
import { IMedicine } from './medicine';
@Component({
  selector: 'app-medicines',
  templateUrl: './medicine-list-component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  pageTitle: string = 'Medicine List';
  imageWidth: number = 50;
  imageMargin: number = 50;
  showImage: boolean = false;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMedicines = this.listFilter ? this.performFilter(this.listFilter) : this.medicines;
  }

  filteredMedicines: IMedicine[] = [];

  medicines: IMedicine[] = [
    {
      medicineId: 1,
      medicineName: 'Gibiter',
      medicineCode: 'GDN-001',
      releaseDate: 'March 19, 2018',
      description:
        'GIBITER Easyhaler 160 microgramos/4,5 microgramos/inhalación, Polvo para inhalación.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'https://cdn6.legeneraliste.fr/sites/gen/files/public/styles/zoom_800x600/public/images/313515/58259_IMG_29508_HR.jpg?_ga=2.185882729.1738578289.1557688784-344520912.1557688784'
    },
    {
      medicineId: 2,
      medicineName: 'Mencalisvit',
      medicineCode: 'GDN-002',
      releaseDate: 'March 18, 2018',
      description: 'POLVO PARA SOLUCIÓN ORAL',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'https://www.openfarma.com/tienda/103405-thickbox_default/mencalisvit-30-s0br-5-g.jpg'
    }
  ];

  constructor(){
    this.filteredMedicines = this.medicines;
    this.listFilter = '	Gi';
  }

  ngOnInit(): void {
   console.log('on init on medicine List Component');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IMedicine[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.medicines.filter((product: IMedicine) =>
      product.medicineName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
