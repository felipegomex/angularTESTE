import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

export interface performanceData {
  id: number;
  imagePath: string;
  pname: string;
  category: string;
  progress: number;
  sales: number;
  status: string;
}

const ELEMENT_DATA: performanceData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/innovatech.jpg',
    pname: 'Innovatech',
    category: 'Electronics',
    progress: 78.5,
    sales: 3.9,
    status: 'critical',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/valenca.jpg',
    pname: 'Valença',
    category: 'Fashion',
    progress: 58.6,
    sales: 3.5,
    status: 'medium',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/Meireles e Freitas.jpg',
    pname: 'Meireles e Freitas',
    category: 'Womens Fashion',
    progress: 25,
    sales: 3.8,
    status: 'critical',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/fama.jpg',
    pname: 'Fama',
    category: 'Electronics',
    progress: 96.3,
    sales: 3.54,
    status: 'high',
  },
];

interface month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-performance',
  imports: [
    NgApexchartsModule,
    MaterialModule,
    TablerIconsModule,
    CommonModule,
  ],
  templateUrl: './product-performance.component.html',
})
export class AppProductPerformanceComponent {
  displayedColumns: string[] = ['product', 'progress', 'status', 'sales'];
  dataSource = ELEMENT_DATA;

  months: month[] = [
    { value: 'mar', viewValue: 'March 2025' },
    { value: 'apr', viewValue: 'April 2025' },
    { value: 'june', viewValue: 'June 2025' },
  ];
}
