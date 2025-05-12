"use client";

import React from "react";
import { Pizzas__data } from "@/types";
import { Button } from "./ui/button";
import { Pepper__icon, Vegetarian__icon } from "../../public/icons";

type UserListProps = {
  data: Pizzas__data[] | undefined;
  name: string
};

const Pizzas = ({data , name}: UserListProps) => {

  return (
    <div>
      <h2 className="text-[24px] px-[10px] pt-[24px] pb-[8px] my-[32px] leading-[28px] font-medium lg:text-[36px]">
        {name}
      </h2>
      <ul className="px-[16px] grid lg:grid-cols-4 lg:gap-x-[30px] lg:gap-y-[60px] xl:gap-x-[38px]">
        {data?.map((item: Pizzas__data) => (
          <li
            className={`flex items-center justify-left py-[16px] gap-[8px] relative pb-[50px] lg:flex-col lg:gap-0 ${
              item.id != 1 && "border-t-[0.3px] lg:border-0 "
            }`}
            key={item.id}
          >
            <div className="h-[135px] w-[145px] lg:min-w-[220px] lg:min-h-[220px] xl:w-[290px] xl:h-[290px]">
              <img
                className="w-full h-full pt-[4px] pl-[4px]"
                src={item.url}
                alt=""
              />
            </div>
            <div className="w-[70%] lg:w-full">
              <h4 className="flex items-center gap-[5px] font-[550] text-[18px] leading-[20px] lg:my-[8px] lg:text-[20px]">
                {item.name} {item.vegetarian && <Vegetarian__icon />}
                {item.pepper && <Pepper__icon />}
              </h4>
              <div className="text-[14px] text-[#5c6370] leading-[20px]">
                {item.description}
                {item.dis_available_toppings?.map((i: any) => (
                  <span key={i.id}>, {i.name}</span>
                ))}
              </div>
              {item.fixed__price ? (
                <Button className="mt-[12px] px-[16px] py-[8px] text-[14px] text-[#d15700] bg-[#fff0e6] rounded-[9999px] font-medium lg:hidden">
                  {item.fixed__price} so'm
                </Button>
              ) : (
                <Button className="mt-[12px] px-[16px] py-[8px] text-[14px] text-[#d15700] bg-[#fff0e6] rounded-[9999px] font-medium lg:hidden">
                  from {item.price} so'm
                </Button>
              )}
              <div className="">
                {item.fixed__price ? (
                  <div className="absolute bottom-1 w-full items-center hidden mt-[12px] gap-[10px] lg:flex lg:justify-between">
                    <p className="font-[600] text-[16px] leading-[22px]">{item.fixed__price} so'm</p>
                    <Button className=" px-[20px] py-[8px] text-[16px] text-[#d15700] bg-[#fff0e6] rounded-[9999px] font-medium">
                      Add to cart 
                    </Button>
                  </div>
                ) : (
                  <div className="absolute bottom-1 w-full items-center hidden mt-[12px] gap-[10px] lg:flex lg:justify-between">
                    <p className="font-[600] text-[16px] leading-[22px]">from {item.price} so'm</p>
                    <Button className=" px-[20px] py-[8px] text-[16px] text-[#d15700] bg-[#fff0e6] rounded-[9999px] font-medium">
                      Select
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizzas;
