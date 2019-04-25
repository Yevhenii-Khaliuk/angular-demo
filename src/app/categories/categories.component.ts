import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Category} from '../model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent implements OnInit {

  categories: Array<Category> = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      r => this.categories = r
    );
  }

}
