import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../Services/asset.service';
import { Asset } from '../model/Asset';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.css']
})
export class EditAssetComponent implements OnInit {
  assetForm: FormGroup;
  assetData: Asset | undefined; // To store asset data
  editMode: boolean = false; // Edit mode flag

  constructor(
    private fb: FormBuilder,
    private assetService: AssetService,
    private route: ActivatedRoute,
    private router: Router
  ) 
  {
    this.assetForm = this.fb.group({
      assetName: ['', Validators.required],
      assetType: ['', Validators.required],
      assetPrice: ['', Validators.required],
      assetStatus: ['', Validators.required],
      assetQuantity: ['', Validators.required],
    });
  }    

  ngOnInit() {
    const assetId = this.route.snapshot.paramMap.get('id');
    if (assetId) {
      this.assetService.getAssetById(assetId).subscribe((asset) => {
        this.assetData = asset;
        this.assetForm.setValue({
          assetName: asset.assetName,
          assetType: asset.assetType,
          assetPrice: asset.assetPrice,
          assetStatus: asset.assetStatus,
          assetQuantity: asset.assetQuantity
          // assetId: asset.assetId, // If 'assetId' is also an editable field
        });
      });
    }
  }
  
  // toggleEditMode() {
  //   this.editMode = !this.editMode;
  
  //   // Check if this.assetForm is not null
  //   if (this.assetForm) {
  //     // Enable or disable form controls based on edit mode
  //     const controls = Object.keys(this.assetForm.controls);
  //     controls.forEach((control) => {
  //       if (this.editMode) {
  //         this.assetForm.get(control)?.enable(); // Add a null check with '?'
  //       } else {
  //         this.assetForm.get(control)?.disable(); // Add a null check with '?'
  //       }
  //     });
  //   }
  // }
  
  saveAsset() {
    if (this.assetForm.valid) {
      const assetData = this.assetForm.value;
      const assetId = this.route.snapshot.paramMap.get('id');
      if (assetId !== null) {
        this.assetService.editAsset(assetId, assetData).subscribe(() => {
          this.router.navigate(['/view']); // Exit edit mode after saving
          // You can add further logic or redirect to a different page if needed
        });
      }
    }
  }
}
