import { Component } from '@angular/core';
import { Supplier } from '../model/Supplier';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SupplierService } from '../Services/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent {

  id: any;
  supplier: Supplier;
  successMsg: string = '';
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {
    this.supplier = new Supplier(0, '', '', '', '', ''); // Initialize with default values
  }

  ngOnInit(): void {
    // Retrieve the supplier ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id !== null) {
      const supplierId = +id;
  
      // Fetch the supplier details by ID
      this.supplierService.getSupplierById(supplierId).subscribe(
        (response) => {
          this.supplier = response;
        },
        (error) => {
          console.error('Error fetching supplier details:', error);
        }
      );
    } else {
      console.error('Supplier ID is null. Handle this case accordingly.');
    }
  }
  

  updateSupplier() {
    this.supplierService.updateSupplier(this.id,this.supplier).subscribe(
      (response) => {
        // Handle supplier update success
        console.log('Supplier updated successfully:', response);
        this.successMsg = 'Supplier updated successfully';
        // Optionally, navigate back to the supplier list
        this.router.navigate(['/supplier-list']);
      },
      (error) => {
        // Handle update error
        console.error('Error updating supplier:', error);
      }
    );
  }

}
