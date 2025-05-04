import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Recipe {
  id: number;
  name: string;
  category: string;
  mainIngredient: string;
  rating: number;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
  comments?: { username: string; text: string }[];
}

interface Comment {
  username: string;
  text: string;
}

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;
  comment: Comment = { username: '', text: '' };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<Recipe>(`http://localhost:3000/recipes/${id}`).subscribe(
      (recipe) => {
        this.recipe = recipe;
        if (!this.recipe.comments) this.recipe.comments = [];
      },
      (error) => {
        console.error('Error fetching recipe:', error);
      }
    );
  }

  onSubmit() {
    if (this.recipe && this.comment.username && this.comment.text) {
      if (!this.recipe.comments) this.recipe.comments = [];
      this.recipe.comments.push({ ...this.comment });
      const updatedRecipe = { ...this.recipe };
      this.comment = { username: '', text: '' }; // Reset form
      // Update comments in JSON Server
      this.http
        .patch(
          `http://localhost:3000/recipe/${updatedRecipe.id}`,
          updatedRecipe
        )
        .subscribe(
          () => {
            console.log('Comment added successfully');
          },
          (error) => {
            console.error('Error adding comment:', error);
          }
        );
    }
  }

  setRating(newRating: number) {
    if (this.recipe) {
      const recipeId = this.recipe.id;
      this.recipe.rating = newRating;
      // Update rating in JSON Server
      this.http
        .patch(`http://localhost:3000/recipe/${recipeId}`, {
          rating: newRating,
        })
        .subscribe(
          () => {
            console.log(`Rating updated for recipe ${recipeId}: ${newRating}`);
          },
          (error) => {
            console.error('Error updating rating:', error);
          }
        );
    }
  }
}
