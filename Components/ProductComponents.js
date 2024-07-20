function productCard({ id, title, image, price, rating, category }) {
    return {
      handleClick() {
        window.location.href = `https://fakestoreapi.com/products/${id}`;
      },
      addToFavourites(event) {
        event.stopPropagation();
        // Handle add to favourites logic
      },
    };
  }
  
  function productDetail({ id, title, description, image, price, rating, category }) {
    return {
      id,
      title,
      description,
      image,
      price,
      rating,
      category,
    };
  }
  
  function productList() {
    return {
      products: [],
      loading: true,
      error: null,
      init() {
        // Fetch products and update products, loading, and error states
        fetch('https://fakestoreapi.com/api/products')
          .then(response => response.json())
          .then(data => {
            this.products = data;
            this.loading = false;
          })
          .catch(error => {
            this.error = error;
            this.loading = false;
          });
      },
    };
  }