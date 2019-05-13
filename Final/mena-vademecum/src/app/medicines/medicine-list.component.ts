import { Component, OnInit } from "@angular/core";
import { IMedicine } from "./medicine";
import { MedicineService } from "./medicine.service";

@Component({
  selector: "app-medicines",
  templateUrl: "./medicine-list-component.html",
  styleUrls: ["./medicine-list.component.css"]
})
export class MedicineListComponent implements OnInit {
  pageTitle: string = "Medicine List";
  imageWidth: number = 50;
  imageMargin: number = 50;
  showImage: boolean = false;
  errorMessage = '';
  _listFilter = "";

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMedicines = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.medicines;
  }

  filteredMedicines: IMedicine[] = [];

  medicines: IMedicine[] = [];

  constructor(private mericineService: MedicineService) {
    this.listFilter = "";
  }

  ngOnInit(): void {
    console.log("on init on medicine List Component");
    this.mericineService.getMedicines().subscribe(
      medicines => {
        this.medicines = medicines;
        this.filteredMedicines = this.medicines;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IMedicine[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.medicines.filter(
      (product: IMedicine) =>
        product.medicineName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Medicine List: " + message;
  }
}
