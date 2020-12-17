"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductAddForms1Component = void 0;
var core_1 = require("@angular/core");
var category_service_1 = require("src/app/services/category.service");
var product_service_1 = require("src/app/services/product.service");
var product_1 = require("../product");
var ProductAddForms1Component = /** @class */ (function () {
    function ProductAddForms1Component(categoryService, productService, alertifyService) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.alertifyService = alertifyService;
        this.model = new product_1.Product();
    }
    ProductAddForms1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    ProductAddForms1Component.prototype.add = function (form) {
        var _this = this;
        this.productService.addProduct(this.model).subscribe(function (data) {
            _this.alertifyService.success(data.name + '  eklendi');
        });
    };
    ProductAddForms1Component = __decorate([
        core_1.Component({
            selector: 'app-product-add-forms1',
            templateUrl: './product-add-forms1.component.html',
            styleUrls: ['./product-add-forms1.component.css'],
            providers: [category_service_1.CategoryService, product_service_1.ProductService]
        })
    ], ProductAddForms1Component);
    return ProductAddForms1Component;
}());
exports.ProductAddForms1Component = ProductAddForms1Component;
