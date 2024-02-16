// Product Adapter
class ProductAdapter {
  constructor(productService) {
    this.productService = productService;
  }

  async getProductList() {
    // Fetch product data from the ProductService
    const products = await this.productService.getProducts();

    // Transform and format the data as per frontend requirements
    const formattedProducts = products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
    }));

    return formattedProducts;
  }

  async getProductDetails(productId) {
    // Fetch product details from the ProductService
    const product = await this.productService.getProductById(productId);

    // Transform and format the data as per frontend requirements
    const formattedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
    };

    return formattedProduct;
  }
}

// ProductService (Backend Service)
class ProductService {
  async getProducts() {
    // Simulate fetching product data from the actual backend service
    const response = await fetch("/api/products");
    const products = await response.json();

    return products;
  }

  async getProductById(productId) {
    // Simulate fetching a specific product's details from the actual backend service
    const response = await fetch(`/api/products/${productId}`);
    const product = await response.json();

    return product;
  }
}

// Usage
const productService = new ProductService();
const productAdapter = new ProductAdapter(productService);

// Get the list of products
const productList = await productAdapter.getProductList();
console.log(productList);

// Get details of a specific product
const productId = "123";
const productDetails = await productAdapter.getProductDetails(productId);
console.log(productDetails);
