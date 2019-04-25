import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category.model';
import {CategoryService} from '../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category: Category = new Category();

  constructor(private categoryService: CategoryService, private route: Router) { }

  ngOnInit() {
  }

  createCategory() {
    this.categoryService.createCategory(this.category).subscribe(
      r => this.route.navigate(['/categories'])
    );
  }

}
