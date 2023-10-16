import { Component } from '@angular/core';
import { Asset } from '../model/Asset';
import { AssetService } from '../Services/asset.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  assetForm: FormGroup;

  constructor(private fb: FormBuilder, private assetService: AssetService) {
    this.assetForm = this.fb.group({
      assetName: ['', Validators.required],
      assetType: ['', Validators.required],
      assetPrice: ['', Validators.required],
      assetStatus: ['', Validators.required],
      assetQuantity: ['', Validators.required]
    });
  }

  addAsset() {
    if (this.assetForm.valid) {
      const assetData: Asset | Asset[] = this.assetForm.value;
      this.assetService.addAsset(assetData).subscribe(
        (response: Asset | Asset[]) => {
          console.log('Asset(s) added successfully:', response);
          this.assetForm.reset();
  
          // Show the success modal
          const modal = document.getElementById('successModal');
          if (modal) {
            modal.classList.add('show');
            console.log('Modal should be shown.');
          } else {
            console.log('Modal element not found.');
          }
  
          // Close the modal programmatically after a certain delay (e.g., 3 seconds)
          setTimeout(() => {
            if (modal) {
              modal.classList.remove('show');
              console.log('Modal should be hidden.');
            }
          }, 10000); // Adjust the delay as needed
        },
        (error) => {
          console.error('Error adding asset(s):', error);
        }
      );
    }
  }
  
  
}

