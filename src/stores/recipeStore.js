import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: []
  }),
  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
    },
    getRecipeById(id) {
      return this.recipes.find(recipe => recipe.id === id);
    }
  }
});
