import { Component } from '@angular/core';
import { Supplier } from '../model/Supplier';
import { SupplierService } from '../Services/supplier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {
  newSupplier: Supplier = new Supplier(0, '', '', '', '', ''); // Initialize with default values
  supplierForm: FormGroup;

  constructor(private fb: FormBuilder, private supplierService: SupplierService) {
    this.supplierForm = this.fb.group({
      name: ['', Validators.required],
      contactPerson: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      location: ['', Validators.required]
    });
  }
  
  addSupplier(): void {
    if (this.supplierForm.valid) {
      // Use this.supplierForm.value to get the form data
      const supplierData: Supplier = this.supplierForm.value;
      this.supplierService.addSupplier(supplierData).subscribe(
        (response: Supplier) => {
          // Handle the response, e.g., show a success message
          console.log('Supplier added successfully:', response);
          this.resetForm();
        },
        (error) => {
          // Handle errors, e.g., show an error message
          console.error('Error adding supplier:', error);
        }
      );
    }
  }
  

  resetForm(): void {
    // Reset the form to its initial state
    this.supplierForm.reset();
  }
}
