"use client"

import { useQuery } from '@tanstack/react-query'
import { request } from '@/api'
import { BackendPizza, SnacksData, Deserts__data } from '@/types'

export function useQueries() {
  const pizzasQuery = useQuery<BackendPizza[]>({
    queryKey: ['pizzas'],
    queryFn: () => request.get('pizzas').then((res) => res.data),
  })

  const snacksQuery = useQuery<SnacksData[]>({
    queryKey: ['snacks__key'],
    queryFn: () => request.get('snacks').then((res) => res.data),
  })

  const desertsQuery = useQuery<Deserts__data[]>({
    queryKey: ['deserts_key'],
    queryFn: () => request.get('deserts').then((res) => res.data),
  })

  const drinksQuery = useQuery<Deserts__data[]>({
    queryKey: ['drinks_key'],
    queryFn: () => request.get('drinks').then((res) => res.data),
  })

  const coffeeQuery = useQuery<Deserts__data[]>({
    queryKey: ['coffee_key'],
    queryFn: () => request.get('coffee').then((res) => res.data),
  })

  const milkshakesQuery = useQuery<Deserts__data[]>({
    queryKey: ['milkshakes_key'],
    queryFn: () => request.get('milkshakes').then((res) => res.data),
  })

  const saucesQuery = useQuery<Deserts__data[]>({
    queryKey: ['sauces_key'],
    queryFn: () => request.get('sauces').then((res) => res.data),
  })

  return {
    pizzasQuery,
    snacksQuery,
    desertsQuery,
    drinksQuery,
    coffeeQuery,
    milkshakesQuery,
    saucesQuery,
  }
} 