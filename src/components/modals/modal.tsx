'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Deserts__data } from "@/types";
import clsx from "clsx";
import { ModalDown } from "../../../public/icons";

interface ItemDetailModalProps {
  selectedItem: Deserts__data | null;
  onClose: () => void;
}

export default function ItemDetailModal({selectedItem, onClose}: ItemDetailModalProps) {
  if (!selectedItem) return null;
  const [selectedVariant, setSelectedVariant] = useState(
    selectedItem.variants[0]
  );

  return (
    <div className={`flex flex-col lg:flex-row relative ${!selectedItem && 'none'}`}>
      <div className="fixed left-[15px] right-[15px]">
        <button onClick={onClose} className="bg-white shadow-[0px_0px_12px_rgba(0,0,0,0.12)] rounded-[50%] w-[48px] h-[48px] flex justify-center items-center">
          <ModalDown/>
        </button>
      </div>
      <div className="w-full flex justify-center mb-4 md:h-full lg:mb-0">
        <img
          src={selectedVariant?.url}
          alt={selectedItem.name}
          className="w-full h-auto rounded-md max-h-[300px] object-contain"
        />
      </div>
      <div className=" md:w-[70%] md:mx-auto lg:w-[60%] relative">
        <h3 className="text-xl font-semibold mb-2">{selectedItem.name}</h3>

        <p className="mb-1 text-[#5c6370]">
          {selectedVariant.size}{" "}
          {selectedVariant.weight !== null &&
          selectedVariant.weight !== undefined
            ? `, ${selectedVariant.weight} g`
            : null}
        </p>
        <p className="mb-3">
          {selectedItem.description}
          {selectedItem.dis_available_toppings?.length > 0 && (
            <span>
              ,
              {selectedItem.dis_available_toppings
                .map((i) => i.name)
                .join(", ")}
            </span>
          )}
        </p>

        {/* Variant buttons */}
        <div
          className={clsx(
            "bg-[#f3f3f7] grid gap-2 mb-4 flex-wrap rounded-[9999px] p-1",
            {
              "grid-cols-1": selectedItem.variants.length === 1,
              "grid-cols-2": Number(selectedItem.variants.length) === 2,
              "grid-cols-4": selectedItem.variants.length >= 3, // yoki kerakli limit
            }
          )}
        >
          {selectedItem.variants.map((variant, index) => (
            <button
              key={index}
              className={`w-full bg-transparent border-0 cursor-pointer h-[32px] text-black ${
                selectedVariant.id === variant.id && "bg-white rounded-[999px]"
              } ${selectedItem.variants.length === 1 && "bg-transparent"}`}
              onClick={() => setSelectedVariant(variant)}
            >
              {variant.size}
            </button>
          ))}
        </div>

        {/* Add to cart button */}
        <Button className="mt-6 mb-[30px] w-full bg-[#d15700] rounded-[9999px] hover:bg-[#c14600] text-white lg:absolute lg:bottom-0 lg:mb-0">
          Add to Cart for {selectedVariant.price} UZS
        </Button>
      </div>
    </div>
  );
}
