import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Recipe {
  id: number;
  name: string;
  category: string;
  mainIngredient: string;
  rating: number;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
}

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;

  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Chocolate Cake',
      category: 'Dessert',
      mainIngredient: 'Chocolate',
      rating: 4.5,
      imageUrl:
        'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg',
      ingredients: [
        '200g Chocolate',
        '150g Flour',
        '100g Sugar',
        '3 Eggs',
        '50g Butter',
      ],
      instructions: [
        'Preheat oven to 180°C.',
        'Melt chocolate and butter together.',
        'Mix eggs and sugar until fluffy.',
        'Combine all ingredients and pour into a baking tin.',
        'Bake for 25 minutes.',
      ],
    },
    {
      id: 2,
      name: 'Quinoa Salad',
      category: 'Vegetarian',
      mainIngredient: 'Quinoa',
      rating: 4.0,
      imageUrl:
        'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ingredients: [
        '1 cup Quinoa',
        '1 Cucumber',
        '2 Tomatoes',
        '1 Lemon',
        'Olive Oil',
      ],
      instructions: [
        'Cook quinoa according to package instructions.',
        'Chop cucumber and tomatoes.',
        'Mix quinoa with vegetables.',
        'Add lemon juice and olive oil.',
        'Serve chilled.',
      ],
    },
    {
      id: 3,
      name: 'Vegan Curry',
      category: 'Vegan',
      mainIngredient: 'Tofu',
      rating: 4.8,
      imageUrl:
        'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2019/03/vegan-thai-green-curry-close-up-1000x1500.jpg',
      ingredients: [
        '200g Tofu',
        '1 can Coconut Milk',
        '2 tbsp Curry Paste',
        '1 Onion',
        'Vegetables',
      ],
      instructions: [
        'Sauté onion in a pan.',
        'Add curry paste and cook for 2 minutes.',
        'Add coconut milk and vegetables.',
        'Simmer for 15 minutes.',
        'Add tofu and cook for 5 more minutes.',
      ],
    },
    {
      id: 4,
      name: 'Apple Pie',
      category: 'Dessert',
      mainIngredient: 'Apple',
      rating: 4.2,
      imageUrl:
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ingredients: [
        '5 Apples',
        '200g Flour',
        '100g Sugar',
        '1 tsp Cinnamon',
        '50g Butter',
      ],
      instructions: [
        'Preheat oven to 190°C.',
        'Peel and slice apples.',
        'Mix apples with sugar and cinnamon.',
        'Prepare pie crust with flour and butter.',
        'Bake for 40 minutes.',
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipe = this.recipes.find((r) => r.id === id);
  }
}
