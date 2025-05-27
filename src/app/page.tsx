"use client";

import { request } from "@/api";
import Deserts from "@/components/deserts";
import Pizzas from "@/components/pizzas";
import Snacks from "@/components/snacks";
import { Deserts__data, BackendPizza, SnacksData, BackendBaseData } from "@/types";
import { getAccessToken, getLogtoContext } from "@logto/next/server-actions";
import { useQuery } from "@tanstack/react-query";
import { logtoConfig } from "./logto";
import SignOut from "./sign-out";
import SignIn from "./sign-in";
import { handleSignIn, handleSignOut } from "@/actions/auth";
import GetAccessToken from "./get-acces-token";
import { useEffect, useState } from "react";
import { handleGetAccessToken } from "@/lib/actions";
import OrderButton from "@/lib/orderButton";
import Link from "next/link";

export default function Home() {
  const { data } = useQuery<BackendPizza[]>({
    queryKey: ["pizzas"],
    queryFn: () => request.get("pizzas").then((res) => res.data),
  });

  const { data: data__snacks } = useQuery<SnacksData[]>({
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

  // const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const res = await fetch('/api/auth/context');
        const data = await res.json();
        
        setIsAuthenticated(data.isAuthenticated);
        setUserInfo(data.claims);
      } catch (error) {
        console.error('Auth context error:', error);
      }
    };

    fetchContext();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  console.log(isAuthenticated , 'isAuthenticated');
  

  return (
    <>
      <div>


      {isAuthenticated ? (
          <SignOut
            onSignOut={handleSignOut}
          />
        ) : (
          <SignIn
            onSignIn={handleSignIn}
          />
        )}
      <GetAccessToken onGetAccessToken={handleGetAccessToken} />

        <div className="m-[15px] mt-[20px]">
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
        <Snacks name="Snacks" data={data__snacks} />
        <Deserts name="Deserts" data={data__deserts} />
        <Deserts name="Drinks" data={data__drinks} />
        <Deserts name="Coffee" data={data__coffee} />
        <Deserts name="Milkshakes" data={data__milkshakes} />
        <Deserts name="Sauces" data={data__sauces} />
        
      </div>
    </>
  );
}
