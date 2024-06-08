import { ProductInterface } from "../types/schemas";


export const PRODUCTS: ProductInterface[] = JSON.parse(
  ` [{
  "slug": "product-0",
  "name": "Café capsulas 2kg",
  "price": 245,
  "type": "capsulas",
  "thumbnail": "/capsula-5.png",
  "gallery": [
    "/capsula-5.png",
    "/capsula-5.png",
    "/capsula-5.png",
    "/capsula-5.png",
    "/capsula-5.png"
  ],
  "description": "Disfruta de este delicioso café capsulas, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 245 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café capsulas, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 245 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "capsulas",
    "grano"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 14,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-1",
  "name": "Café grano 1.25kg",
  "price": 1193,
  "type": "grano",
  "thumbnail": "/grano-0.png",
  "gallery": [
    "/grano-0.png",
    "/grano-0.png",
    "/grano-0.png",
    "/grano-0.png",
    "/grano-0.png"
  ],
  "description": "Disfruta de este delicioso café grano, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.25 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1193 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café grano, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.25 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1193 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "grano",
    "capsulas"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-2",
  "name": "Café capsulas 2kg",
  "price": 1642,
  "type": "capsulas",
  "thumbnail": "/capsula-5.png",
  "gallery": [
    "/capsula-5.png",
    "/capsula-5.png",
    "/capsula-5.png",
    "/capsula-5.png",
    "/capsula-5.png"
  ],
  "description": "Disfruta de este delicioso café capsulas, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1642 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café capsulas, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1642 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "tostado",
    "grano"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 43,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-3",
  "name": "Café molido 5kg",
  "price": 1120,
  "type": "molido",
  "thumbnail": "/molido-7.jpg",
  "gallery": [
    "/molido-7.jpg",
    "/molido-7.jpg",
    "/molido-7.jpg",
    "/molido-7.jpg",
    "/molido-7.jpg"
  ],
  "description": "Disfruta de este delicioso café molido, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1120 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café molido, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1120 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "grano",
    "molido",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-4",
  "name": "Café tostado 10kg",
  "price": 790,
  "type": "tostado",
  "thumbnail": "/tostado-1.png",
  "gallery": [
    "/tostado-1.png",
    "/tostado-1.png",
    "/tostado-1.png",
    "/tostado-1.png",
    "/tostado-1.png"
  ],
  "description": "Disfruta de este delicioso café tostado, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 10 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 790 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café tostado, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 10 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 790 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "grano",
    "capsulas"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 22,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-5",
  "name": "Café instantaneo 2kg",
  "price": 1867,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-3.png",
  "gallery": [
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1867 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1867 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "capsulas",
    "molido"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-6",
  "name": "Café instantaneo 750g",
  "price": 292,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-6.jpg",
  "gallery": [
    "/instantaneo-6.jpg",
    "/instantaneo-6.jpg",
    "/instantaneo-6.jpg",
    "/instantaneo-6.jpg",
    "/instantaneo-6.jpg"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Con un peso de 750 gramos, esta bolsa de café es perfecta para disfrutar de múltiples tazas. El precio de esta exquisita variedad es de 292 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Con un peso de 750 gramos, esta bolsa de café es ideal para disfrutar de múltiples tazas y compartir con tus seres queridos. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 292 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "grano",
    "grano",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 36,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-7",
  "name": "Café instantaneo 1.25kg",
  "price": 1263,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-5.webp",
  "gallery": [
    "/instantaneo-5.webp",
    "/instantaneo-5.webp",
    "/instantaneo-5.webp",
    "/instantaneo-5.webp",
    "/instantaneo-5.webp"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.25 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1263 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.25 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1263 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "instantaneo",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-8",
  "name": "Café tostado 1.5kg",
  "price": 1655,
  "type": "tostado",
  "thumbnail": "/tostado-3.png",
  "gallery": [
    "/tostado-3.png",
    "/tostado-3.png",
    "/tostado-3.png",
    "/tostado-3.png",
    "/tostado-3.png"
  ],
  "description": "Disfruta de este delicioso café tostado, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1655 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café tostado, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1655 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "molido",
    "grano",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 22,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-9",
  "name": "Café instantaneo 250g",
  "price": 1122,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-3.png",
  "gallery": [
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Con un peso de 250 gramos, esta bolsa de café es perfecta para disfrutar de múltiples tazas. El precio de esta exquisita variedad es de 1122 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Con un peso de 250 gramos, esta bolsa de café es ideal para disfrutar de múltiples tazas y compartir con tus seres queridos. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1122 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "tostado",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-10",
  "name": "Café instantaneo 1.25kg",
  "price": 1521,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-2.webp",
  "gallery": [
    "/instantaneo-2.webp",
    "/instantaneo-2.webp",
    "/instantaneo-2.webp",
    "/instantaneo-2.webp",
    "/instantaneo-2.webp"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.25 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1521 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.25 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1521 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "molido",
    "grano",
    "molido"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 34,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-11",
  "name": "Café molido 1.5kg",
  "price": 1827,
  "type": "molido",
  "thumbnail": "/molido-7.jpg",
  "gallery": [
    "/molido-7.jpg",
    "/molido-7.jpg",
    "/molido-7.jpg",
    "/molido-7.jpg",
    "/molido-7.jpg"
  ],
  "description": "Disfruta de este delicioso café molido, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1827 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café molido, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1827 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "tostado",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-12",
  "name": "Café grano 250g",
  "price": 98,
  "type": "grano",
  "thumbnail": "/grano-1.webp",
  "gallery": [
    "/grano-1.webp",
    "/grano-1.webp",
    "/grano-1.webp",
    "/grano-1.webp",
    "/grano-1.webp"
  ],
  "description": "Disfruta de este delicioso café grano, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Con un peso de 250 gramos, esta bolsa de café es perfecta para disfrutar de múltiples tazas. El precio de esta exquisita variedad es de 98 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café grano, una elección perfecta para tus momentos de disfrute y relajación. Con un peso de 250 gramos, esta bolsa de café es ideal para disfrutar de múltiples tazas y compartir con tus seres queridos. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 98 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "capsulas",
    "tostado",
    "instantaneo"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 46,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-13",
  "name": "Café instantaneo 250g",
  "price": 1646,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-4.png",
  "gallery": [
    "/instantaneo-4.png",
    "/instantaneo-4.png",
    "/instantaneo-4.png",
    "/instantaneo-4.png",
    "/instantaneo-4.png"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Con un peso de 250 gramos, esta bolsa de café es perfecta para disfrutar de múltiples tazas. El precio de esta exquisita variedad es de 1646 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Con un peso de 250 gramos, esta bolsa de café es ideal para disfrutar de múltiples tazas y compartir con tus seres queridos. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1646 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "grano",
    "grano"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-14",
  "name": "Café capsulas 10kg",
  "price": 831,
  "type": "capsulas",
  "thumbnail": "/capsula-2.webp",
  "gallery": [
    "/capsula-2.webp",
    "/capsula-2.webp",
    "/capsula-2.webp",
    "/capsula-2.webp",
    "/capsula-2.webp"
  ],
  "description": "Disfruta de este delicioso café capsulas, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 10 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 831 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café capsulas, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 10 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 831 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "instantaneo",
    "instantaneo"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 24,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-15",
  "name": "Café grano 500g",
  "price": 1079,
  "type": "grano",
  "thumbnail": "/grano-4.png",
  "gallery": [
    "/grano-4.png",
    "/grano-4.png",
    "/grano-4.png",
    "/grano-4.png",
    "/grano-4.png"
  ],
  "description": "Disfruta de este delicioso café grano, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Con un peso de 500 gramos, esta bolsa de café es perfecta para disfrutar de múltiples tazas. El precio de esta exquisita variedad es de 1079 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café grano, una elección perfecta para tus momentos de disfrute y relajación. Con un peso de 500 gramos, esta bolsa de café es ideal para disfrutar de múltiples tazas y compartir con tus seres queridos. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1079 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "grano",
    "grano"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-16",
  "name": "Café molido 5kg",
  "price": 1279,
  "type": "molido",
  "thumbnail": "/molido-2.webp",
  "gallery": [
    "/molido-2.webp",
    "/molido-2.webp",
    "/molido-2.webp",
    "/molido-2.webp",
    "/molido-2.webp"
  ],
  "description": "Disfruta de este delicioso café molido, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1279 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café molido, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1279 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "grano",
    "instantaneo"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 37,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-17",
  "name": "Café instantaneo 2kg",
  "price": 594,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-2.webp",
  "gallery": [
    "/instantaneo-2.webp",
    "/instantaneo-2.webp",
    "/instantaneo-2.webp",
    "/instantaneo-2.webp",
    "/instantaneo-2.webp"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 594 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 594 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "grano",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-18",
  "name": "Café grano 2kg",
  "price": 1996,
  "type": "grano",
  "thumbnail": "/grano-3.png",
  "gallery": [
    "/grano-3.png",
    "/grano-3.png",
    "/grano-3.png",
    "/grano-3.png",
    "/grano-3.png"
  ],
  "description": "Disfruta de este delicioso café grano, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1996 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café grano, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1996 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "tostado",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 47,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-19",
  "name": "Café capsulas 1.25kg",
  "price": 1034,
  "type": "capsulas",
  "thumbnail": "/capsula-2.webp",
  "gallery": [
    "/capsula-2.webp",
    "/capsula-2.webp",
    "/capsula-2.webp",
    "/capsula-2.webp",
    "/capsula-2.webp"
  ],
  "description": "Disfruta de este delicioso café capsulas, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.25 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1034 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café capsulas, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.25 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1034 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "molido",
    "grano",
    "capsulas"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-20",
  "name": "Café instantaneo 2kg",
  "price": 1277,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-3.png",
  "gallery": [
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1277 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1277 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "grano",
    "tostado",
    "capsulas"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 22,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-21",
  "name": "Café grano 750g",
  "price": 98,
  "type": "grano",
  "thumbnail": "/grano-6.png",
  "gallery": [
    "/grano-6.png",
    "/grano-6.png",
    "/grano-6.png",
    "/grano-6.png",
    "/grano-6.png"
  ],
  "description": "Disfruta de este delicioso café grano, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Con un peso de 750 gramos, esta bolsa de café es perfecta para disfrutar de múltiples tazas. El precio de esta exquisita variedad es de 98 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café grano, una elección perfecta para tus momentos de disfrute y relajación. Con un peso de 750 gramos, esta bolsa de café es ideal para disfrutar de múltiples tazas y compartir con tus seres queridos. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 98 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "grano",
    "grano",
    "grano"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-22",
  "name": "Café grano 1.5kg",
  "price": 1087,
  "type": "grano",
  "thumbnail": "/grano-2.png",
  "gallery": [
    "/grano-2.png",
    "/grano-2.png",
    "/grano-2.png",
    "/grano-2.png",
    "/grano-2.png"
  ],
  "description": "Disfruta de este delicioso café grano, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1087 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café grano, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1087 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "capsulas",
    "grano"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 11,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-23",
  "name": "Café molido 2kg",
  "price": 1764,
  "type": "molido",
  "thumbnail": "/molido-6.webp",
  "gallery": [
    "/molido-6.webp",
    "/molido-6.webp",
    "/molido-6.webp",
    "/molido-6.webp",
    "/molido-6.webp"
  ],
  "description": "Disfruta de este delicioso café molido, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1764 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café molido, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1764 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "molido",
    "instantaneo"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-24",
  "name": "Café tostado 1.25kg",
  "price": 281,
  "type": "tostado",
  "thumbnail": "/tostado-7.webp",
  "gallery": [
    "/tostado-7.webp",
    "/tostado-7.webp",
    "/tostado-7.webp",
    "/tostado-7.webp",
    "/tostado-7.webp"
  ],
  "description": "Disfruta de este delicioso café tostado, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.25 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 281 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café tostado, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.25 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 281 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "molido",
    "grano",
    "molido"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 19,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-25",
  "name": "Café grano 5kg",
  "price": 99,
  "type": "grano",
  "thumbnail": "/grano-1.webp",
  "gallery": [
    "/grano-1.webp",
    "/grano-1.webp",
    "/grano-1.webp",
    "/grano-1.webp",
    "/grano-1.webp"
  ],
  "description": "Disfruta de este delicioso café grano, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 99 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café grano, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 99 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "grano",
    "grano",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-26",
  "name": "Café tostado 1.25kg",
  "price": 1099,
  "type": "tostado",
  "thumbnail": "/tostado-2.png",
  "gallery": [
    "/tostado-2.png",
    "/tostado-2.png",
    "/tostado-2.png",
    "/tostado-2.png",
    "/tostado-2.png"
  ],
  "description": "Disfruta de este delicioso café tostado, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.25 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1099 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café tostado, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.25 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1099 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "molido",
    "grano",
    "instantaneo"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 35,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-27",
  "name": "Café instantaneo 1.5kg",
  "price": 1724,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-3.png",
  "gallery": [
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1724 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1724 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "instantaneo",
    "molido"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-28",
  "name": "Café instantaneo 1.5kg",
  "price": 152,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-1.webp",
  "gallery": [
    "/instantaneo-1.webp",
    "/instantaneo-1.webp",
    "/instantaneo-1.webp",
    "/instantaneo-1.webp",
    "/instantaneo-1.webp"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 152 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 152 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "tostado",
    "grano"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 49,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-29",
  "name": "Café molido 1.5kg",
  "price": 630,
  "type": "molido",
  "thumbnail": "/molido-3.png",
  "gallery": [
    "/molido-3.png",
    "/molido-3.png",
    "/molido-3.png",
    "/molido-3.png",
    "/molido-3.png"
  ],
  "description": "Disfruta de este delicioso café molido, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 630 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café molido, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 630 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "molido",
    "capsulas",
    "grano"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-30",
  "name": "Café capsulas 1kg",
  "price": 1612,
  "type": "capsulas",
  "thumbnail": "/capsula-2.webp",
  "gallery": [
    "/capsula-2.webp",
    "/capsula-2.webp",
    "/capsula-2.webp",
    "/capsula-2.webp",
    "/capsula-2.webp"
  ],
  "description": "Disfruta de este delicioso café capsulas, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1612 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café capsulas, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1612 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "tostado",
    "instantaneo"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 48,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-31",
  "name": "Café instantaneo 2kg",
  "price": 221,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-4.png",
  "gallery": [
    "/instantaneo-4.png",
    "/instantaneo-4.png",
    "/instantaneo-4.png",
    "/instantaneo-4.png",
    "/instantaneo-4.png"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 221 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 221 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "grano",
    "capsulas",
    "capsulas"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-32",
  "name": "Café capsulas 2kg",
  "price": 14,
  "type": "capsulas",
  "thumbnail": "/capsula-1.webp",
  "gallery": [
    "/capsula-1.webp",
    "/capsula-1.webp",
    "/capsula-1.webp",
    "/capsula-1.webp",
    "/capsula-1.webp"
  ],
  "description": "Disfruta de este delicioso café capsulas, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 14 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café capsulas, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 14 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "molido",
    "grano",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 38,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-33",
  "name": "Café grano 1kg",
  "price": 1379,
  "type": "grano",
  "thumbnail": "/grano-5.png",
  "gallery": [
    "/grano-5.png",
    "/grano-5.png",
    "/grano-5.png",
    "/grano-5.png",
    "/grano-5.png"
  ],
  "description": "Disfruta de este delicioso café grano, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1379 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café grano, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1379 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "grano",
    "tostado",
    "grano"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-34",
  "name": "Café instantaneo 500g",
  "price": 132,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-1.webp",
  "gallery": [
    "/instantaneo-1.webp",
    "/instantaneo-1.webp",
    "/instantaneo-1.webp",
    "/instantaneo-1.webp",
    "/instantaneo-1.webp"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Con un peso de 500 gramos, esta bolsa de café es perfecta para disfrutar de múltiples tazas. El precio de esta exquisita variedad es de 132 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Con un peso de 500 gramos, esta bolsa de café es ideal para disfrutar de múltiples tazas y compartir con tus seres queridos. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 132 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "grano",
    "instantaneo"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 12,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-35",
  "name": "Café molido 1.5kg",
  "price": 1030,
  "type": "molido",
  "thumbnail": "/molido-3.png",
  "gallery": [
    "/molido-3.png",
    "/molido-3.png",
    "/molido-3.png",
    "/molido-3.png",
    "/molido-3.png"
  ],
  "description": "Disfruta de este delicioso café molido, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1030 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café molido, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1030 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "grano",
    "capsulas"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-36",
  "name": "Café tostado 2kg",
  "price": 1639,
  "type": "tostado",
  "thumbnail": "/tostado-1.png",
  "gallery": [
    "/tostado-1.png",
    "/tostado-1.png",
    "/tostado-1.png",
    "/tostado-1.png",
    "/tostado-1.png"
  ],
  "description": "Disfruta de este delicioso café tostado, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 2 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1639 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café tostado, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 2 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1639 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "tostado",
    "molido",
    "tostado"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 46,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-37",
  "name": "Café instantaneo 1.5kg",
  "price": 852,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-3.png",
  "gallery": [
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png",
    "/instantaneo-3.png"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.5 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 852 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.5 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 852 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "molido",
    "instantaneo"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-38",
  "name": "Café instantaneo 1.25kg",
  "price": 1422,
  "type": "instantaneo",
  "thumbnail": "/instantaneo-1.webp",
  "gallery": [
    "/instantaneo-1.webp",
    "/instantaneo-1.webp",
    "/instantaneo-1.webp",
    "/instantaneo-1.webp",
    "/instantaneo-1.webp"
  ],
  "description": "Disfruta de este delicioso café instantaneo, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Viene en una presentación de 1.25 kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. El precio de esta exquisita variedad es de 1422 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café instantaneo, una elección perfecta para tus momentos de disfrute y relajación. Este café viene en una presentación de 1.25 kilogramos, asegurando un suministro duradero para tu hogar o negocio. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 1422 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "instantaneo",
    "tostado",
    "molido"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "sale": {
    "discount": 14,
    "price": 900,
    "startDate": "7/6/2024, 20:10:33",
    "endDate": "7/6/2024, 20:10:33"
  },
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}, {
  "slug": "product-39",
  "name": "Café tostado 500g",
  "price": 690,
  "type": "tostado",
  "thumbnail": "/tostado-6.webp",
  "gallery": [
    "/tostado-6.webp",
    "/tostado-6.webp",
    "/tostado-6.webp",
    "/tostado-6.webp",
    "/tostado-6.webp"
  ],
  "description": "Disfruta de este delicioso café tostado, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. Con un peso de 500 gramos, esta bolsa de café es perfecta para disfrutar de múltiples tazas. El precio de esta exquisita variedad es de 690 pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!",
  "summary": "Descubre el delicioso café tostado, una elección perfecta para tus momentos de disfrute y relajación. Con un peso de 500 gramos, esta bolsa de café es ideal para disfrutar de múltiples tazas y compartir con tus seres queridos. Disfruta de la calidad y frescura de nuestro café a un precio increíble de 690 pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!",
  "stock": 10,
  "sku": "123456789",
  "categories": [
    "grano",
    "tostado",
    "capsulas"
  ],
  "reviews": [
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    },
    {
      "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      "email": "test@email.com",
      "raiting": 5,
      "userName": "Test User"
    }
  ],
  "aditionalInfo": {
    "weight": 100,
    "dimensions": {
      "width": 90,
      "height": 50,
      "length": 90
    }
  }
}] `
)