"use client";

import { request } from "@/api";
import Deserts from "@/components/deserts";
import Pizzas from "@/components/pizzas";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Deserts__data, Pizzas__data } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery<Pizzas__data[]>({
    queryKey: ["pizzas"],
    queryFn: () => request.get("pizzas").then((res) => res.data),
  });

  const { data: data__snacks } = useQuery<Pizzas__data[]>({
    queryKey: ["snacks__key"],
    queryFn: () => request.get("snacks").then((res) => res.data),
  });

  const { data: data__deserts } = useQuery<Deserts__data[]>({
    queryKey: ["deserts_key"],
    queryFn: () => request.get("deserts").then((res) => res.data),
  });

  const { data: data__drinks } = useQuery<Deserts__data[]>({
    queryKey: ["drinks_key"],
    queryFn: () => request.get("drinks").then((res) => res.data),
  });

  const { data: data__coffee } = useQuery<Deserts__data[]>({
    queryKey: ["coffee_key"],
    queryFn: () => request.get("coffee").then((res) => res.data),
  });

  const { data: data__milkshakes } = useQuery<Deserts__data[]>({
    queryKey: ["milkshakes_key"],
    queryFn: () => request.get("milkshakes").then((res) => res.data),
  });

  const { data: data__sauces } = useQuery<Deserts__data[]>({
    queryKey: ["sauces_key"],
    queryFn: () => request.get("sauces").then((res) => res.data),
  });

  return (
    <>
      <div>
        <div className=" m-[15px] ">
          <div className="flex justify-between border-1 border-[#e0e0e0] px-[15px] py-[12px] font-medium rounded-[12px] gap-[20px] items-center text-[15px] cursor-pointer ">
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
        <Pizzas name="Pizza" data={data} />
        <Pizzas name="Snacks" data={data__snacks} />
        <Deserts name="Deserts" data={data__deserts} />
        <Deserts name="Drinks" data={data__drinks} />
        <Deserts name="Coffee" data={data__coffee} />
        <Deserts name="Milkshakes" data={data__milkshakes} />
        <Deserts name="Sauces" data={data__sauces} />
        
      </div>
    </>
  );
}
