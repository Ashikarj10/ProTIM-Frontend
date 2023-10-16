import { Router } from '@angular/router';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Asset } from '../model/Asset';
import { AssetService } from '../Services/asset.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  assets:any

  constructor(private service: AssetService, private router: Router,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Retrieve assets from the service
    this.service.getAllAssets().subscribe(
      (data) => {
        this.assets = data;
        this.cdr.detectChanges();
        console.log(this.assets); // Add this line to log assets to the console
      },
      (error) => {
        console.error('Error fetching assets:', error);
      });
  }
  

  editAsset(assetId: string) {
    this.router.navigate([`/edit/${assetId}`]);
  }

  // deletionConfirmationMessage: string = '';

  // deleteAsset(assetId: any) {
  //   this.service.deleteAsset(assetId).subscribe(
  //     (response) => {
  //       if (response) {
  //         // Asset deleted successfully
  //         this.assets = this.assets.filter((asset: { assetId: any; }) => asset.assetId !== assetId);
  //         console.log('Asset deleted successfully');
  //       } else {
  //         console.error('Failed to delete asset with ID:', assetId);
  //       }
  //     },
  //     (error) => {
  //       console.error('Error while deleting asset:', error);
  //     }
      
  //   );
    // this.service.getAllAssets().subscribe(
    //   (data) => {
    //     this.assets = data;
    //     this.cdr.detectChanges();
    //     console.log(this.assets); // Add this line to log assets to the console
    //   },
    //   (error) => {
    //     console.error('Error fetching assets:', error);
    //   });
  
    deleteAsset(assetId: any): void {
      const confirmDelete = confirm('Are you sure you want to delete?');
      if (confirmDelete) {
        this.service.deleteAsset(assetId).subscribe(
          () => {
            console.log('Asset deleted successfully');
            this.assets = this.assets.filter((asset: { assetId: any; }) => asset.assetId !== assetId);
          },
          (error) => {
            console.error('Error deleting asset:', error);
          }
        );
      }
    }
    
    
}
