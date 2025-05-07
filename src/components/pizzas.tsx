"use client"

import { useQuery } from '@tanstack/react-query'
import { request } from '@/api'
import React from 'react'
import { Pizzas__data } from '@/types'
import { Button } from './ui/button'

const Pizzas = () => {

  const {data} = useQuery<Pizzas__data[]>({
    queryKey: ['pizzas'],
    queryFn: () => request.get
    ('pizzas').then(res => res.data)
  })  

  console.log(data);
  
    
  return (
    <div>
        <ul>
            {data?.map((item : Pizzas__data) => (
              <li key={item.id}>
                <div>
                    <img src={item.url} alt="" />
                </div>
                <div>
                  <h4>{item.name}</h4>
                    <p>{item.description} , {item.dis_available_toppings?.map((i : any) =>  (i.name))}</p>
                    {item.fixed__price ? <Button> {item.fixed__price}</Button> : <Button>from {item.price}</Button>}
                </div>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Pizzas