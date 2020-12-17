"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductAddForms2Component = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var category_service_1 = require("src/app/services/category.service");
var product_service_1 = require("src/app/services/product.service");
var product_1 = require("../product");
var ProductAddForms2Component = /** @class */ (function () {
    function ProductAddForms2Component(formBuilder, categoryService, productService, alertifyService) {
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
        this.productService = productService;
        this.alertifyService = alertifyService;
        this.product = new product_1.Product();
    }
    ProductAddForms2Component.prototype.createProductAddForm = function () {
        this.productAddForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.required],
            imageUrl: ['', forms_1.Validators.required],
            categoryId: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required]
        });
    };
    ProductAddForms2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.createProductAddForm();
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    ProductAddForms2Component.prototype.add = function () {
        var _this = this;
        if (this.productAddForm.valid) {
            this.product = Object.assign({}, this.productAddForm.value);
        }
        this.productService.addProduct(this.product).subscribe(function (data) {
            _this.alertifyService.success(data.name + '  eklendi');
        });
    };
    ProductAddForms2Component = __decorate([
        core_1.Component({
            selector: 'app-product-add-forms2',
            templateUrl: './product-add-forms2.component.html',
            styleUrls: ['./product-add-forms2.component.css'],
            providers: [category_service_1.CategoryService, product_service_1.ProductService]
        })
    ], ProductAddForms2Component);
    return ProductAddForms2Component;
}());
exports.ProductAddForms2Component = ProductAddForms2Component;
