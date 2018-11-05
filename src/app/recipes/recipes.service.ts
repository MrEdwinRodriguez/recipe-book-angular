import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', "This is a test desc", 'https://image.shutterstock.com/z/stock-photo-fried-salmon-steak-with-fresh-vegetables-salad-feta-cheese-concept-healthy-food-551147557.jpg'), 
        new Recipe('The Second Recipe', "This is a another descript", 'https://image.shutterstock.com/z/stock-photo-fried-salmon-steak-with-fresh-vegetables-salad-feta-cheese-concept-healthy-food-551147557.jpg') 
      ];
    
      getRecipes() {
          return this.recipes.slice();
      }
}