import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrModule) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }
      else
        this.getProducts()
    })
  }
  getProducts() { //asenkron
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

  getProductsByCategory(categoryId: number) { //asenkron
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }
  addToCart(product: Product) {
    console.log(product) //for test
    //this.toastrService.success("Added", product.productName)
  }
}
