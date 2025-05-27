const pizzas = [
  {
    name: "Pepperoni",
    fixed__price: null,
    vegetarian: false,
    pepper: false,
    description: "Pepperoni, mozzarella cheese and tomato sauce",
    url: "https://media.dodostatic.net/image/r:292x292/11ee897381fb744cad68c15797467945.jpg",
    price: 59000,
    dis_available_toppings: [
      {
        id: 1,
        name: "Olives",
      },
      {
        id: 2,
        name: "Mushrooms",
      },
    ],
    pizzaTypes: [
      {
        label_uz: "An'anaviy",
        label_en: "Traditional",
        "35": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "traditional",
          imgURL: "https://example.com/traditional_pizza.jpg",
          price: 15000,
          size: "35cm",
          wehight: 500,
        },
        "30": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "traditional",
          imgURL: "https://example.com/traditional_pizza.jpg",
          price: 25000,
          size: "30cm",
          weight: 400,
        },
      },
      {
        label_uz: "Yupqa",
        label_en: "Thin",
        "30": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "thin",
          imgURL: "https://example.com/thin_pizza.jpg",
          price: 20000,
          size: "30cm",
          weight: 300,
        },
        "35": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "thin",
          imgURL: "https://example.com/thin_pizza.jpg",
          price: 30000,
          size: "35cm",
          weight: 400,
        },
        "25": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "thin",
          imgURL: "https://example.com/thin_pizza.jpg",
          price: 35000,
          size: "25cm",
          weight: 300,
        },
      },
    ],
    toppings: [
      {
        id: 1,
        name: "Olives",
        prices: {
          "35": 5000,
          "30": 7000,
          "25": 9000,
        },
        imgURL: "https://example.com/olives.jpg",
      },
      {
        id: 2,
        name: "Mushrooms",
        prices: {
          "35": 7000,
          "30": 9000,
          "25": 11000,
        },
        imgURL: "https://example.com/mushrooms.jpg",
      },
      {
        id: 3,
        name: "Mozarella",
        prices: {
          "35": 8000,
          "30": 10000,
          "25": 12000,
        },
        imgURL: "https://example.com/mozzarella.jpg",
      },
    ],
  },
  {
    title: "Margarita",
    description_en: "Tomatoes, mozzarella, basil, tomato sauce",
    description_uz: "Pomidor, mozzarella, reyhan, pomidor sousi",
    imgURL: "https://example.com/margarita_pizza.jpg",
    meta_pizza_type: "dough",
    pizzaTypes: [
      {
        label_uz: "An'anaviy",
        label_en: "Traditional",
        type: "traditional",
        "35": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "traditional",
          imgURL: "https://example.com/traditional_pizza.jpg",
          price: 15000,
          size: "35cm",
          wehight: 500,
        },
        "30": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "traditional",
          imgURL: "https://example.com/traditional_pizza.jpg",
          price: 25000,
          size: "30cm",
          weight: 400,
        },
      },
      {
        label_uz: "Yupqa",
        label_en: "Thin",
        type: "thin",
        "30": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "thin",
          imgURL: "https://example.com/thin_pizza.jpg",
          price: 20000,
          size: "30cm",
          weight: 300,
        },
        "35": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "thin",
          imgURL: "https://example.com/thin_pizza.jpg",
          price: 30000,
          size: "35cm",
          weight: 400,
        },
        "25": {
          title: "Pizza",
          description:
            "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
          type: "thin",
          imgURL: "https://example.com/thin_pizza.jpg",
          price: 35000,
          size: "25cm",
          weight: 300,
        },
      },
    ],
    toppings: [
      {
        id: 1,
        name: "Olives",
        prices: {
          "35": 5000,
          "30": 7000,
          "25": 9000,
        },
        imgURL: "https://example.com/olives.jpg",
      },
      {
        id: 2,
        name: "Mushrooms",
        prices: {
          "35": 7000,
          "30": 9000,
          "25": 11000,
        },
        imgURL: "https://example.com/mushrooms.jpg",
      },
      {
        id: 3,
        name: "Mozarella",
        prices: {
          "35": 8000,
          "30": 10000,
          "25": 12000,
        },
        imgURL: "https://example.com/mozzarella.jpg",
      },
    ],
  },
];
