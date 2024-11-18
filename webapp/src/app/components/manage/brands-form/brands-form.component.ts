import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brands-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './brands-form.component.html',
  styleUrl: './brands-form.component.scss',
})
export class BrandsFormComponent {
  brandService = inject(BrandService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  isEdit = false;
  id!: string;
  name!: string;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.brandService.getBrandByID(this.id).subscribe((result) => {
        console.log(result);
        this.name = result.name;
      });
    }
  }

  add() {
    this.brandService.addBrand(this.name).subscribe((result) => {
      alert('Marca Criada');
      this.router.navigateByUrl('/admin/brands');
      console.log(result);
    });
  }

  update() {
    this.brandService.updateBrand(this.id, this.name).subscribe((result) => {
      alert('Marca Atualizada');
      this.router.navigateByUrl('/admin/brands');
      console.log(result);
    });
  }
}
