import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Category} from '../model/category.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string;
  category: Category = new Category();

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoryById(this.categoryId).subscribe(
      r => this.category = r
    );
  }

}
