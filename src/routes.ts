import { Router } from "express";
import { CreateProductController } from './controllers/createProductController';
import { CreateCategoryController } from './controllers/createCategoryController';
import { CreateProductCategoryController } from './controllers/createProductCategoryController';
import { CreateProductWithCategoriesExists } from './controllers/createWithCategoriesExists';
import { FindProduct } from "./controllers/findProductController";
import { FindCategory } from "./controllers/findCategoryController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExists = new CreateProductWithCategoriesExists();

const findProduct = new FindProduct();
const findCategory = new FindCategory();


router.post('/product', createProduct.handle);
router.post('/category', createCategory.handle);
router.post('/categoryProduct', createProductCategory.handle);
router.post('/productWithCategory', createProductCategoryExists.handle)
router.get('/product/:id', findProduct.handle)
router.get('/category/:id', findCategory.handle)

export {router};