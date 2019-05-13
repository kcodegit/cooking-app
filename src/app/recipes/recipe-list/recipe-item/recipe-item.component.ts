import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedItem = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onSelect() {
    this.selectedItem.emit(this.recipe);
  }
}
