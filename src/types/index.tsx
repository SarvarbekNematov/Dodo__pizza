export interface Deserts__data {
  id: number;
  name: string;
  description: string;
  fixed__price: number;
  price: number;
  url: string;
  dis_available_toppings: [
    {
      id: number;
      name: string;
    }
  ];
  variants: [
    {
      size: string;
      weight: number;
      url: string;
      id: number;
      price: number;
    }
  ];
}

export interface Variant {
  id: number;
  type: "thin" | "traditional";
  sm: number;
  weight: number;
  price: number;
  imageUrl: string;
}

export interface ToppingPrice {
  sm: number; // e.g., "25", "30"
  price: number;
}

export interface Topping {
  id: number;
  name: string;
  prices: ToppingPrice[];
  imageUrl: string;
}

export interface BackendPizza {
  id: number;
  name: string;
  description: string;
  price: number;
  url: string;
  fixed__price: number | null;
  vegetarian: boolean;
  pepper: boolean;
  dis_available_toppings: [
    {
      id: number;
      name: string;
    }
  ];
  variants: Variant[];
  toppings: Topping[];
}

export interface BackendBaseData {
  id: number;
  name: string;
  description: string;
  price: number;
  url: string;
  fixed__price: number | null;
  vegetarian: boolean;
  pepper: boolean;
  dis_available_toppings: [
    {
      id: number;
      name: string;
    }
  ];
  variants: []
}

export interface SnacksData {
  id: number;
  name: string;
  description: string;
  fixed__price: number | null;
  url: string;
  price: number | null;
  vegetarian: boolean;
  pepper: boolean;
  dis_available_toppings: [
    {
      id: number;
      name: string;
    }
  ];
  variants: [
    {
      id: number;
      size: string;
      weight: number;
      price: number;
      imageUrl: string;
    }
  ];
}
