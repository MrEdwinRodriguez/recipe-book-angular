import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', "This is a test desc", 'https://image.shutterstock.com/z/stock-photo-fried-salmon-steak-with-fresh-vegetables-salad-feta-cheese-concept-healthy-food-551147557.jpg', [ new Ingredient('Meat', 1), new Ingredient('Fries', 30) ]), 
        new Recipe('Hod Dog', "This is a another descript", 'https://image.shutterstock.com/z/stock-photo-fried-salmon-steak-with-fresh-vegetables-salad-feta-cheese-concept-healthy-food-551147557.jpg', [ new Ingredient('Hot Dog', 30), new Ingredient('Buns', 30) ]) 
      ];

      constructor(private slService: ShoppingListService){

      }
    
      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}