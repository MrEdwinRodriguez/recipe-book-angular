import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', "This is a test desc", 'https://image.shutterstock.com/z/stock-photo-fried-salmon-steak-with-fresh-vegetables-salad-feta-cheese-concept-healthy-food-551147557.jpg') 
    new Recipe('The Second Recipe', "This is a another descript", 'https://image.shutterstock.com/z/stock-photo-fried-salmon-steak-with-fresh-vegetables-salad-feta-cheese-concept-healthy-food-551147557.jpg') 
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
