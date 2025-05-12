export interface Pizzas__data {
    id: number,
    name: string,
    fixed__price: number,
    vegetarian: boolean,
    pepper: boolean,
    description: string,
    url: string,
    price: number,
    dis_available_toppings: [],
}

export interface Deserts__data {
    id: number,
    name: string,
    description: string,
    fixed__price: number,
    price: number,
    url: string,
    dis_available_toppings: [
        {
            id: number,
            price: number,
            name: string
        }
    ],
    variants: [
        {
            size: string,
            weight: number,
            url: string,
            id: number,
            price: number
        }
    ]
}