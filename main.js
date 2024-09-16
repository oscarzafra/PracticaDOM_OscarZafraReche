const products = [
    {
      name: 'Air Force 1,07',
      price: 120,
      stars: 5,
      reviews: 2468,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png'
    },
  
    {
      name: 'AirMax Plus',
      price: 190,
      stars: 4,
      reviews: 502,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/877d30e7-4880-46f8-aa71-6704eb7d944d/AIR+MAX+PLUS.png'
    },

    {
      name: 'AirMax Plus III',
      price: 190,
      stars: 5,
      reviews: 89,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/aqcdmfttkq4cuvv9nuwx/AIR+MAX+PLUS+III.png'
    },

    {
      name: 'P-6000',
      price: 110,
      stars: 5,
      reviews: 31,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c433a467-8480-4938-bbf7-1d229fe606a4/WMNS+NIKE+P-6000.png'
    },

    {
      name: 'Cortez Textile',
      price: 90,
      stars: 4,
      reviews: 99,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8bd40f1c-94cb-4319-8161-37a3fdd93698/NIKE+CORTEZ.png'
    },

    {
      name: 'Air Jordan 1 Mid',
      price: 98,
      stars: 5,
      reviews: 870,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4f864b95-0da2-4f66-b1c7-2cfb6e655bc6/AIR+JORDAN+1+MID.png'
    },

    {
      name: 'Dun Low Retro',
      price: 120,
      stars: 5,
      reviews: 15,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/0f8506d4-c41a-438d-84c5-fbe971fca4c1/NIKE+DUNK+LOW+RETRO+SE.png'
    },

    {
      name: 'Zegama Trail 2',
      price: 180,
      stars: 4,
      reviews: 180,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/0d1124c5-5232-4eaf-afee-c221ceb5eb6f/NIKE+ZOOMX+ZEGAMA+TRAIL+2.png'
    },

    {
      name: 'Phantom GX 2 Elite',
      price: 260,
      stars: 5,
      reviews: 35,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8937af70-c95a-4886-91f4-3ce7c86f5bc4/PHANTOM+GX+II+ELITE+FG.png'
    },

    {
      name: 'Victory One',
      price: 35,
      stars: 5,
      reviews: 350,
      seller: 'Nike',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/77874acd-bf25-4037-bf21-9b442d1b28eb/NIKE+VICTORI+ONE+SLIDE.png'
    },

  ];

const productsContainer = document.getElementById('products-container');

function renderProducts(products) {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <p>Precio: $${product.price}</p>
            <p>Calificación: ${product.stars} estrellas (${product.reviews} reseñas)</p>
            <p>Vendedor: ${product.seller}</p>
        `
    productsContainer.appendChild(productCard);
  });
}

renderProducts(products);