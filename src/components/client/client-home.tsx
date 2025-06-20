"use client"

import { useQueries } from '@/hooks/use-queries'
import Pizzas from '@/components/pizzas'
import Snacks from '@/components/snacks'
import Deserts from '@/components/deserts'
import Deliverys from '../deliverys'

export default function ClientHome() {
  const {
    pizzasQuery,
    snacksQuery,
    desertsQuery,
    drinksQuery,
    coffeeQuery,
    milkshakesQuery,
    saucesQuery,
  } = useQueries()

  if (
    pizzasQuery.isLoading ||
    snacksQuery.isLoading ||
    desertsQuery.isLoading ||
    drinksQuery.isLoading ||
    coffeeQuery.isLoading ||
    milkshakesQuery.isLoading ||
    saucesQuery.isLoading
  ) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="m-[15px]">
        <div className="flex justify-between border-1 border-[#e0e0e0] px-[15px] py-[12px] font-medium rounded-[12px] gap-[20px] items-center text-[15px] cursor-pointer">
          <div>
            <h4 className="font-bold">Pork free</h4>
            <p className="text-[#73798c]">We cook with chicken and beef</p>
          </div>
          <div>
            <img
              src="https://cdn.dodostatic.net/pizza-site/dist/assets/c4ac8b3c16ab46413668..svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Pizzas name="Pizza" data={pizzasQuery.data} />
      <Snacks name="Snacks" data={snacksQuery.data} />
      <Deserts name="Deserts" data={desertsQuery.data} />
      <Deserts name="Drinks" data={drinksQuery.data} />
      <Deserts name="Coffee" data={coffeeQuery.data} />
      <Deserts name="Milkshakes" data={milkshakesQuery.data} />
      <Deserts name="Sauces" data={saucesQuery.data} />
      <Deliverys/>
    </div>
  )
} 