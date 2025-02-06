import { Component, NgModule } from '@angular/core';

// Import all components
import { ChartsComponent } from './components/charts/charts.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MovingBarComponent } from './components/moving-bar/moving-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

// Import Angular modules directly
import { FormsModule } from '@angular/forms';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FilterBarComponent,
    ChartsComponent,
    SearchBarComponent,
  ],
  template: `
    <app-header></app-header>

    <div class="container">
      <app-filter-bar></app-filter-bar>
      <app-search-bar></app-search-bar>
    </div>

    <app-charts></app-charts>
  `,
  styles: [``], // Add global or inline styles here
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
