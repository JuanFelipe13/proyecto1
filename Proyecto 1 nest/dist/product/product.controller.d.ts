import { ProductService } from './product.service';
import { Product } from './product.model';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    create(createProductDto: Product): Promise<Product>;
    delete(id: string): Promise<void>;
}
