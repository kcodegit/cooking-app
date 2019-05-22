import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesUpdate = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Some Pasta',
      'some desc',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=450&c=sc&poi=face&q=85',
      [new Ingredient('Apples', 5), new Ingredient('Tomatos', 10)],
    ),
    new Recipe(
      'Some Burger',
      'this is a fucking awesome burger',
      'https://sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg',
      [new Ingredient('Cheese', 2), new Ingredient('Onions', 1), new Ingredient('Meat', 1)],
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesUpdate.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes.slice()[id];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdate.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    console.log('updateRecipe', newRecipe);
    this.recipes[index] = newRecipe;
    console.log('recipes', this.recipes);
    this.recipesUpdate.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesUpdate.next(this.recipes.slice());
  }
}
