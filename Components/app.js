document.addEventListener('alpine:init', () => {
    Alpine.data('filter', () => ({
        categories: [],
        error: null,
        isOpen: false,
        filterItem: 'Select a category',
        searchItem: '',

        init() {
            this.initializeCategories();
        },

        async initializeCategories() {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                if (!response.ok) throw new Error('failed to fetch categories');
                const data = await response.json();
                this.categories = data;
            } catch (error) {
                this.error = error.message;
            }
        },

        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },

        handleFilter(category) {
            this.filterItem = category;
            this.isOpen = false;
            this.fetchProducts();
        },

        async fetchProducts() {
            
            if (!this.filterItem || this.filterItem === 'Select a category') {
                console.error('No category selected');
                return;
            }
            
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/${get().filterItem}");
                if (!response.ok) throw new Error('Failed to fetch products');

                const data = await response.json();
                console.log('Fetched products:', data);

                this.products = data; //store fetched products


            } catch(error) {
                console.error('Error fetching products:', error.message);
            }
        },

        handleSearch(event) {
            this.searchTerm = event.target.value;
            this.searchProducts(this.searchTerm);
        },

        async searchProducts(term) {
            // Implement your search logic here
            console.log('Searching for products with term:', term);
        }
    }));
});

