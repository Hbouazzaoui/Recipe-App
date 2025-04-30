import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Recipe {
  id: number;
  name: string;
  category: string;
  mainIngredient: string;
  rating: number;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';
  selectedCategory: string = 'ALL';
  selectedIngredient: string = '';
  topRatedOnly: boolean = false;

  // Mock data for recipes
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Chocolate Cake',
      category: 'Dessert',
      mainIngredient: 'Chocolate',
      rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1606890737304-57a1f225b7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Quinoa Salad',
      category: 'Vegetarian',
      mainIngredient: 'Quinoa',
      rating: 4.0,
      imageUrl: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Vegan Curry',
      category: 'Vegan',
      mainIngredient: 'Tofu',
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1600356938592-6e5e6f7227d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Apple Pie',
      category: 'Dessert',
      mainIngredient: 'Apple',
      rating: 4.2,
      imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  categories: string[] = ['ALL', 'Dessert', 'Vegetarian', 'Vegan'];
  ingredients: string[] = ['Chocolate', 'Quinoa', 'Tofu', 'Apple'];

  onSearch() {
    console.log('Search Query:', this.searchQuery);
  }

  get filteredRecipes(): Recipe[] {
    return this.recipes.filter(recipe => {
      const matchesCategory = this.selectedCategory === 'ALL' || recipe.category === this.selectedCategory;
      const matchesIngredient = !this.selectedIngredient || recipe.mainIngredient === this.selectedIngredient;
      const matchesRating = !this.topRatedOnly || recipe.rating >= 4.5;
      const matchesSearch = !this.searchQuery || recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesIngredient && matchesRating && matchesSearch;
    });
  }
}
