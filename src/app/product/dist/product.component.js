"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var product_service_1 = require("../services/product.service");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(alertifyService, productService, activatedRoute) {
        this.alertifyService = alertifyService;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.title = 'Ürün Listesi';
        this.filterText = '';
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.productService.getProducts(params["categoryId"]).subscribe(function (data) {
                _this.products = data;
            });
        });
    };
    ProductComponent.prototype.addToCart = function (product) {
        this.alertifyService.success(product.name + ' eklendi');
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css'],
            providers: [product_service_1.ProductService]
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
