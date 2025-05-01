import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // أضفنا CommonModule

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
  imports: [FormsModule, CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchQuery: string = '';
  selectedCategory: string = 'ALL';
  selectedIngredient: string = '';
  topRatedOnly: boolean = false;

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Chocolate Cake',
      category: 'Dessert',
      mainIngredient: 'Chocolate',
      rating: 4.5,
      imageUrl:
        'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg',
    },
    {
      id: 2,
      name: 'Quinoa Salad',
      category: 'Vegetarian',
      mainIngredient: 'Quinoa',
      rating: 4.0,
      imageUrl:
        'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      name: 'Vegan Curry',
      category: 'Vegan',
      mainIngredient: 'Tofu',
      rating: 4.8,
      imageUrl:
        'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2019/03/vegan-thai-green-curry-close-up-1000x1500.jpg',
    },
    {
      id: 4,
      name: 'Apple Pie',
      category: 'Dessert',
      mainIngredient: 'Apple',
      rating: 4.2,
      imageUrl:
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ];

  categories: string[] = ['ALL', 'Dessert', 'Vegetarian', 'Vegan'];
  ingredients: string[] = ['Chocolate', 'Quinoa', 'Tofu', 'Apple'];

  onSearch() {
    console.log('Search Query:', this.searchQuery);
  }

  get filteredRecipes(): Recipe[] {
    return this.recipes.filter((recipe) => {
      const matchesCategory =
        this.selectedCategory === 'ALL' ||
        recipe.category === this.selectedCategory;
      const matchesIngredient =
        !this.selectedIngredient ||
        recipe.mainIngredient === this.selectedIngredient;
      const matchesRating = !this.topRatedOnly || recipe.rating >= 4.5;
      const matchesSearch =
        !this.searchQuery ||
        recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      return (
        matchesCategory && matchesIngredient && matchesRating && matchesSearch
      );
    });
  }
}
