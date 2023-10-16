import { Component, OnInit } from '@angular/core';
import { AssetService } from '../Services/asset.service';
import { Asset } from '../model/Asset';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  assets: Asset[] = [];
  searchQuery: string = ''; // The search query input field
  searchResults: Asset[] = []; // The property to store search results
  selectedAssetType: string = ''; // The selected asset type for filtering

  constructor(private service: AssetService) {}

  ngOnInit() {
    // Retrieve all assets initially
    this.service.getAllAssets().subscribe(
      (data) => {
        this.assets = data;
        this.searchResults = data;
        console.log(this.searchResults)
      },
      (error) => {
        console.error('Error fetching assets:', error);
      }
    );
  }

  // Function to perform asset search when the user clicks the search button
  performSearch(): void {
    if (this.searchQuery.trim() === '') {
      // If the search query is empty, show all data
      this.searchResults = this.assets;
    } else {
      // Perform a search based on the selected asset type and query
      this.service.searchAssets(this.selectedAssetType, this.searchQuery).subscribe((results) => {
        this.searchResults = results;
      });
    }
  }

  // Function to filter assets by asset type
  filterByAssetType(assetType: string): void {
    this.selectedAssetType = assetType;
    this.performSearch();
  }

  // Function to clear the search results
  clearSearch(): void {
    this.searchQuery = '';
    this.selectedAssetType = '';
    this.searchResults = this.assets;
  }
}