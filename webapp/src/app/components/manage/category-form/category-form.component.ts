import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss',
})
export class CategoryFormComponent {
  name!: string;
  categoryService = inject(CategoryService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  isEdit = false;
  id!: string;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.isEdit = true;
      this.categoryService.getCategoryByID(this.id).subscribe((result) => {
        console.log(result);
        this.name = result.name;
      });
    }
  }

  add() {
    console.log(this.name);
    this.categoryService.addCategory(this.name).subscribe((result) => {
      alert('Categoria Criada');
      this.router.navigateByUrl('/admin/categories');
      console.log(result);
    });
  }

  update() {
    this.categoryService
      .updateCategory(this.id, this.name)
      .subscribe((result) => {
        alert('Categoria Atualizada');
        this.router.navigateByUrl('/admin/categories');
        console.log(result);
      });
  }
}
