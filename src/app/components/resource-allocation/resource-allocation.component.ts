import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-allocation',
  templateUrl: './resource-allocation.component.html',
  styleUrls: ['./resource-allocation.component.css']
})
export class ResourceAllocationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Fetch data and initialize
    this.initializeResourceAllocation();
  }

  initializeResourceAllocation(): void {
    // Initialize resource allocation data and charts
  }

  

  filterByProject(event: Event): void {
    const projectId = (event.target as HTMLSelectElement).value;
    // Handle filtering by project
  }
}
