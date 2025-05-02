import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { World__icon } from "../../../public/icons";
import Link from "next/link";

const Top__header = () => {
  return (
    <div className="flex justify-between py-[12px] mx-auto max-w-[1200px] px-6 items-center" >
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <World__icon />
            <SelectValue placeholder="Langugage" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Русский">Русский</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="o‘zbek">o‘zbek</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ul className="gap-[20px] items-center hidden md:flex">
        <li className="flex items-center">
          <span className="block w-[9px] h-[9px] rounded-[50%] bg-red-500"></span>
          <p className="CustomFont text-[14px] leading-[20px] pl-[10px]">Live</p>
        </li>
        <li>
          <a className="CustomFont text-[14px] leading-[20px]" href="">Franchise</a>
        </li>
        <li>
          <Link className="CustomFont text-[14px] leading-[20px]" href='/product'>About us</Link>
        </li>
        <li>
          <Link className="CustomFont text-[14px] leading-[20px]" href={'/contacts'}>Store info</Link>
        </li>
      </ul>

      

    </div>
  );
};

export default Top__header;
