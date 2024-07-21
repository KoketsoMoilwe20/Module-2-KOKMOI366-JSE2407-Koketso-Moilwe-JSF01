function productList() {
    return {
        products: [],
        loading: true,
        error: null,
        view: 'list',
        selectedProduct: null,
        fetchProducts() {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => {
                    this.error = 'Failed to load products. Check your network connection';
                    this.loading = false;
                });
        }
    }
}