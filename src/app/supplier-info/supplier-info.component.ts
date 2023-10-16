import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Supplier } from '../model/Supplier';
import { SupplierService } from '../Services/supplier.service';

@Component({
  selector: 'app-supplier-info',
  templateUrl: './supplier-info.component.html',
  styleUrls: ['./supplier-info.component.css']
})
export class SupplierInfoComponent {
  suppliers: Supplier[] = [];

  constructor(private supplierService: SupplierService,private router: Router) {}

  ngOnInit(): void {
    this.loadSuppliers(); // Fetch suppliers data
  }

  loadSuppliers() {
    this.supplierService.getAllSuppliers().subscribe(
      (data) => {
        this.suppliers = data;
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }


  updateSupplier(id: number) {
    this.router.navigate([`/edit-supplier/${id}`]);
  }

  deleteSupplier(id: any): void {
      const confirmDelete = confirm('Are you sure you want to delete?');
      if (confirmDelete) {
        this.supplierService.deleteSupplier(id).subscribe(
          () => {
            console.log('Asset deleted successfully');
            this.suppliers = this.suppliers.filter((supplier: {id: any; }) => supplier.id !== id);
          },
          (error) => {
            console.error('Error deleting asset:', error);
          }
        );
      }
      this.supplierService.getAllSuppliers().subscribe(
        (data) => {
          this.suppliers = data;
        },
        (error) => {
          console.error('Error fetching suppliers:', error);
        }
      );
    }
}
