import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
// import { Ingredient } from '../shared/Ingredient.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', "This is a test desc", 'https://image.shutterstock.com/z/stock-photo-fried-salmon-steak-with-fresh-vegetables-salad-feta-cheese-concept-healthy-food-551147557.jpg', [ new Ingredient('Meat', 1), new Ingredient('Fries', 30) ]), 
        new Recipe('Hod Dog', "This is a another descript", 'https://image.shutterstock.com/z/stock-photo-fried-salmon-steak-with-fresh-vegetables-salad-feta-cheese-concept-healthy-food-551147557.jpg', [ new Ingredient('Hot Dog', 30), new Ingredient('Buns', 30) ]) 
      ];
    
      getRecipes() {
          return this.recipes.slice();
      }
}